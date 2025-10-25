# Setup Instructions - Julian Prohaska Shopify Theme

## ✅ What's Been Completed

Your custom Shopify theme has been successfully created! Here's what's ready:

### Theme Files Created (35 files)
- ✅ Complete Shopify theme structure
- ✅ All sections converted from Next.js to Liquid
- ✅ Responsive CSS (converted from Tailwind)
- ✅ Interactive JavaScript functionality
- ✅ Theme configuration and settings
- ✅ Templates for all page types
- ✅ Icon snippets and utilities
- ✅ Comprehensive documentation

### Git Repository
- ✅ Git initialized
- ✅ Initial commit created (35 files, 3,879 lines)
- ✅ Development branch created and checked out

## 🚀 Next Steps

### 1. Create GitHub Repository

Since GitHub CLI is not installed, create the repository manually:

**Option A: Via GitHub Website**
1. Go to https://github.com/new
2. Repository name: `julian-prohaska-shopify-theme`
3. Description: `Custom Shopify Online Store 2.0 theme for Julian Prohaska - Modern minimal clothing brand design`
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

**Option B: Install GitHub CLI (Recommended for future)**
```powershell
# Install GitHub CLI via winget
winget install --id GitHub.cli

# Then create repo
gh auth login
gh repo create julian-prohaska-shopify-theme --public --source=. --description "Custom Shopify Online Store 2.0 theme for Julian Prohaska - Modern minimal clothing brand design"
```

### 2. Push to GitHub

After creating the repository on GitHub, run these commands:

```powershell
# Add the remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/julian-prohaska-shopify-theme.git

# Push master branch
git checkout master
git push -u origin master

# Push development branch
git checkout development
git push -u origin development
```

### 3. Set Up Shopify CLI

**Install Shopify CLI** (if not already installed):
```powershell
# Via npm
npm install -g @shopify/cli @shopify/theme

# Or via Homebrew (if you have it on Windows)
brew tap shopify/shopify
brew install shopify-cli
```

**Login to Shopify:**
```powershell
shopify login --store your-store-name.myshopify.com
```

### 4. Preview Your Theme

**Start local development server:**
```powershell
shopify theme dev
```

This will:
- Start a local server at `http://127.0.0.1:9292`
- Create a development theme on your Shopify store
- Hot reload changes as you edit files
- Provide a preview URL you can share

### 5. Upload to Shopify Store

**Push theme to Shopify:**
```powershell
# Push as a new unpublished theme (recommended first time)
shopify theme push --unpublished

# Or push to a specific theme
shopify theme push --theme YOUR_THEME_ID
```

**Publish the theme:**
1. Go to your Shopify Admin: **Online Store > Themes**
2. Find your uploaded theme
3. Click **Customize** to edit in Theme Editor
4. Click **Publish** when ready to make it live

## 📋 Theme Customization Checklist

Before going live, customize these in the Shopify Theme Editor:

### Header Section
- [ ] Upload logo or set brand name
- [ ] Configure navigation menu
- [ ] Enable/disable search

### Homepage Sections
- [ ] Upload hero banner image
- [ ] Set collection navigation links
- [ ] Select featured products collection
- [ ] Upload brand statement image
- [ ] Customize newsletter signup text

### Footer Section
- [ ] Set brand name
- [ ] Add footer links (Privacy, Terms, Contact, etc.)
- [ ] Add social media URLs

### Theme Settings
- [ ] Set color scheme
- [ ] Choose fonts (Cormorant Garamond recommended for headings)
- [ ] Adjust spacing and layout
- [ ] Configure product card styles

## 🎨 Design Notes

### Current Design Features
- **Font**: Cormorant Garamond for headings (loaded from Google Fonts)
- **Color Scheme**: Black text on white background (minimal aesthetic)
- **Layout**: Max-width 1280px container
- **Responsive**: Mobile-first with breakpoints at 640px, 768px, 1024px

### Sections Included
1. **Header** - Sticky header with mobile menu
2. **Hero Banner** - Full-width responsive image
3. **Collection Navigation** - FW25 collection links
4. **Featured Products** - Product grid with color swatches
5. **Brand Statement** - Full-width image with CTA
6. **Newsletter Signup** - Email subscription form
7. **Footer** - Large brand name with links and social icons

## 🔧 Development Tips

### File Structure
```
Your theme files are in: c:\Users\nahom\OneDrive\Documents\CutLab

Key directories:
- sections/     → Edit section templates
- assets/       → Edit CSS and JavaScript
- templates/    → Edit page templates
- config/       → Edit theme settings
```

### Making Changes
1. Edit files in your code editor (VS Code)
2. If using `shopify theme dev`, changes sync automatically
3. Refresh browser to see updates
4. Commit changes to Git regularly

### Git Workflow
```powershell
# Make changes to files
git add .
git commit -m "Description of changes"
git push origin development

# When ready to merge to master
git checkout master
git merge development
git push origin master
```

## 📚 Resources

- **Shopify CLI**: https://shopify.dev/docs/themes/tools/cli
- **Liquid Documentation**: https://shopify.dev/docs/api/liquid
- **Theme Architecture**: https://shopify.dev/docs/themes/architecture
- **Your README**: See `README.md` in the theme folder

## ⚠️ Important Notes

1. **Reference Code**: The original Next.js code is preserved in `Static-Shopify-Theme-Frontend-codebase/` for reference
2. **Config File**: `config.yml` is in `.gitignore` - it will be created when you run `shopify theme dev`
3. **Settings Data**: `config/settings_data.json` will be created when you customize the theme in Shopify
4. **Line Endings**: Git warnings about LF/CRLF are normal on Windows - they're automatically handled

## 🎯 Quick Start Commands

```powershell
# Navigate to theme directory
cd c:\Users\nahom\OneDrive\Documents\CutLab

# Start development
shopify theme dev

# Push to Shopify
shopify theme push --unpublished

# Check for errors
shopify theme check

# List themes on your store
shopify theme list
```

## ✨ You're All Set!

Your custom Shopify theme is ready to go! Follow the steps above to:
1. Create GitHub repository
2. Push code to GitHub
3. Preview with Shopify CLI
4. Upload to your Shopify store
5. Customize in Theme Editor
6. Publish when ready

**Need help?** Check the README.md file or Shopify's documentation.

---

**Theme Created**: 2025-10-25  
**Files**: 35 files, 3,879 lines of code  
**Status**: Ready for deployment ✅

