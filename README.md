# 🚀 Atik Hridoy - Portfolio

A modern, interactive portfolio website built with Next.js 15, featuring advanced animations, 3D effects, and a unique user experience.

![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 Visual Effects
- **OTP-Style Loader** - Animated access code entry before portfolio loads
- **Animated Logo** - Custom "A" letter with rotating ring and floating particles
- **Glow Cursor** - Interactive cursor with gradient glow effect
- **Decrypted Text Animation** - Scramble-to-reveal effect on name
- **Spotlight Effects** - Mouse-tracking spotlight on cards
- **Particle System** - Floating animated particles throughout

### 🎯 Interactive Components
- **Enhanced Project Cards** - 3D tilt effects with expandable image galleries
- **Expandable Image Cards** - Hover to expand project screenshots smoothly
- **Tech Stack Pills** - Animated gradient backgrounds with shimmer effects
- **Next-Level Radar Chart** - Advanced skills visualization with:
  - Dual rotating radar sweeps
  - Floating particles
  - Glowing skill icons
  - Multiple depth layers
  - Pulsing center point

### 📱 Sections
- **Intro** - Hero section with decrypted text animation
- **Experience** - Timeline of work experience
- **Projects** - Showcase of mobile applications with image galleries
- **Skills** - Interactive radar chart with technical proficiencies
- **Thoughts** - Blog posts and articles
- **Connect** - Contact information and social links

### 🎭 Animations
- Framer Motion for smooth transitions
- GSAP for scroll-based animations
- Custom 3D transforms and perspectives
- Gradient animations and color transitions
- Spring physics for natural movement

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.7 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Charts:** Recharts
- **Icons:** React Icons, Simple Icons
- **Image Optimization:** Next.js Image

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx           # Main page with loader
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── cards/             # Project and thought cards
│   │   ├── EnhancedProjectCard.tsx
│   │   ├── HolographicProjectCard.tsx
│   │   └── ThoughtCard.tsx
│   ├── sections/          # Page sections
│   │   ├── IntroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ThoughtsSection.tsx
│   │   └── ConnectSection.tsx
│   ├── ui/                # Reusable UI components
│   ├── 3d/                # 3D components
│   ├── Loader.tsx         # OTP-style loader
│   ├── Logo.tsx           # Animated logo
│   ├── DecryptedText.tsx  # Text animation
│   └── GlowCursor.tsx     # Custom cursor
├── hooks/                 # Custom React hooks
│   ├── useCursorGlow.ts
│   ├── useGSAPScroll.ts
│   ├── useSectionObserver.ts
│   └── useThemeClass.ts
└── lib/                   # Utilities
    └── utils.ts
```

## 🎨 Customization

### Update Personal Information

Edit the data in `src/components/sections/`:
- **IntroSection.tsx** - Name, title, description
- **WorkSection.tsx** - Projects and portfolio items
- **SkillsSection.tsx** - Technical skills and proficiency levels
- **ConnectSection.tsx** - Contact information and social links

### Modify Colors

The color scheme uses Tailwind CSS with custom gradients:
- Primary: Cyan (cyan-400, cyan-500)
- Secondary: Purple (purple-500)
- Accent: Blue (blue-500)

Update in `tailwind.config.ts` or component styles.

### Adjust Animations

Animation timings can be modified in:
- **Loader.tsx** - OTP animation delays
- **EnhancedProjectCard.tsx** - Card expansion speed
- **SkillsSection.tsx** - Radar sweep and particle animations

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚀 Deploy

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Other Platforms
- **Netlify:** Connect your Git repository
- **AWS Amplify:** Deploy via AWS Console
- **Docker:** Use the included Dockerfile

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Atik Hridoy**
- GitHub: [@Atik-hridoy](https://github.com/Atik-hridoy)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Recharts for data visualization

---

Made with ❤️ by Atik Hridoy
