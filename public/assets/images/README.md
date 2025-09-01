# Images Folder

This folder is for storing general website images like hero images, portfolio images, team photos, etc.

## How to Add Images

1. **Copy your image files** into this folder
2. **Supported formats**: PNG, JPG, WebP, SVG
3. **Recommended file names**: Use descriptive names like `hero-background.jpg`, `team-member-john.jpg`

## Image Categories

- **Hero images**: Background images for main sections
- **Portfolio images**: Screenshots of your work
- **Team photos**: Staff and team member photos
- **Background images**: Decorative background images
- **Banner images**: Section header images

## Image Optimization

- **Hero images**: 1200x800px or larger
- **Portfolio images**: 800x600px or larger
- **Team photos**: 400x400px (square format)
- **Background images**: 1920x1080px for full-width

## How to Use Images

### In React Components:
```jsx
import heroImage from '/assets/images/hero-background.jpg';

<div style={{ backgroundImage: `url(${heroImage})` }}>
  Hero content
</div>
```

### In CSS:
```css
.hero-section {
  background-image: url('/assets/images/hero-background.jpg');
}
```

### In HTML:
```html
<img src="/assets/images/team-member.jpg" alt="Team Member" />
```

## File Naming Convention

Use descriptive names with hyphens:
- `hero-background.jpg`
- `portfolio-website-1.jpg`
- `team-member-john-smith.jpg`
- `about-us-office.jpg`

## Image Requirements

- **High quality**: Use original high-resolution images
- **Web optimized**: Compress for web use
- **Descriptive names**: Use clear, descriptive filenames
- **Alt text**: Always include alt text for accessibility

## Current Usage

Your website currently uses:
- CSS gradients for hero sections
- Emoji icons for visual elements
- Text-based logos

To add actual images:
1. Place them in this folder
2. Update the relevant components
3. Ensure responsive behavior
