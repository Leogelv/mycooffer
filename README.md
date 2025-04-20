# MykoMystic Offer

A modern web application built with Next.js 15 for MykoMystic offers and services.

## Project Overview

This project uses Next.js 15 with App Router, TypeScript, and Tailwind CSS to create a high-performance, responsive web application. The application implements shadcn/ui components for a consistent UI experience.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context / Hooks
- **Package Manager**: pnpm
- **Database**: Supabase
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm 8.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mykomystic_offewr.git
   cd mykomystic_offewr
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js App Router files
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── Button.tsx        # Кнопка с действием
│   ├── CurrentStatusBlock.tsx # Компонент "Что у вас уже есть"
│   ├── FeaturesBlock.tsx # Компонент с возможностями
│   ├── HeroBlock.tsx     # Главный блок страницы
│   ├── MeshGradientBackground.tsx # Компонент с градиентным фоном
│   ├── RoadmapBlock.tsx  # Компонент с дорожной картой
│   ├── TechDetailsBlock.tsx # Компонент с техническими деталями и ценами
│   └── UserJourneyBlock.tsx # Компонент с путем пользователя
├── lib/                  # Utility functions
│   └── utils.ts          # Common utility functions
├── public/               # Static assets
├── PLANNING.md           # Project architecture and planning
├── TASK.md               # Current tasks and progress
└── package.json          # Dependencies and scripts
```

## Development Workflow

1. Check `PLANNING.md` for architecture and coding standards
2. Review `TASK.md` for current tasks and their status
3. Create or update components following the established patterns
4. Run tests before submitting changes
5. Update documentation for any new features

## Available Scripts

- `pnpm dev` - Start development server with turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

The application is configured for deployment on Vercel.

## Contributing

1. Follow the coding standards in `PLANNING.md`
2. Update `TASK.md` with your current tasks
3. Use feature branches for new features
4. Write descriptive commit messages

## License

[Specify license information]

---

Last verified: 2024-07-27
