# What is This Pain? 🦴

> **🚧 Status: In Active Development** > This project is currently in its early development stages. Core architecture, database models, and module structures are being actively established.

## 📖 About the Project

**What is This Pain?** is an interactive, 3D-driven web application designed to help users identify physical discomforts, log their pain history, and receive intelligent insights.

Instead of traditional forms, users interact with a 3D anatomical model to pinpoint their pain. The platform also fosters a community where users can share their experiences, comment on specific conditions, and track their rehabilitation journey through a personal blog.

## 🏗️ Architecture & Project Structure

This project follows a **Screaming Architecture** approach, heavily inspired by Domain-Driven Design (DDD) and Feature-Sliced Design. The goal is to ensure the codebase is highly scalable, maintainable, and explicitly communicates its business logic.

The repository is organized into distinct layers:

- **`app/` (Routing & Views):** Handles the Next.js App Router logic, pages, and internationalization (`[lang]`). It remains completely agnostic of the business logic.
- **`modules/` (Business Domains):** The heart of the application. Features are grouped by domain rather than file type.
  - `anatomy-3d/`: Renders the interactive 3D canvas (React Three Fiber) and camera animations (GSAP).
  - `pain-tracking/`: Manages pain logs and connects with domain-specific AI agents.
  - `community/`: Handles the social network aspect (posts, nested comments, likes).
  - `auth/` & `user-profile/`: Manages user sessions, settings, and personal blogs.
- **`ai/` (Intelligence Layer):** Contains the shared AI configurations and the Model Context Protocol (MCP) integrations to power our intelligent agents.
- **`infrastructure/` (Technical Adapters):** Isolates external dependencies like the Prisma database client, Supabase configurations, and environment variable validation.
- **`shared/` (Core Utilities):** Dumb UI components, global Zustand stores, and shared TypeScript types.

## 💻 Tech Stack Highlights

- **Framework:** Next.js (App Router)
- **3D & Animations:** React Three Fiber, GSAP
- **Database & ORM:** PostgreSQL (Supabase), Prisma
- **State Management:** Zustand
- **Validation:** Zod

## Run the anatomical journal

Use Node.js 20.19+ (Node.js 24 recommended) and the pinned pnpm version. Create `.env` using `.env.example` and point `DATABASE_URL` at your PostgreSQL database. `DIRECT_URL` is optional for migrations through a direct connection.

```bash
pnpm install
pnpm exec prisma migrate deploy
pnpm db:seed
pnpm dev
```

Open `/es` or `/en`. The body map works without signing in. Create an account in the pain panel to save the current draft, or visit `/es/register`. Passwords use salted scrypt; sessions use expiring HttpOnly cookies and hashed tokens in PostgreSQL. History queries always derive the owner from the server session. There is no demo identity or client-supplied user ID. Session cookies require HTTPS in production.

The committed `public/models/anatomy.glb` is an original, stylized body-region locator with 32 individually selectable meshes, compressed with Draco. It is not a clinically validated anatomical atlas. The generation source and shared catalog keep mesh names, translations, selection, and Prisma seed aligned. `pnpm model:generate` rebuilds the GLB and copies the local Draco decoders; no decoder CDN is needed. Seed upserts are safe to repeat.

The scene uses Drei CameraControls for smooth focus and demand rendering with capped pixel density. GSAP is installed as requested but is not loaded into the viewer because CameraControls already supplies camera transitions. The keyboard-accessible region selector also works when WebGL or the model fails. Drafts stay in component memory across region changes; they are not stored in browser storage and do not survive a reload. The journal displays the latest 20 entries.

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm build
```

The tests decode the actual compressed asset, verify the mesh/dictionary contract, exercise selection/reset, reject invalid pain and account input, and check passwords and authentication throttling. Authentication throttling is per process; use a shared limiter before deploying multiple app replicas. Expired sessions are removed when their user signs in again; a periodic cleanup can remove remaining expired rows. Password recovery and email verification are not implemented. The Community link opens the repository's existing forum placeholder.

Loader reference: [Drei useGLTF](https://github.com/pmndrs/drei/blob/master/docs/loaders/gltf-use-gltf.mdx). Draco reference: [Three.js DRACOLoader](https://threejs.org/docs/pages/DRACOLoader.html).

## AI agent setup

This project includes specialized skills to guide AI agents in following best practices specific to this codebase. To enable these skills for your AI assistant:

```bash
# Run from the project root
./skills/setup.sh --all
```

This creates symlinks so your AI agent can access the skills. You can also target specific agents:

```bash
./skills/setup.sh --claude    # For Claude
./skills/setup.sh --gemini    # For Gemini
./skills/setup.sh --codex    # For Codex
```
