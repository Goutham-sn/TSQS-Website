# tsQs Inc — Corporate Website

The official corporate website for **tsQs Inc**, a quality engineering services company specializing in software testing, automation, and accessibility.

## Tech Stack

- **Framework:** React 18
- **Routing:** React Router v7
- **Styling:** Plain CSS (per-page scoped stylesheets)
- **Build Tool:** Create React App
- **Typography:** Montserrat (Google Fonts)

## Project Structure

```
src/
├── pages/           # Page components (Home, Expertise, Academy, AccessGen, etc.)
├── components/      # Shared components (Navbar, Footer)
├── styles/          # CSS files (1:1 mapping with pages/components)
├── Images/          # Static image assets
└── Video/           # Video assets
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/quality-engineering` | Quality Engineering |
| `/accessgen` | Accessibility (AccessGen) |
| `/expertise` | Expertise |
| `/academy` | Academy |
| `/business-strategy` | Business Model |
| `/e-book` | e-Book |
| `/careers` | Careers |
| `/contact-us` | Contact Us |

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000). The page reloads on file changes.

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder with optimized bundles.

## Design System

- **Primary Color:** `#E67320` (Orange)
- **Body Text:** `rgb(51, 49, 49)`
- **Section Backgrounds:** `#F3FCF9` (Mint), `#f9f9f9` (Light Grey), `white`
- **Cards:** `border-radius: 12px`, `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`
- **Max Content Width:** 1200px
- **Section Padding:** 40px

## License

Proprietary — tsQs Inc. All rights reserved.
