# Victor Kipkirui - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a working contact form.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **GitHub Integration**: Automatically fetches and displays latest repositories
- **Contact Form**: Working contact form with Nodemailer integration
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Performance**: Optimized images, lazy loading, and efficient bundling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Email**: Nodemailer
- **Deployment**: Vercel-ready

## 📋 Sections

1. **Hero Section**: Introduction with name, tagline, and CTA
2. **Navigation**: Sticky navigation with smooth scrolling
3. **Projects**: GitHub repository showcase (auto-fetched)
4. **Skills**: Technology stack with animated badges
5. **Resume**: Education and experience timeline
6. **Contact**: Working contact form with validation
7. **Footer**: Social links and additional information

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your actual values in `.env.local`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   GITHUB_USERNAME=YOUR_GITHUB_USERNAME
   CONTACT_EMAIL=YOUR_EMAIL@example.com
   RESUME_LINK=https://your-resume-link.com
   ```

4. **Customize your content**
   - Update personal information in components
   - Replace placeholder content with your details
   - Add your actual GitHub username
   - Update social media links

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## ⚙️ Configuration

### Email Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use your Gmail address and the app password in `.env.local`

### GitHub Integration
- Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
- The app will automatically fetch your 6 most recent public repositories
- Private repositories won't appear unless you add GitHub API authentication

### Customization
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Update personal information in each component
- **Styling**: Customize components in the `/components` directory
- **SEO**: Update metadata in `app/layout.tsx`

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer section
│   ├── Hero.tsx          # Hero section
│   ├── Navigation.tsx    # Navigation bar
│   ├── Projects.tsx      # Projects showcase
│   ├── Resume.tsx        # Resume timeline
│   ├── Skills.tsx        # Skills grid
│   └── ThemeProvider.tsx # Dark mode context
├── public/               # Static assets
└── ...config files
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically with each push

### Other Platforms
The app is deployable to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🎨 Customization Guide

### Personal Information
1. **Hero Section**: Update name, tagline, and description in `components/Hero.tsx`
2. **Skills**: Modify skills array in `components/Skills.tsx`
3. **Resume**: Update education and experience in `components/Resume.tsx`
4. **Contact**: Change contact information in `components/Contact.tsx`

### Styling
- **Theme Colors**: Modify `tailwind.config.js` color palette
- **Typography**: Update font families and sizes
- **Animations**: Customize Framer Motion variants
- **Layout**: Adjust spacing and responsive breakpoints

### Features
- **Add Blog**: Integrate with a CMS like Sanity or Contentful
- **Add Analytics**: Integrate Google Analytics or Vercel Analytics
- **Add More Sections**: Testimonials, certifications, etc.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YOUR_GITHUB_USERNAME/portfolio/issues).

## 📞 Contact

Victor Kipkirui - [YOUR_EMAIL@example.com](mailto:YOUR_EMAIL@example.com)

Project Link: [https://github.com/YOUR_GITHUB_USERNAME/portfolio](https://github.com/YOUR_GITHUB_USERNAME/portfolio)

---

⭐ If you found this helpful, please give it a star on GitHub!