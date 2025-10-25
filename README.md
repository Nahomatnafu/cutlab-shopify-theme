# CutLab - Shopify Theme

A modern, minimal Shopify Online Store 2.0 theme for clothing brands. Built from scratch with clean design, fully customizable through the Shopify Theme Editor.

## 🎨 Features

- **Modern Design**: Clean, minimal aesthetic perfect for fashion brands
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Online Store 2.0**: Built with Shopify's latest theme architecture
- **Customizable Sections**: All sections editable through Theme Editor
- **Performance Optimized**: Fast loading with vanilla CSS and JavaScript
- **SEO Ready**: Proper meta tags and semantic HTML

## 📁 Theme Structure

```
├── assets/              # CSS, JavaScript, and static files
│   ├── base.css        # Base styles and utilities
│   ├── theme.css       # Component styles
│   ├── sections.css    # Section-specific styles
│   ├── global.js       # Global utilities
│   └── theme.js        # Theme functionality
├── config/             # Theme configuration
│   └── settings_schema.json
├── layout/             # Layout templates
│   └── theme.liquid
├── locales/            # Translation files
│   └── en.default.json
├── sections/           # Reusable sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   ├── collection-navigation.liquid
│   ├── featured-products.liquid
│   ├── brand-statement.liquid
│   └── newsletter-signup.liquid
├── snippets/           # Reusable components
│   └── icon-*.liquid   # SVG icons
└── templates/          # Page templates
    ├── index.json      # Homepage
    ├── product.json
    ├── collection.json
    └── cart.json
```

## 🚀 Getting Started

### Prerequisites

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) installed
- A Shopify store (development or production)
- Git installed on your machine

### Installation

1. **Clone or navigate to this repository**
   ```bash
   cd c:\Users\nahom\OneDrive\Documents\CutLab
   ```

2. **Login to Shopify CLI**
   ```bash
   shopify login --store your-store-name.myshopify.com
   ```
   Replace `your-store-name` with your actual Shopify store name.

3. **Preview the theme locally**
   ```bash
   shopify theme dev
   ```
   This will start a local development server and provide a preview URL.

4. **Push to your Shopify store**
   ```bash
   shopify theme push
   ```
   You'll be asked to select whether to push to your live theme or create a new unpublished theme (recommended for first upload).

### Development Workflow

1. **Start development server**
   ```bash
   shopify theme dev
   ```
   - Opens a local preview at `http://127.0.0.1:9292`
   - Hot reloads on file changes
   - Syncs changes to your development theme

2. **Make changes**
   - Edit files in `sections/`, `assets/`, `snippets/`, etc.
   - Changes are automatically synced to your store
   - Refresh browser to see updates

3. **Push to production**
   ```bash
   shopify theme push --theme YOUR_THEME_ID
   ```

## 📝 Customization Guide

### Theme Settings

Access theme settings in Shopify Admin:
1. Go to **Online Store > Themes**
2. Click **Customize** on your theme
3. Use the left sidebar to customize:
   - Colors
   - Typography
   - Layout spacing
   - Product card styles
   - Buttons and inputs

### Homepage Sections

The homepage includes these sections (customizable in Theme Editor):

1. **Hero Banner**
   - Upload hero image
   - Adjust height for mobile/desktop
   - Toggle gradient overlay

2. **Collection Navigation**
   - Add/remove collection links
   - Show/hide product counts
   - Customize title and superscript

3. **Featured Products**
   - Select collection to display
   - Set number of products (2-12)
   - Toggle color swatches

4. **Brand Statement**
   - Upload background image
   - Edit heading text
   - Set call-to-action button

5. **Newsletter Signup**
   - Customize title and description
   - Edit placeholder text
   - Set success message

### Adding New Sections

To add sections to any page:
1. In Theme Editor, click **Add section**
2. Choose from available sections
3. Configure settings in the sidebar
4. Drag to reorder sections

### Editing Header & Footer

- **Header**: Customize in Theme Editor > Header
  - Upload logo or use text
  - Select navigation menu
  - Toggle search functionality

- **Footer**: Customize in Theme Editor > Footer
  - Edit brand name
  - Add/remove footer links
  - Add social media URLs

## 🎯 Key Files to Customize

### Brand Identity

- **Brand Name**: Edit in `sections/header.liquid` and `sections/footer.liquid`
- **Logo**: Upload via Theme Editor > Header settings
- **Colors**: Theme Editor > Theme settings > Colors
- **Fonts**: Theme Editor > Theme settings > Typography

### Styling

- **Global Styles**: `assets/base.css`
- **Component Styles**: `assets/theme.css`
- **Section Styles**: `assets/sections.css`
- **CSS Variables**: Defined in `:root` in `base.css`

### Functionality

- **Interactive Features**: `assets/theme.js`
  - Mobile menu
  - Newsletter form
  - Cart functionality
  - Color swatches
  - Smooth scrolling

- **Utilities**: `assets/global.js`
  - Helper functions
  - Event handling
  - Focus management

## 🛠️ Shopify CLI Commands

```bash
# Login to Shopify
shopify login

# Start development server
shopify theme dev

# Push theme to store
shopify theme push

# Pull theme from store
shopify theme pull

# Check theme for errors
shopify theme check

# List all themes on store
shopify theme list

# Share preview link
shopify theme share
```

## 📦 What's Included

### Sections
- ✅ Header with mobile menu
- ✅ Hero banner
- ✅ Collection navigation
- ✅ Featured products grid
- ✅ Brand statement
- ✅ Newsletter signup
- ✅ Footer with social links

### Features
- ✅ Responsive design
- ✅ Mobile menu drawer
- ✅ Product color swatches
- ✅ Newsletter integration
- ✅ Cart functionality
- ✅ Search functionality
- ✅ SEO meta tags
- ✅ Social sharing

### Styling
- ✅ Custom CSS (no frameworks)
- ✅ CSS custom properties
- ✅ Responsive typography
- ✅ Smooth animations
- ✅ Hover effects

## 🔧 Troubleshooting

### Theme won't push
- Ensure you're logged in: `shopify login`
- Check your internet connection
- Verify store permissions

### Changes not showing
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check if you're editing the correct theme

### Shopify CLI not found
- Install Shopify CLI: https://shopify.dev/docs/themes/tools/cli/install
- Restart terminal after installation

## 📚 Resources

- [Shopify Theme Documentation](https://shopify.dev/docs/themes)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [Online Store 2.0 Guide](https://shopify.dev/docs/themes/architecture)
- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)

## 📄 License

This theme is custom-built for CutLab brand. All rights reserved.

## 🤝 Support

For questions or issues:
1. Check Shopify documentation
2. Review theme files for inline comments
3. Contact theme developer

---

**Built with ❤️ for modern fashion brands**

