# AI Engineer Portfolio

A premium, modern, and high-performance portfolio website built for an AI/ML Engineer and Researcher. Designed with the aesthetic of high-end tech company websites, featuring smooth cinematic animations, particle backgrounds, and a highly responsive design.

## Features

- **Modern Tech Stack**: Next.js 14, React, Tailwind CSS
- **Smooth Animations**: Framer Motion & Lenis Scroll wrapper
- **3D Elements**: Interactive Three.js particle canvas background
- **Premium UI**: Dark mode default, Glassmorphism cards, Neon blue accents
- **Custom Components**: Magnetic hover buttons, Animated custom cursor, Scroll-triggered reveals
- **SEO Optimized**: Built for fast page loads and maximum crawler visibility

## Project Structure

- `src/components/layout`: Core layout wrappers (Navbar, Footer, Lenis smooth scroll provider)
- `src/components/ui`: Reusable design system components (Glass cards, Magnetic buttons, etc.)
- `src/components/sections`: Page sections (Hero, About, Skills, Projects, Research, Achievements, etc.)
- `src/app`: Next.js App Router files and global styles

## Local Setup Instructions

1. **Prerequisites**
   Ensure you have Node.js (v18 or higher) and npm installed.

2. **Install Dependencies**
   Run the following command to install all necessary packages. We specifically lock Three Fiber to version 8 to maintain compatibility with Next.js 14 and React 18.
   ```bash
   npm install
   npm install @react-three/fiber@8 @react-three/drei@9
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Vercel Deployment Configuration

This project is fully ready to be deployed on Vercel.

1. Create a GitHub repository and push this source code to it.
2. Log into [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. **Framework Preset**: Vercel will automatically detect **Next.js**.
5. **Build Command**: `npm run build`
6. **Install Command**: `npm install --legacy-peer-deps` (Important: Add this override to the Install Command settings to prevent `@react-three/fiber` peer dependency issues during Vercel's build).
7. Click **Deploy**. Vercel will build and host your portfolio automatically, giving it a global edge network CDN.

## Customization
- **Colors & Fonts**: Modify `tailwind.config.ts` and `globals.css` to update the background, accent colors, and global fonts.
- **Content**: Update the constant lists (e.g., `SKILLS_DATA`, `PROJECTS`, `ONGOING_RESEARCH`) located at the top of each section component in `src/components/sections/`.
