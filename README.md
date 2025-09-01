# WebDev Services - React + Vite Website

A modern, responsive website for web development services built with React and Vite.

## Features

- 🏠 **Home Page** - Hero section, features, and call-to-action
- ℹ️ **About Page** - Company information, team, and mission
- 🛠️ **Services Page** - Detailed service offerings and technology stack
- 💰 **Pricing Page** - Transparent pricing plans and additional services
- 📞 **Contact Page** - Contact form and company information
- 📱 **Responsive Design** - Mobile-first approach for all devices
- 🎨 **Modern UI** - Beautiful gradients, animations, and hover effects
- ⚡ **Fast Performance** - Built with Vite for optimal development experience

## Pages

### Home
- Hero section with compelling headline and CTA
- Feature cards highlighting key benefits
- Call-to-action section

### About
- Company mission and values
- Team member profiles
- Company statistics and achievements

### Services
- Comprehensive service offerings
- Technology stack showcase
- Development process explanation

### Pricing
- Three pricing tiers (Starter, Professional, Enterprise)
- Additional services pricing
- FAQ section

### Contact
- Interactive contact form
- Company contact information
- Social media links

## Technologies Used

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Icons**: Emoji icons for simplicity
- **Responsive Design**: CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd webdev-services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx     # Navigation component
│   └── Footer.jsx     # Footer component
├── pages/              # Page components
│   ├── Home.jsx       # Home page
│   ├── About.jsx      # About page
│   ├── Services.jsx   # Services page
│   ├── Pricing.jsx    # Pricing page
│   └── Contact.jsx    # Contact page
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Customization

### Colors
The website uses a modern color palette defined in `src/index.css`:
- Primary: `#667eea` (Blue gradient)
- Secondary: `#764ba2` (Purple gradient)
- Accent: `#ff6b6b` (Coral)
- Text: `#2d3748` (Dark gray)
- Background: `#f7fafc` (Light gray)

### Content
- Update company information in each page component
- Modify pricing in `src/pages/Pricing.jsx`
- Customize services in `src/pages/Services.jsx`
- Update contact information in `src/pages/Contact.jsx`

### Styling
- Modify `src/index.css` for global style changes
- Use inline styles for component-specific styling
- CSS classes follow BEM-like naming conventions

## Deployment

### Build for Production
```bash
npm run build
```

The build files will be created in the `dist/` directory.

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading of components
- Optimized CSS with modern properties
- Responsive images and layouts
- Fast loading with Vite

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact:
- Email: info@hiland.tech
- Phone: +1 (714) 912-3163

## Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement blog functionality
- [ ] Add portfolio showcase
- [ ] Integrate with CMS
- [ ] Add multi-language support
- [ ] Implement analytics dashboard
- [ ] Add customer testimonials
- [ ] Create admin panel

---

Built with ❤️ using React and Vite
