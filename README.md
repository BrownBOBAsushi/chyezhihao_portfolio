# Chye Zhi Hao - Personal Portfolio

A minimalist, Apple-style personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Minimalist Design**: Clean, Apple-inspired aesthetic with lots of white space
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Subtle micro-animations and transitions
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Type-Safe**: Built with TypeScript for better developer experience
- **Easy to Customize**: All content is extracted to `data/profile.ts`

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd chyezhihao_portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃 Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Building for Production

Build the production-ready application:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## ✏️ Customizing Content

All portfolio content is stored in `data/profile.ts`. Simply edit this file to update:

- Personal information (name, title, summary)
- Contact details (email, LinkedIn)
- Education history
- Work experience
- Projects and hackathons
- Skills and languages

No need to touch the component files unless you want to change the layout!

## 📄 Adding Your Resume

1. Place your resume PDF file in the `public/` folder
2. Name it exactly: `ChyeZhiHao_Resume.pdf`
3. The "Download Résumé" button will automatically link to it

## 🚢 Deploying to Vercel

This project is configured to deploy seamlessly on Vercel. Follow these steps:

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure everything
   - Click "Deploy"

3. **That's it!** Your site will be live in minutes.

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment.

### Environment Variables

No environment variables are required for basic deployment. If you add a contact form backend later, you can add environment variables in the Vercel dashboard under Project Settings → Environment Variables.

## 📁 Project Structure

```
chyezhihao_portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main portfolio page
│   ├── globals.css          # Global styles
│   └── icon.svg             # Favicon
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Section.tsx          # Section wrapper component
│   ├── ProjectCard.tsx      # Project display card
│   ├── TimelineItem.tsx     # Education timeline item
│   ├── ExperienceCard.tsx   # Experience display card
│   ├── SkillsSection.tsx    # Skills display section
│   └── ContactForm.tsx      # Contact form (client-side)
├── data/
│   └── profile.ts           # All portfolio content (EDIT THIS!)
├── public/
│   └── ChyeZhiHao_Resume.pdf # Your resume (add your PDF here)
└── README.md                # This file
```

## 🎨 Design Philosophy

This portfolio follows a minimalist, Apple-inspired design:

- **Typography**: System font stack for native, clean look
- **Colors**: Primarily black, white, and grays with minimal accent
- **Spacing**: Generous white space for clarity
- **Animations**: Subtle, purposeful micro-interactions
- **Accessibility**: Semantic HTML, proper heading hierarchy, good contrast

## 🔧 Tech Stack

- **Next.js 16** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Vercel** - Hosting and deployment

## 📝 License

This project is private and personal. All rights reserved.

## 🤝 Contributing

This is a personal portfolio. If you'd like to use this as a template, feel free to fork and customize!

---

Built with ❤️ using Next.js and Tailwind CSS
