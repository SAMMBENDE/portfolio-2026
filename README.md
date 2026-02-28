# Portfolio 2026 - Modern Professional Portfolio Website

A stunning, modern portfolio website built with Next.js 14, featuring smooth GSAP animations, dark/light mode toggle, and fully responsive design.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Smooth Animations**: GSAP animations with ScrollTrigger for engaging user experience
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Next.js metadata API for better search engine visibility
- **Performance**: Fast page loads with Next.js optimization features
- **Clean Code**: Well-structured, commented, and maintainable codebase

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📧 Contact Form Setup

The contact form uses **Web3Forms** (free service) to send emails directly to your inbox.

### Setup Steps:

1. **Get your free access key:**
   - Visit [https://web3forms.com/](https://web3forms.com/)
   - Enter your email address
   - Check your email for the Access Key

2. **Configure the environment variable:**
   - Copy `.env.local.example` to `.env.local`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
```

3. **Restart the dev server:**

```bash
npm run dev
```

4. **Test the form:**
   - Fill out the contact form on your site
   - You should receive the message in your email inbox!

**Note:** The form will work in development mode after adding the key. For production, make sure to add the environment variable to your hosting platform (Vercel, Netlify, etc.).

## 📁 Project Structure

```
portfolio_2026/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── About.tsx         # About section
│       ├── Contact.tsx       # Contact form and info
│       ├── Footer.tsx        # Footer component
│       ├── Hero.tsx          # Hero section with GSAP
│       ├── Navbar.tsx        # Navigation bar
│       ├── ProjectCard.tsx   # Project card component
│       ├── Projects.tsx      # Projects showcase
│       ├── Skills.tsx        # Skills section
│       └── ThemeProvider.tsx # Dark/light mode provider
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Hi, I'm Your Name" to your actual name
   - Update subtitle and description

2. **About Section** (`src/components/About.tsx`):
   - Modify the about text to match your experience

3. **Skills Section** (`src/components/Skills.tsx`):
   - Edit the skills array with your technologies
   - Adjust skill levels (percentage)

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace project data with your actual projects
   - Update images, links, and descriptions

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email, phone, and location
   - Configure form submission endpoint if needed

6. **Footer & Navbar** (`src/components/Footer.tsx`, `src/components/Navbar.tsx`):
   - Update social media links
   - Modify branding/logo

### Colors & Styling

The theme colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    light: '#667eea',
    DEFAULT: '#5a67d8',
    dark: '#4c51bf',
  },
  secondary: {
    light: '#f687b3',
    DEFAULT: '#ed64a6',
    dark: '#d53f8c',
  },
}
```

### Metadata & SEO

Update SEO information in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your description',
  keywords: ['your', 'keywords'],
  authors: [{ name: 'Your Name' }],
}
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP & Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎭 Animation Features

- **Hero Section**: Sequential fade-in animations with GSAP timeline
- **Scroll Triggers**: Sections animate on scroll using ScrollTrigger
- **Hover Effects**: Interactive cards with GSAP hover animations
- **Smooth Scrolling**: Native smooth scroll behavior
- **Progress Bars**: Animated skill progress indicators

## 🌙 Dark Mode

The theme toggle is available in the navbar and uses:
- Local storage for persistence
- System preference detection
- Smooth transitions between themes
- CSS variables for dynamic colors

## 📦 Build & Deploy

### Build for production:

```bash
npm run build
```

### Start production server:

```bash
npm start
```

### Deploy

This project can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**
- Any Node.js hosting service

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- GSAP for powerful animations
- Tailwind CSS for utility-first styling
- Unsplash for placeholder images

---

Made with ❤️ and ☕
