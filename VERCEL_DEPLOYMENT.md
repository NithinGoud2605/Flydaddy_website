# Vercel Deployment Guide

This guide will help you deploy your Fly Daddy website to Vercel.

## Why Vercel?

✅ **No base path issues** - Uses root domain  
✅ **Automatic routing** - No 404.html workarounds needed  
✅ **Better performance** - Global CDN and edge network  
✅ **Automatic deployments** - Deploys on every push  
✅ **Preview deployments** - Test before merging  
✅ **Free tier** - Perfect for personal projects  

## Quick Setup

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

3. **Import your repository**:
   - Click "Add New Project"
   - Select your `Flydaddy_website` repository
   - Vercel will auto-detect the settings:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install --legacy-peer-deps`

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for the build
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

## Configuration

The project is already configured with:
- ✅ `vercel.json` - Routing configuration
- ✅ `vite.config.js` - Base path set to `/`
- ✅ No base path in React Router
- ✅ Simplified asset paths

## Custom Domain (Optional)

See **CUSTOM_DOMAIN_SETUP.md** for detailed instructions on connecting a GoDaddy domain to Vercel.

Quick steps:
1. Go to Vercel → Settings → Domains
2. Add your domain (e.g., `flydaddytours.com`)
3. Follow DNS instructions in Vercel
4. Configure DNS in GoDaddy (A records for root, CNAME for www)
5. Wait for DNS propagation (1-2 hours)
6. SSL certificate will be automatically provisioned

## Environment Variables

If you need environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or PRs

## What Changed from GitHub Pages?

- ✅ Removed base path (`/Flydaddy_website/`)
- ✅ Removed 404.html workaround
- ✅ Simplified routing (no basename needed)
- ✅ Simplified asset paths
- ✅ Added `vercel.json` for routing

## Troubleshooting

### Build fails
- Check the build logs in Vercel dashboard
- Ensure `npm install --legacy-peer-deps` is used (already configured)

### Routes return 404
- The `vercel.json` rewrite rule should handle this
- If issues persist, check that `vercel.json` is in the root directory

### Assets not loading
- Vercel serves from root, so all paths should work
- Check browser console for specific errors

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: Available in dashboard

