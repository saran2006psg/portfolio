# Deployment Guide

Your portfolio is ready to deploy! Choose your preferred hosting platform:

## 🚀 Deploy on Vercel (Recommended)

Vercel is the optimal hosting platform for Next.js applications.

### Option 1: Connect via GitHub (Automatic)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `saran2006psg/portfolio`
4. Vercel will automatically detect it's a Next.js app
5. Click "Deploy"
6. Your site goes live instantly!

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts to link your project
```

**Result:** Your portfolio will be live at a Vercel URL (e.g., `portfolio.vercel.app`)

---

## 🌐 Deploy on Netlify

### Prerequisites

- Ensure `.next/` is in your `.gitignore` (✓ already done)

### Steps

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub and your repository
5. Set build settings:
   - **Build Command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy Site"

---

## 🏠 Deploy on GitHub Pages (Static Export)

### Modify for Static Export

1. Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
};

export default nextConfig;
```

2. Deploy:

```bash
npm run build
git add out/
git commit -m "Deploy static build"
git push
```

3. Go to GitHub repo → Settings → Pages
4. Set source to `/ (root)` from the `main` branch
5. Your site is live at `https://saran2006psg.github.io/portfolio/`

---

## 🔧 Environment Variables

If you add environment variables, create `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values. **Never commit `.env.local`** — it's already in `.gitignore`.

---

## 🎯 Pre-Deployment Checklist

- ✓ Build completes without errors: `npm run build`
- ✓ No console errors in development: `npm run dev`
- ✓ All links are correct
- ✓ Mobile responsive (check on mobile devices)
- ✓ Meta tags and SEO optimized
- ✓ `.env` variables properly configured
- ✓ `.gitignore` includes sensitive files

---

## 📊 Performance Monitoring

After deployment, monitor your site:

- **Vercel Analytics:** Automatic with Vercel
- **Lighthouse:** Test at https://pagespeed.web.dev/
- **WebPageTest:** https://www.webpagetest.org/

---

## 🆘 Troubleshooting

### Build fails on deployment

```bash
# Ensure build works locally
npm run build

# Check for TypeScript errors
npm run type-check

# Clear cache and rebuild
rm -rf .next node_modules
npm ci
npm run build
```

### Site shows blank page

- Check browser console for errors
- Verify all image paths are correct
- Ensure public assets are in `/public` directory

### Slow performance

- Check Lighthouse report
- Optimize images in `/public/sequence`
- Use Next.js Image optimization

---

## 🚀 Your Live Portfolio Links

Once deployed:

- **Vercel:** `https://saran-portfolio.vercel.app`
- **GitHub Pages:** `https://saran2006psg.github.io/portfolio`
- **Custom Domain:** Point your domain DNS to your hosting provider

---

## 📝 Next Steps

1. Deploy to Vercel
2. Share your live portfolio URL
3. Add to your resume/LinkedIn
4. Monitor analytics

**Built with Next.js 16 + Tailwind CSS**
