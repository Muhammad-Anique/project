# Fitness360 Gym - Modern Fitness Website

A modern, responsive static website for Fitness360 Gym showcasing gym services, facilities, and member engagement features.

## 🏋️‍♂️ Project Overview

Fitness360 Gym is a comprehensive fitness center website designed to attract new members and provide existing members with easy access to information about services, schedules, and facilities.

## 🎯 Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Service Showcase** - Detailed presentation of gym services and facilities
- **Class Schedules** - Interactive timetables for fitness classes
- **Trainer Profiles** - Meet our certified fitness professionals
- **Membership Plans** - Clear pricing and benefits comparison
- **Contact Forms** - Easy inquiry and membership signup
- **Gallery** - High-quality images of facilities and equipment

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized images, minified assets
- **Deployment**: Static hosting (Vercel, Netlify, GitHub Pages)

## 📁 Project Structure

```
fitness360-gym/
├── index.html              # Landing page
├── about.html              # About us page
├── services.html           # Services and programs
├── trainers.html           # Trainer profiles
├── classes.html            # Class schedules
├── membership.html         # Membership plans
├── contact.html            # Contact and location
├── css/
│   ├── style.css          # Main stylesheet
│   ├── responsive.css     # Mobile responsive styles
│   └── components.css     # Reusable components
├── js/
│   ├── main.js           # Main JavaScript functionality
│   ├── animations.js     # Animation effects
│   └── forms.js          # Form handling
├── images/
│   ├── hero/             # Hero section images
│   ├── gallery/          # Facility photos
│   ├── trainers/         # Trainer photos
│   └── icons/            # Icons and logos
├── assets/
│   ├── fonts/            # Custom fonts
│   └── videos/           # Promotional videos
└── docs/
    └── architecture.md    # Technical architecture document
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Basic text editor or IDE
- Optional: Local development server

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammad-Anique/project.git
   cd project
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### Development Setup

1. **Live Server (VS Code)**
   - Install Live Server extension
   - Right-click on `index.html` → "Open with Live Server"

2. **Alternative Local Servers**
   ```bash
   # Node.js
   npx serve .
   
   # Python 3
   python -m http.server
   
   # PHP
   php -S localhost:8000
   ```

## 📋 Development Guidelines

### Code Standards
- Use semantic HTML5 elements
- Follow BEM methodology for CSS classes
- Write modular, reusable JavaScript
- Optimize images and assets for web
- Ensure accessibility (WCAG 2.1 AA)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (graceful degradation)

### Performance Goals
- Page load time < 3 seconds
- First Contentful Paint < 1.5 seconds
- Lighthouse score > 90
- Mobile-friendly design

## 🎨 Design System

### Colors
- Primary: #FF6B35 (Orange)
- Secondary: #2C3E50 (Dark Blue)
- Accent: #F39C12 (Yellow)
- Text: #333333 (Dark Gray)
- Background: #FFFFFF (White)

### Typography
- Headings: 'Roboto', sans-serif
- Body: 'Open Sans', sans-serif
- Weights: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 📱 Responsive Design

The website follows a mobile-first approach with progressive enhancement:

- **Mobile (320px+)**: Single column layout, touch-friendly buttons
- **Tablet (768px+)**: Two-column layout, expanded navigation
- **Desktop (1024px+)**: Multi-column layout, full navigation menu

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any configuration (if needed for future enhancements):

```env
# Contact form service endpoint
CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Google Analytics tracking ID
GA_TRACKING_ID=GA_MEASUREMENT_ID

# Google Maps API key (for location map)
GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on push to main branch

### Netlify
1. Drag and drop build folder
2. Or connect GitHub repository
3. Set build command: `npm run build` (if using build tools)

### GitHub Pages
1. Push to `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Access via: `username.github.io/repository-name`

## 📊 Analytics & Monitoring

- **Google Analytics** - Track visitor behavior
- **Hotjar** - User interaction heatmaps
- **Lighthouse** - Performance monitoring
- **GTmetrix** - Speed and optimization analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: support@fitness360gym.com
- **Phone**: +1 (555) 123-4567
- **Website**: https://fitness360gym.com

## 🙏 Acknowledgments

- Design inspiration from modern fitness brands
- Icons from Font Awesome
- Images from Unsplash (fitness/gym collection)
- Fonts from Google Fonts

---

**Built with ❤️ for Fitness360 Gym**