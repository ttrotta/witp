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

## 🤖 AI Agent Skills

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
