# IDP Enterprise Landing Page

Premium enterprise landing page for an Intelligent Document Processing (IDP) solution built with Amazon Bedrock and AWS serverless architecture.

## 🚀 Overview

This landing page presents a production-ready IDP solution developed during an AWS Hackathon. It demonstrates technical competence, architectural maturity, AWS expertise, and business vision to executives, cloud architects, tech leads, and CTOs.

## ✨ Features

- **Hero Section**: Full-screen with animated background, grid technology, glow effects, and discrete particles
- **Problem Section**: Market pain points with visual cards highlighting manual processing challenges
- **Solution Section**: Feature cards showcasing the IDP solution capabilities
- **Pipeline Timeline**: Interactive timeline showing the document processing flow with scroll animations
- **Architecture Section**: Zoomable architecture diagram with detailed service explanations
- **AWS Services Grid**: Comprehensive grid of all AWS services used in the solution
- **Differentials Section**: Feature cards highlighting serverless, event-driven, and pay-per-use benefits
- **FinOps Section**: Interactive charts showing cost efficiency and financial predictability
- **Security Section**: Security features including IAM, least privilege, KMS, and audit capabilities
- **Scalability Section**: Visual representation of automatic growth and scaling capabilities
- **Results Section**: Animated counters showing measurable impact metrics
- **Team Section**: Elegant team member cards
- **Footer**: Comprehensive footer with navigation and social links

## 🎨 Design

- **Theme**: Dark theme inspired by AWS, Stripe, Vercel, Linear, Cloudflare, and Datadog
- **Color Palette**:
  - Background: `#09090B`
  - Surface: `#111827`
  - Card: `#1F2937`
  - Primary (AWS Orange): `#FF9900`
  - Secondary: `#6D28D9`
  - Success: `#22C55E`
  - Text: `#F8FAFC`
  - Muted: `#94A3B8`
  - Borders: `#374151`

- **Style**: Modern, clean layout with glassmorphism, smooth gradients, elegant shadows, and minimalist icons

## 🛠️ Technologies

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, flexbox, and grid
- **JavaScript ES2023**: Modular, component-based architecture
- **Libraries**:
  - AOS (Animate On Scroll): Scroll animations
  - Chart.js: Interactive charts for FinOps and Scalability sections
  - Lucide: Minimalist icon library

## 📁 Project Structure

```
landing-page/
│
├── index.html              # Main HTML file
│
├── css/
│   ├── variables.css       # CSS custom properties and design tokens
│   ├── reset.css           # Modern CSS reset
│   ├── layout.css          # Layout and navigation styles
│   ├── components.css      # Reusable component styles
│   ├── sections.css        # Section-specific styles
│   ├── animations.css      # Animation and transition styles
│   └── responsive.css      # Responsive breakpoints
│
├── js/
│   ├── app.js              # Main application entry point
│   ├── navigation.js       # Navigation module with mobile menu
│   ├── counters.js         # Animated counters module
│   ├── charts.js           # Chart.js integration
│   └── particles.js        # Particle animation module
│
└── assets/
    ├── images/             # Image assets
    ├── icons/              # Icon assets
    └── fonts/              # Font files
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone or download the project
2. Navigate to the `landing-page` directory
3. Open `index.html` in a web browser

### Using a Local Server (Recommended)

Using Python 3:
```bash
python -m http.server 8000
```

Using Node.js (with http-server):
```bash
npx http-server
```

Using PHP:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 Key Sections

### Hero
- Impactful headline with gradient text
- Two CTAs for primary and secondary actions
- Animated background with grid technology and particles
- Glow effects for visual depth

### Pipeline
- Interactive timeline showing the document processing flow
- Each step includes:
  - API Gateway
  - Lambda
  - S3 Upload
  - EventBridge
  - Lambda Decompression
  - Bedrock Data Automation
  - Amazon Nova
  - Lambda Consolidator
  - DynamoDB

### Architecture
- Zoomable architecture diagram
- Click-to-expand functionality
- Detailed explanations of each architectural decision

### FinOps
- Doughnut chart showing cost distribution
- Key metrics:
  - < 5% infrastructure cost vs. AI processing
  - Predictable per-document costs
  - Elastic scaling
  - 90%+ cost savings vs. traditional infrastructure

### Accessibility

- Semantic HTML5 markup
- ARIA labels and roles
- Keyboard navigation support
- Proper color contrast ratios
- Screen reader friendly
- Focus indicators

### Performance

- Intersection Observer for lazy loading
- Optimized CSS with custom properties
- Modular JavaScript
- No code duplication
- Efficient animations using CSS transforms
- Critical resource preloading

### Responsive Design

- Desktop (1400px+)
- Laptop (1200px - 1399px)
- Tablet (768px - 1199px)
- Mobile (576px - 767px)
- Extra Small (< 576px)

## 📝 Customization

### Colors

Edit `css/variables.css` to customize the color palette:

```css
:root {
    --color-primary: #FF9900;
    --color-secondary: #6D28D9;
    /* ... other colors */
}
```

### Content

Edit `index.html` to update text content, sections, and CTAs.

### Team Members

Update the team section in `index.html` with actual team member information.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project was developed during an AWS Hackathon. All rights reserved.

## 👥 Team

Built by a multidisciplinary team of AWS specialists during the Hackathon AWS.

## 🙏 Acknowledgments

- AWS for the Hackathon opportunity
- Amazon Bedrock team for the Data Automation and Nova services
- Mentors: Layrane Dantas, Lucas Leite, Gilson Castro
