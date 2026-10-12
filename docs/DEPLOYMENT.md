# WITP Deployment Architecture & Operations Guide

> **Compute Platform**: Vercel (Next.js 16 App Router on Node.js Serverless Runtime)  
> **Database Platform**: Supabase (Managed PostgreSQL 15+ with Supavisor Connection Pooler)  
> **CDN & Static Delivery**: Vercel Edge Network (Static GLTF assets, Draco WASM decoders)  
> **Package Manager**: `pnpm@12.4.2`  

---

## Table of Contents

- [Deployment Topology](#deployment-topology)
  - [Architecture Diagram](#architecture-diagram)
  - [Component Roles](#component-roles)
- [Build Pipeline & Vercel Configuration](#build-pipeline--vercel-configuration)
  - [Package Scripts & Build Flow](#package-scripts--build-flow)
  - [Prisma Client Generation Strategy](#prisma-client-generation-strategy)
  - [Vercel Project Settings](#vercel-project-settings)
- [Environment Variables Matrix](#environment-variables-matrix)
  - [Authoritative Variables Table](#authoritative-variables-table)
  - [Security Rules for Secrets](#security-rules-for-secrets)
- [Database Migration & CI/CD Workflow](#database-migration--cicd-workflow)
  - [Automated Migration Execution](#automated-migration-execution)
  - [Preview Environment Strategy](#preview-environment-strategy)
- [Production Readiness Checklist](#production-readiness-checklist)
  - [1. Database & Connectivity](#1-database--connectivity)
  - [2. Next.js Runtime & Compute](#2-nextjs-runtime--compute)
  - [3. Security & Cookies](#3-security--cookies)
  - [4. 3D & Static Assets](#4-3d--static-assets)
- [Health Checks & Observability](#health-checks--observability)
  - [Ping / Health Route Pattern](#ping--health-route-pattern)
  - [Log Monitoring & Diagnostic Queries](#log-monitoring--diagnostic-queries)

---

## Deployment Topology

### Architecture Diagram

```mermaid
graph TD
    subgraph ClientLayer ["Client Layer"]
        Browser["User Browser / Mobile Device"]
    end

    subgraph VercelEdge ["Vercel Edge Network & CDN"]
        EdgeCDN["Vercel Edge CDN"]
        StaticAssets["Static Assets (/models/anatomy.glb, /draco/*.wasm)"]
    end

    subgraph VercelCompute ["Vercel Serverless Platform"]
        AppRouter["Next.js 16 App Router (Node.js Runtime)"]
        ServerActions["Server Actions RPC ('use server')"]
        PrismaClient["Prisma v7 Client (@prisma/adapter-pg)"]
    end

    subgraph SupabasePlatform ["Supabase Cloud (PostgreSQL)"]
        Supavisor["Supavisor Connection Pooler (Port 6543, Transaction Mode)"]
        DirectPostgres["Direct PostgreSQL Instance (Port 5432)"]
    end

    Browser -->|1. Request static assets| EdgeCDN
    EdgeCDN --> StaticAssets
    Browser -->|2. Page load & Server Action POST| AppRouter
    AppRouter --> ServerActions
    ServerActions --> PrismaClient
    PrismaClient -->|3. Runtime queries via DATABASE_URL| Supavisor
    Supavisor --> DirectPostgres

    CI["GitHub Actions / CI Deployment"] -.->|4. Migrations via DIRECT_URL| DirectPostgres
```

### Component Roles

1. **Vercel Serverless Compute**:
   - Hosts the Next.js 16 App Router application.
   - Executes Server Actions and Server Components within isolated, ephemeral Node.js serverless functions.
   - Scales horizontally on demand to accommodate traffic spikes.
2. **Supabase Managed PostgreSQL**:
   - Stores all relational data: users, sessions, pain tracking records, anatomical references, and community interactions.
   - Provides Supavisor connection pooling to safely handle hundreds of concurrent serverless lambda connections without exhausting database connection limits.
3. **Vercel Edge CDN**:
   - Caches and delivers static assets globally with low latency.
   - Serves the Draco-compressed 3D human model (`/models/anatomy.glb`) and WebAssembly decoder (`/draco/draco_decoder.wasm`).

---

## Build Pipeline & Vercel Configuration

### Package Scripts & Build Flow

The build pipeline is configured in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit",
    "model:generate": "tsx src/modules/anatomy-3d/generate-model.ts",
    "db:seed": "prisma db seed",
    "test": "tsx --test witp.test.ts",
    "postinstall": "prisma generate"
  }
}
```

#### Step-by-Step Vercel Build Flow:
1. **Repository Cloning**: Vercel checks out the repository.
2. **Dependency Resolution**: `pnpm install --frozen-lockfile` runs automatically using `pnpm@12.4.2`.
3. **Postinstall Execution**:
   - The `"postinstall": "prisma generate"` lifecycle hook fires.
   - Prisma CLI loads `prisma.config.ts` and `prisma/schema.prisma`.
   - The generated client is compiled to `./generated/prisma`.
4. **Application Build**:
   - Vercel executes `pnpm build` (`prisma generate && next build`).
   - TypeScript compiler checks all paths and types against `@generated/prisma/client`.
   - Next.js bundles Server Actions, compiles React 19 Server Components, and minifies client-side JavaScript.
5. **Static Optimization & Asset Deployment**: Static assets in `public/` are pushed to the Vercel Edge CDN.

### Prisma Client Generation Strategy

Because WITP uses Prisma ORM v7 with a custom output path (`output = "../generated/prisma"`), client generation must occur before TypeScript compilation:
- **`postinstall` Guarantee**: Even if build scripts run out of order or tools inspect types before the build, `postinstall` ensures `@generated/prisma/client` exists immediately following dependency installation.
- **`build` Redundancy**: `prisma generate && next build` in `"build"` ensures any schema updates during CI steps are compiled prior to the Next.js bundling phase.

### Vercel Project Settings

Configure the project in the Vercel dashboard:

| Setting | Value |
| :--- | :--- |
| **Framework Preset** | Next.js |
| **Node.js Version** | `20.x` or `22.x` |
| **Package Manager** | `pnpm` (detected via `packageManager` field) |
| **Install Command** | `pnpm install` |
| **Build Command** | `pnpm build` |
| **Output Directory** | `.next` (default) |

---

## Environment Variables Matrix

### Authoritative Variables Table

| Variable Name | Environment | Scope | Required | Description & Format |
| :--- | :---: | :---: | :---: | :--- |
| **`DATABASE_URL`** | Prod / Preview / Dev | Server | **Yes** | Connection string for Supavisor transaction pooler on **port 6543**.<br>`postgresql://postgres.[ref]:[pwd]@aws-0-[region].pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true` |
| **`DIRECT_URL`** | Prod / Preview / Dev | Server | **Yes** | Direct connection string to PostgreSQL on **port 5432** for migrations and schema introspection.<br>`postgresql://postgres:[pwd]@db.[ref].supabase.co:5432/postgres?sslmode=require` |
| **`NODE_ENV`** | Prod / Preview / Dev | Server / Build | **Yes** | Set automatically by Vercel (`production` or `development`). Governs secure cookie flags and development Prisma caching. |
| **`NEXT_PUBLIC_APP_URL`** | Prod / Preview / Dev | Client / Server | Optional | Fully qualified public URL of the application.<br>Example: `https://witp.health` |

### Security Rules for Secrets

> [!WARNING]
> **Zero Exposure of Database Credentials to Client Bundles**
> 
> Never prefix `DATABASE_URL` or `DIRECT_URL` with `NEXT_PUBLIC_`. Any variable prefixed with `NEXT_PUBLIC_` is inlined into the client-side JavaScript bundle during build time and exposed to all visitors.

Best practices for secret management:
1. Configure `DATABASE_URL` and `DIRECT_URL` within the **Vercel Project Settings > Environment Variables** tab.
2. In local development, maintain secrets in `.env` (which is excluded from Git via `.gitignore`).
3. For preview deployments, link either a dedicated staging Supabase database or a separate Supabase branch.

---

## Database Migration & CI/CD Workflow

### Automated Migration Execution

> [!CAUTION]
> **Never run `prisma migrate dev` or `prisma db push` in production.**  
> `prisma migrate dev` is strictly an interactive development tool that generates migration files and may reset test databases.

For production and staging deployments, apply migrations programmatically using `prisma migrate deploy`:

```bash
# Executed in CI or pre-deployment hook:
npx prisma migrate deploy
```

#### Why Migrations Use `DIRECT_URL`:
Prisma migrations require DDL operations and PostgreSQL advisory locks (`pg_advisory_lock`), which transaction-mode connection poolers like Supavisor (port 6543) do not support.

As defined in `prisma.config.ts`:
```typescript
datasource: {
  url: process.env["DIRECT_URL"] ?? process.env["DATABASE_URL"],
}
```
When running `npx prisma migrate deploy`, the CLI automatically resolves `DIRECT_URL` (port 5432), successfully acquiring advisory locks and applying pending SQL migration files.

### Preview Environment Strategy

When pull requests trigger Vercel Preview Deployments:
- **Shared Staging Database**: Preview branches connect to a dedicated staging Supabase project via preview environment variables.
- **Supabase Branching**: For complete database isolation, configure Supabase Database Branching, where each Git branch maps to an ephemeral Supabase database instance.

---

## Production Readiness Checklist

Before promoting a release to production, verify each item in this checklist:

### 1. Database & Connectivity
- [ ] `DATABASE_URL` points to Supavisor on port `6543` with `?sslmode=require&pgbouncer=true`.
- [ ] `DIRECT_URL` points to direct PostgreSQL on port `5432` with `?sslmode=require`.
- [ ] `npx prisma migrate deploy` executed successfully against production with zero pending migrations.
- [ ] Database reference tables (`BodyPart`) seeded via `pnpm db:seed`.
- [ ] Supabase connection pool size configured appropriately for expected serverless traffic.

### 2. Next.js Runtime & Compute
- [ ] `pnpm typecheck` passed with 0 TypeScript compiler errors.
- [ ] `pnpm lint` passed with 0 ESLint errors.
- [ ] Automated tests (`pnpm test`) executed and 100% passing.
- [ ] `pnpm build` verified locally without bundle errors or unhandled warnings.

### 3. Security & Cookies
- [ ] `witp-session` cookie configured with `secure: true` in production (`NODE_ENV === "production"`).
- [ ] `SameSite=Lax` and `HttpOnly` flags active on session cookies.
- [ ] Authentication rate limiter active to mitigate credential stuffing.
- [ ] No database secrets or private credentials present in client bundles or public repositories.

### 4. 3D & Static Assets
- [ ] Draco compressed model `public/models/anatomy.glb` verified ($< 2\text{ MB}$).
- [ ] Draco WebAssembly decoder files present under `public/draco/draco_decoder.wasm` and `draco_wasm_wrapper.js`.
- [ ] Cache-Control response headers for 3D assets set to `public, max-age=31536000, immutable` on CDN.

---

## Health Checks & Observability

### Ping / Health Route Pattern

To monitor uptime and verify end-to-end database connectivity from serverless functions, implement a lightweight health check endpoint or Server Action:

```typescript
// Example: src/app/api/health/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/infrastructure/db/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const start = Date.now();
  try {
    // Ping PostgreSQL using a lightweight raw query
    await prisma.$queryRaw`SELECT 1`;
    const latency = Date.now() - start;

    return NextResponse.json({
      status: "healthy",
      database: "connected",
      latencyMs: latency,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        database: "disconnected",
        error: error instanceof Error ? error.message : "Database ping failed",
      },
      { status: 503 }
    );
  }
}
```

### Log Monitoring & Diagnostic Queries

- **Vercel Runtime Logs**: Monitor Server Action execution times, error rates, and function invocations in real time.
- **Supabase Dashboard**: Review Supavisor pool utilization, CPU load, disk IOPS, and active client connection counts.
- **Prisma Connection Health**: In development or staging, monitor connection lifecycle logs to detect connection leaks or idle pool timeouts.
