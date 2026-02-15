# 🏢 DMA Rentals - Real Estate & Loan Services Website

**Tagline:** *From Finding Spaces to Funding Dreams*

A modern, production-ready website for DMA Rentals and Real Estate Services built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Property Rentals** - Residential and commercial properties for lease
- **Buy & Sell Services** - Complete real estate transaction facilitation
- **Loan Assistance** - Home loans, land loans, vehicle loans, and education loans
- **Property Listings** - Browse available properties with advanced filtering
- **Contact Forms** - Easy inquiry submission via WhatsApp integration
- **Responsive Design** - Beautiful UI that works on all devices
- **SEO Optimized** - Meta tags and semantic HTML for better search visibility

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
```bash
cd dma-rentals
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Project Structure

```
dma-rentals/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PropertyCard.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Properties.tsx
│   │   └── Contact.tsx
│   ├── data/           # Static data and types
│   │   └── properties.ts
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite config
└── README.md          # Documentation
```

## 🎨 Design System

### Colors
- **Primary**: `#1a3a2e` (Deep forest green)
- **Accent**: `#c8a875` (Warm gold)
- **Neutral**: Stone gray palette

### Typography
- **Display Font**: Playfair Display (elegant serif)
- **Body Font**: Manrope (modern sans-serif)

### Key Features
- Sophisticated color palette
- Smooth animations and transitions
- Responsive grid layouts
- Interactive hover states
- Modern card designs
- Glass morphism effects

## 📱 Pages Overview

### 1. Home Page
- Hero section with CTA
- Core services overview
- Featured properties
- Why choose us section
- Client testimonials
- Call-to-action banner

### 2. About Us
- Company introduction
- Mission & Vision
- Core values
- Statistics showcase
- Why choose us details

### 3. Services
- Property leasing & rental management
- Real estate facilitation (buy & sell)
- Loan assistance (4 types)
- Detailed service descriptions
- Process explanations

### 4. Properties
- Property listings grid
- Advanced filtering (type, category)
- Property cards with details
- Contact CTAs
- Responsive design

### 5. Contact
- Contact information cards
- Inquiry form with WhatsApp integration
- Google Maps embed
- Quick contact options
- Business hours

## 🔧 Customization

### Update Contact Information

Edit `/src/data/properties.ts` and page files:
- Phone: `+91 86189 38686`
- Email: `info@dmarentals.com`
- Address: `Singapura, Bengaluru – 560097`

### Add/Edit Properties

Edit `/src/data/properties.ts`:

```typescript
{
  id: 7,
  title: "Your Property Name",
  type: "rental", // or "sale"
  category: "residential", // or "commercial"
  propertyType: "Apartment",
  price: "₹20,000/month",
  location: "Location Name",
  area: "1,200 sq.ft",
  bedrooms: 2,
  bathrooms: 2,
  image: "image-url",
  featured: true,
  description: "Property description",
  amenities: ["Amenity 1", "Amenity 2"]
}
```

### Update Styling

Edit `/src/styles/index.css` to change:
- Colors (CSS variables)
- Fonts
- Spacing
- Typography

## 🚀 Deployment

### GitHub Pages

1. Update `package.json` homepage:
```json
"homepage": "https://YOUR-USERNAME.github.io/DMA-Rentals"
```

2. Update `vite.config.ts` base:
```typescript
base: '/DMA-Rentals/'
```

3. Deploy:
```bash
npm run deploy
```

### Other Platforms

Build the project:
```bash
npm run build
```

Upload the `dist` folder to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Vite
- **Images**: Lazy loading enabled
- **Code Splitting**: Automatic with React Router

## 🔒 SEO & Meta Tags

All pages include:
- Descriptive titles
- Meta descriptions
- Open Graph tags (social sharing)
- Twitter Card tags
- Semantic HTML structure

## 📞 Support & Contact

For support or customization requests:
- **Phone**: +91 86189 38686
- **Email**: info@dmarentals.com
- **Location**: Singapura, Bengaluru – 560097

## 👨‍💻 Developer

Built with ❤️ by **Vishal** ([am-vishal](https://github.com/am-vishal))

## 📄 License

This project is private and proprietary to DMA Rentals and Real Estate Services.

---

**DMA Rentals** - *Your Reliable Partner in Rentals, Realty, and Loans*
