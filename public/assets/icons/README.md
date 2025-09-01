# Icons Folder

This folder is for storing icon files used throughout your website.

## How to Add Icons

1. **Copy your icon files** into this folder
2. **Supported formats**: PNG, SVG, ICO
3. **Recommended file names**: Use descriptive names like `arrow-right.svg`, `checkmark.png`

## Icon Categories

- **Navigation icons**: Menu, close, arrow icons
- **Feature icons**: Service feature icons
- **Social media icons**: Facebook, Twitter, LinkedIn icons
- **UI icons**: Checkmarks, arrows, buttons
- **Brand icons**: Company-specific icons

## Icon Sizes

- **Small icons**: 16x16px, 24x24px
- **Medium icons**: 32x32px, 48x48px
- **Large icons**: 64x64px, 128x128px
- **Social media**: 32x32px (standard)

## How to Use Icons

### In React Components:
```jsx
import arrowIcon from '/assets/icons/arrow-right.svg';

<img src={arrowIcon} alt="Arrow Right" />
```

### In CSS:
```css
.arrow-button {
  background-image: url('/assets/icons/arrow-right.svg');
}
```

### In HTML:
```html
<img src="/assets/icons/checkmark.png" alt="Checkmark" />
```

## File Naming Convention

Use descriptive names with hyphens:
- `arrow-right.svg`
- `checkmark-green.png`
- `social-facebook.svg`
- `menu-hamburger.svg`

## Icon Requirements

- **SVG preferred**: Scalable and lightweight
- **Consistent style**: Match your website's design
- **Clear meaning**: Icons should be easily understood
- **Accessibility**: Include alt text for screen readers

## Current Usage

Your website currently uses:
- Emoji icons (🎨, 🤖, ⚡, etc.)
- CSS-based icons
- Text-based elements

To add custom icons:
1. Place them in this folder
2. Replace emoji icons in components
3. Ensure consistent sizing and styling

## Icon Libraries

Consider using icon libraries like:
- **Feather Icons**: Simple, clean icons
- **Heroicons**: Beautiful hand-crafted icons
- **Font Awesome**: Extensive icon collection
- **Material Icons**: Google's Material Design icons

## Tips

- **SVG icons** are best for scalability
- **Consistent style** across all icons
- **Test visibility** on different backgrounds
- **Optimize file sizes** for web use
