# PLANNING.md

## 1. Project Goals

*   [x] Create a modern, responsive web application for MykoMystic offer
*   [x] Implement clean, maintainable code with best practices
*   [x] Ensure excellent performance and user experience
*   [x] Build scalable architecture for future development

## 2. Tech Stack

*   **Backend:** Python (FastAPI recommended)
*   **Frontend:** TypeScript, React (Next.js 15+)
*   **Database:** Supabase
*   **Deployment:** Vercel (Frontend), Railway (Backend)
*   **UI Components:** shadcn/ui, custom components
*   **Package Manager:** pnpm
*   **Icons:** Lucide React
*   **Fonts:** Inter (text), Unbounded (headings)

## 3. Coding Style & Conventions

*   **Python:** PEP8, Black, Type Annotations
*   **TypeScript/React:** Community Standards, Prettier, ESLint
*   **General:** SOLID, DRY, KISS principles
*   **File Size Limit:** ~500 lines per file (refactor if exceeding)
*   **Imports:** Relative within modules/packages.
*   **Comments:** Explain complex logic. Use `# Reason:` or `// Reason:` for non-obvious choices.
*   **Component Structure:** Functional components with hooks
*   **State Management:** React Context or Zustand for global state
*   **Styling:** CSS Modules with Tailwind CSS

## 4. Project Structure

*   **/app** - Next.js App Router files (pages, layouts)
*   **/components** - Reusable UI components
*   **/lib** - Utility functions and shared logic
*   **/public** - Static assets
*   **/styles** - Global styles and theme configuration (if applicable)
*   **/types** - TypeScript type definitions
*   **/hooks** - Custom React hooks
*   **/context** - React Context providers
*   **/api** - API route handlers (if applicable)
*   **/services** - Service classes for external API communication
*   **/config** - Application configuration

## 5. Development Workflow

*   **Task Management:** All tasks tracked in TASK.md with status emojis
*   **Git Flow:** Feature branches, descriptive commit messages
*   **Code Reviews:** All changes should be reviewed before merging
*   **Testing:** Unit tests for critical functionality
*   **Documentation:** Update README.md with any new features or setup changes
*   **Design System:** Follow guidelines in GUIDELINES.md for consistency

## 6. Design System

Detailed design guidelines are available in the [GUIDELINES.md](./GUIDELINES.md) document.

Key points include:
*   **Typography:** Unbounded for headings, Inter for text
*   **Colors:** Light palette with purple and blue accents
*   **Components:** Modular, reusable components with CSS modules
*   **Effects:** Subtle animations, gradients, and shadows
*   **Accessibility:** Ensure proper contrast and semantic markup

## 7. Key Constraints & Considerations

*   Mobile-first design approach
*   Accessibility compliance (WCAG 2.1 AA)
*   Performance optimization for core web vitals
*   SEO best practices

## 8. README.md

*   Keep `README.md` updated with setup, dependencies, and structure. Mark last verification date. 

Last Updated: 2024-06-28 