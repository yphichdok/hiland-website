# Logo Files

This folder is for storing your Hiland Tech logo files.

## How to Add Your Logo

1. **Copy your logo file** into this folder
2. **Supported formats**: PNG, SVG, JPG, WebP
3. **Recommended file names**:
   - `hiland-tech-logo.png` - Main logo
   - `hiland-tech-logo-white.png` - White version for dark backgrounds
   - `hiland-tech-favicon.ico` - Favicon
   - `hiland-tech-apple-touch.png` - Apple touch icon

## Logo Sizes

- **Main logo**: 200x200px or larger (PNG/SVG recommended)
- **Favicon**: 32x32px, 16x16px (ICO format)
- **Apple touch icon**: 180x180px (PNG format)
- **Social media**: 1200x630px (PNG format)

## How to Use Your Logo

### Option 1: Replace the current HT initials logo

Update the Logo component usage in your components:

```jsx
// In Navbar.jsx, Footer.jsx, etc.
<Logo 
  size="small" 
  useImage={true} 
  imageSrc="/assets/logos/hiland-tech-logo.png"
  imageAlt="Hiland Tech Logo"
/>
```

### Option 2: Keep both options

You can use either the text logo or image logo:

```jsx
// Text logo (current)
<Logo size="small" />

// Image logo
<Logo 
  size="small" 
  useImage={true} 
  imageSrc="/assets/logos/hiland-tech-logo.png"
/>
```

## Logo Requirements

- **High quality**: At least 200x200px for main logo
- **Transparent background**: PNG or SVG recommended
- **Multiple formats**: Provide both PNG and SVG if possible
- **Color versions**: Consider providing both color and white versions

## File Structure Example

```
logos/
├── hiland-tech-logo.png          # Main logo (color)
├── hiland-tech-logo-white.png    # Main logo (white)
├── hiland-tech-logo.svg          # Vector version
├── hiland-tech-favicon.ico       # Favicon
└── hiland-tech-apple-touch.png   # Apple touch icon
```

## Current Status

Your website currently uses a text-based logo with "HT" initials. To use your actual logo:

1. Add your logo file to this folder
2. Update the Logo component usage to include `useImage={true}` and `imageSrc`
3. Test on different screen sizes to ensure it looks good

## Tips

- **SVG logos** are best for scalability
- **PNG logos** are best for complex graphics
- **Test your logo** on both light and dark backgrounds
- **Ensure readability** at small sizes
