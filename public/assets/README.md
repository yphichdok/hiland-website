# Assets Folder

This folder contains all media assets for your Hiland Tech website.

## Folder Structure

```
assets/
├── images/          # General website images
├── icons/           # Icon files (PNG, SVG, ICO)
└── logos/           # Logo files (PNG, SVG, JPG)
```

## How to Add Your Logo

1. **Place your logo file** in the `logos/` folder
2. **Supported formats**: PNG, SVG, JPG, WebP
3. **Recommended sizes**:
   - Main logo: 200x200px or larger
   - Favicon: 32x32px, 16x16px
   - Apple touch icon: 180x180px

## File Naming Convention

Use descriptive names for your files:
- `hiland-tech-logo.png`
- `hiland-tech-favicon.ico`
- `hiland-tech-apple-touch.png`

## How to Use in Your Website

### In HTML (index.html):
```html
<link rel="icon" type="image/png" href="/assets/logos/hiland-tech-favicon.png">
<link rel="apple-touch-icon" href="/assets/logos/hiland-tech-apple-touch.png">
```

### In React Components:
```jsx
import logoImage from '/assets/logos/hiland-tech-logo.png';

<img src={logoImage} alt="Hiland Tech Logo" />
```

### In CSS:
```css
.logo {
  background-image: url('/assets/logos/hiland-tech-logo.png');
}
```

## Current Logo Component

Your website currently uses a text-based logo component (`HT` initials). To replace it with your actual logo:

1. Add your logo file to `assets/logos/`
2. Update the Logo component in `src/components/Logo.jsx`
3. Replace the "HT" text with an `<img>` tag

## Image Optimization

- **PNG**: Best for logos and graphics with transparency
- **SVG**: Best for scalable logos and icons
- **JPG**: Best for photographs
- **WebP**: Modern format with excellent compression

## SEO Considerations

- Use descriptive filenames
- Include alt text for all images
- Optimize image sizes for web
- Consider lazy loading for large images
