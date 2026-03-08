---
name: screaming-architecture
description: Domain-driven design patterns for WITP project - strict layer isolation and dependency rules for modules, app, ai, infrastructure, and shared layers
---

# Screaming Architecture Guidelines for WITP

## Core Philosophy

This project strictly follows a **Screaming Architecture** (Domain-Driven Design applied to frontend/fullstack). The folder structure must immediately communicate the business purpose of the application ("What is This Pain?") rather than the framework being used.

## The 5 Core Layers

You must strictly place new files into one of these 5 layers. **Do not create new root folders.**

1. `app/`: Next.js routing, pages, layouts, and external webhooks ONLY.
2. `modules/`: Business domains. This is where the core logic lives.
3. `ai/`: AI models, agent logic, and MCP server protocols.
4. `infrastructure/`: Third-party adapters, database clients (Prisma), external API configs.
5. `shared/`: Generic, domain-agnostic code (UI components, utils, global types).

## STRICT DEPENDENCY RULES (NEVER VIOLATE THESE)

### 🔴 Rule 1: No Upward Imports from `app/`

Code inside `modules/`, `ai/`, `infrastructure/`, or `shared/` **MUST NEVER** import anything from `app/`. The `app/` folder is the outermost presentation layer.

- **BAD:** `import { usePathname } from 'next/navigation'` inside a `modules/` logic file.
- **GOOD:** Pass the pathname as a prop from the page/component in `app/` down to the module.

### 🔴 Rule 2: Strict Module Isolation

Modules inside `modules/` must remain independent. `modules/anatomy-3d/` **MUST NEVER** directly import logic, components, or actions from `modules/community/`.

- If two modules need to communicate, use the global state in `shared/store/` (Zustand) or compose them together at the `app/` layer.

### 🔴 Rule 3: Database Access

**NEVER** instantiate Prisma directly inside a module or action.

- **ALWAYS** import the singleton client from `infrastructure/db/prisma`.
- Example: `import prisma from '@/infrastructure/db/prisma'`

### 🔴 Rule 4: Action Placement

Server Actions must live within their respective domain.

- Do not create a global `actions/` folder.
- Example: A function to save a pain record belongs in `modules/pain-tracking/actions.ts`.

## Code Generation Instructions

When asked to create a new feature:

1. Identify the domain (Does it belong to `community`, `anatomy-3d`, `auth`, etc.?).
2. Create the necessary UI components inside `modules/[domain]/components/`.
3. If it requires database mutation, add the Server Action to `modules/[domain]/actions.ts`.
4. If it requires validation, add the Zod schema to `modules/[domain]/schemas.ts`.
5. Finally, wire the feature into the Next.js routing by importing it into the relevant page in `app/[lang]/...`.
