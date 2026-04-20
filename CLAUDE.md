# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mizuki is a modern, feature-rich static blog template built with Astro, featuring advanced functionality and beautiful design. It includes features like smooth animations, light/dark theme switching, advanced search, enhanced Markdown support, and various special pages for anime tracking, friends, diary, etc.

## Project Structure

The project follows a component-driven architecture with the following key directories:
- `src/` - Main source code
  - `components/` - Reusable UI components organized by atomic design (atoms/molecules/organisms)
  - `layouts/` - Page layouts
  - `pages/` - Route definitions
  - `content/` - Blog posts and special content pages
  - `styles/` - Global styles and Tailwind configuration
  - `types/` - TypeScript type definitions
  - `plugins/` - Custom Astro plugins for Markdown processing
- `public/` - Static assets
- `docs/` - Documentation files

## Development Commands

All commands should be run from the project root using pnpm:

- `pnpm install` - Install dependencies
- `pnpm dev` - Start local development server at `localhost:4321`
- `pnpm build` - Build production site to `./dist/`
- `pnpm preview` - Preview build locally before deployment
- `pnpm check` - Run Astro error checking
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Check and fix code issues
- `pnpm new-post <filename>` - Create a new blog post
- `pnpm astro ...` - Run Astro CLI commands
- `pnpm sync-content` - Synchronize content from external repository
- `pnpm update-anime` - Update anime data
- `pnpm update-bangumi` - Update Bangumi data
- `pnpm update-bilibili` - Update Bilibili data

## Configuration

The site is configured through `src/config.ts` which exports multiple configuration objects:
- `siteConfig` - Core site settings (title, subtitle, URLs, theme, etc.)
- `navBarConfig` - Navigation bar links and structure
- `profileConfig` - Profile section settings
- `sidebarLayoutConfig` - Sidebar component layout and positioning
- `commentConfig` - Comment system settings (Twikoo/Giscus)
- And many more specific configuration objects

## Content Management

- Create new posts: `pnpm new-post <filename>`
- Edit posts: Modify files in `src/content/posts/`
- Customize special pages: Edit files in `src/content/spec/`
- Add images: Place images in `src/assets/` or `public/`

Blog posts use YAML frontmatter with fields like title, published date, description, tags, category, draft status, etc.

## Component Architecture

The project follows atomic design principles:
- `atoms/` - Basic UI elements (buttons, badges, icons)
- `molecules/` - Combinations of atoms (cards, forms)
- `organisms/` - Complex UI sections (navigation, headers)

When adding new components, follow the existing patterns and consider the component hierarchy.

## Styling

- Uses Tailwind CSS for styling
- Custom styles in `src/styles/`
- Theme customization through CSS variables
- Responsive design with mobile-first approach

## Special Features

- Anime tracking page with Bangumi/Bilibili API integration
- Friends page with customizable friend cards
- Diary page for sharing life moments
- Archive page with organized timeline view
- Advanced search with Pagefind
- Math formula support with KaTeX
- Image optimization with PhotoSwipe gallery
- Comment system with Twikoo integration

## Content Separation

The project supports separating code and content into independent repositories:
- Local Mode (default): Content stored in the same repository
- Content Separation Mode: Content stored in external repository, enabled by setting `ENABLE_CONTENT_SYNC=true` in `.env`

## Performance Optimizations

- Swup for smooth page transitions
- Lazy loading for images and components
- Font subsetting to reduce font file sizes
- Optimized code splitting
- Preloading for critical resources

## Development Guidelines

- Follow the component architecture guidelines in `docs/rule/`
- Use existing atom components when possible rather than creating duplicates
- Avoid using `!important` in CSS (except for Twikoo components)
- Use TypeScript interfaces defined in `src/types/`
- Maintain consistent naming conventions
- Follow accessibility best practices