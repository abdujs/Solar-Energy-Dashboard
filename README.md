# Solar Energy Dashboard

A professional, modular, and visually advanced dashboard for global solar energy analytics. Built with React, Vite, TypeScript, Tailwind CSS, and Recharts.

> **Live Demo:** [https://solarenergy-dashboard.vercel.app](https://solarenergy-dashboard.vercel.app)
> 
> **Data Source:** The solar energy data used in this dashboard is sourced from Kaggle.

## Features
- Global solar capacity, generation, and growth metrics
- Interactive charts: Pie, Line, Radar, Scatter, Area
- Modern, illuminated UI with custom Tailwind theme
- Responsive and mobile-friendly layout
- Animated micro-interactions and tooltips

## Tech Stack
- **React** + **Vite** + **TypeScript**
- **Tailwind CSS** (custom palette, gradients, glow effects)
- **Recharts** (all chart types)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

## Project Structure
```
├── src/
│   ├── App.tsx                # Main dashboard UI
│   ├── components/            # Modular chart and card components
│   ├── data/                  # solarpower.json (data source)
│   └── index.css              # Tailwind CSS import
├── tailwind.config.js         # Custom Tailwind theme
├── postcss.config.js          # PostCSS config (required for Tailwind)
├── vite.config.ts             # Vite config
└── README.md                  # Project info (this file)
```

## Customization
- Edit `tailwind.config.js` to adjust the color palette and glow effects.
- Add or remove chart components in `App.tsx` as needed.
- Replace or update `data/solarpower.json` for new datasets.

## Notes
- Make sure `postcss.config.js` is present for Tailwind to work.
- For best results, always restart the dev server after changing Tailwind config.

---

© 2025 Solar Energy Dashboard.
