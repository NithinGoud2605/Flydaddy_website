# GitHub Pages Deployment Guide

This guide will help you deploy your Fly Daddy website to GitHub Pages.

## Prerequisites

- A GitHub account
- Your repository pushed to GitHub
- GitHub Pages enabled in your repository settings

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Configure Base Path

The `vite.config.js` is already configured with the base path `/Flydaddy_website/` for GitHub Pages.

**If your repository name is different**, update the base path in `vite.config.js`:
```js
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

**If you're using a custom domain**, change it to:
```js
base: '/',
```

### 3. Deploy

#### Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch:

1. Make sure all your changes are committed:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. The workflow will automatically:
   - Build your project
   - Deploy to GitHub Pages
   - Your site will be available at: `https://YOUR_USERNAME.github.io/Flydaddy_website/`

#### Manual Deployment

You can also trigger the workflow manually:
1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

### 4. Verify Deployment

1. After the workflow completes (usually 1-2 minutes), go to your repository **Settings** → **Pages**
2. You'll see the deployment URL
3. Visit the URL to see your live site

## Troubleshooting

### Issue: 404 errors on routes

**Solution**: Make sure the base path in `vite.config.js` matches your repository name exactly (case-sensitive).

### Issue: Assets not loading

**Solution**: 
- Check that `public/.nojekyll` file exists (already created)
- Verify the base path is correct
- Clear browser cache

### Issue: Workflow fails

**Solution**:
- Check the **Actions** tab for error details
- Ensure all dependencies are in `package.json`
- Make sure Node.js version is compatible (workflow uses Node 20)

### Issue: Site shows blank page

**Solution**:
- Check browser console for errors
- Verify the base path matches your repository name
- Ensure React Router is configured correctly

## Custom Domain Setup (Optional)

If you want to use a custom domain:

1. Update `vite.config.js` to set `base: '/'`
2. In GitHub repository **Settings** → **Pages**, add your custom domain
3. Update your DNS records as instructed by GitHub
4. Rebuild and redeploy

## Notes

- The site will automatically rebuild and deploy on every push to `main`
- Builds typically take 1-2 minutes
- The first deployment may take longer
- Your site URL will be: `https://YOUR_USERNAME.github.io/Flydaddy_website/`

## Need Help?

If you encounter any issues:
1. Check the GitHub Actions logs in the **Actions** tab
2. Verify your repository name matches the base path
3. Ensure GitHub Pages is enabled with **GitHub Actions** as the source

