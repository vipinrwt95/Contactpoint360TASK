# 🚀 Modern Calendar Dashboard

A stunning, modern React application featuring an interactive calendar with advanced data visualization capabilities. Built with **Vite**, **Tailwind CSS**, **Redux Toolkit**, and **Framer Motion** for a sleek, professional user experience.

![Calendar Dashboard](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-06B6D4) ![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC)

## ✨ Features

- **🎨 Modern Glassmorphism Design** - Beautiful glass-like UI with backdrop blur effects
- **📅 Interactive Calendar** - Full-featured calendar with month, week, and day views
- **📊 Advanced Data Visualization** - Bar charts, pie charts, and detailed analytics
- **🎭 Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Lightning Fast** - Built with Vite for instant hot reload and optimized builds
- **🎯 Redux State Management** - Scalable state management with Redux Toolkit
- **🌙 Dark Theme** - Beautiful dark theme with gradient backgrounds

## 🛠️ Tech Stack

### Core Technologies
- **React 18.2.0** - Modern React with hooks and concurrent features
- **Vite 5.0.0** - Next-generation frontend tooling
- **TypeScript Ready** - Full TypeScript support (optional)

### Styling & UI
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **Framer Motion 10.16.5** - Production-ready motion library
- **Lucide React** - Beautiful, customizable icons
- **Custom Glassmorphism** - Modern glass-like design system

### State Management & Data
- **Redux Toolkit 1.9.7** - Modern Redux with less boilerplate
- **React Redux 8.1.3** - Official React bindings for Redux
- **React Big Calendar** - Feature-rich calendar component
- **Recharts** - Composable charting library

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-calendar-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── Header.jsx                   # Modern header with search and user menu
│   ├── Sidebar.jsx                  # Collapsible navigation sidebar
│   ├── ModernCalendarDashboard.jsx  # Main calendar component
│   └── ModernBarChartModal.jsx      # Advanced modal with charts
├── data/                   # Sample data
│   └── dummyData.js        # Enhanced dummy JSON data
├── hooks/                  # Custom React hooks
│   └── useReduxCalendar.js # Redux integration hook
├── store/                  # Redux store configuration
│   ├── index.js            # Store setup
│   └── slices/             # Redux slices
│       ├── calendarSlice.js         # Calendar state management
│       └── dataSlice.js             # Data state management
├── utils/                  # Utility functions
│   └── dataProcessor.js    # Data processing utilities
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
└── index.css               # Global styles with Tailwind
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue to Purple gradients (`#3b82f6` → `#8b5cf6`)
- **Success**: Emerald (`#10b981`)
- **Warning**: Amber (`#f59e0b`)
- **Error**: Red (`#ef4444`)
- **Neutral**: Slate grays (`#0f172a` → `#f8fafc`)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Glass Cards**: `bg-white/10 backdrop-blur-md`
- **Buttons**: Gradient backgrounds with hover effects
- **Modals**: Glassmorphism with backdrop blur
- **Animations**: Framer Motion powered transitions

## 🎯 Usage

### Calendar Navigation
- **View Switching**: Toggle between month, week, and day views
- **Date Navigation**: Use navigation buttons or click dates
- **Data Highlighting**: Dates with data are visually highlighted
- **Responsive Design**: Optimized for mobile and desktop

### Data Interaction
- **Click Events**: Click on highlighted dates to view data
- **Modal Views**: Interactive popups with charts and statistics
- **Chart Types**: Bar charts, pie charts, and data tables
- **Statistics**: Real-time calculations and analytics

### Sample Data Format
```json
{
  "01-09-2025": [
    {"user_1": 45},
    {"user_2": 78},
    {"user_3": 32},
    {"user_4": 91}
  ]
}
```

## 🏗️ Architecture

### State Management
- **Calendar Slice**: Manages calendar state, modals, and navigation
- **Data Slice**: Handles application data, loading states, and updates
- **Custom Hooks**: Reusable state management logic

### Component Architecture
- **Container Components**: Handle state and business logic
- **Presentation Components**: Focus on UI and user interaction
- **Custom Hooks**: Encapsulate reusable stateful logic

### Performance Optimizations
- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Unused code elimination
- **Hot Module Replacement**: Instant development updates
- **Optimized Builds**: Production-ready bundles

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px` - Stacked layout, touch-friendly
- **Tablet**: `768px - 1024px` - Optimized grid layouts
- **Desktop**: `> 1024px` - Full sidebar and multi-column

### Mobile Features
- **Touch Gestures**: Swipe navigation
- **Collapsible Sidebar**: Space-efficient navigation
- **Responsive Modals**: Full-screen on mobile
- **Touch-Friendly**: Larger touch targets

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Production
npm run build        # Create optimized build
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🎨 Customization

### Themes
- **Dark Theme**: Default with gradient backgrounds
- **Color Customization**: Modify Tailwind config
- **Component Themes**: CSS custom properties

### Styling
- **Tailwind Config**: `tailwind.config.js`
- **Global Styles**: `src/index.css`
- **Component Styles**: Inline with Tailwind classes

## 📊 Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 500KB gzipped

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**ContactPoint360 Developer**
- Modern UI/UX Design
- React & Vite Expert
- Full-Stack Development

## 🎯 Future Enhancements

- [ ] **Real-time Updates** - WebSocket integration
- [ ] **Data Export** - PDF/Excel export functionality
- [ ] **User Authentication** - Login and user management
- [ ] **Advanced Analytics** - More chart types and insights
- [ ] **Theme Customization** - Multiple theme options
- [ ] **Offline Support** - PWA capabilities
- [ ] **Mobile App** - React Native version
- [ ] **API Integration** - Real backend integration

## 📞 Support

For support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using React, Vite, Tailwind CSS, and modern web technologies**

*Experience the future of web development with this modern, sleek, and performant calendar dashboard.*