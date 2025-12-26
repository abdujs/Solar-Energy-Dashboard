module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#081225', // deeper navy
        navy2: '#11203a',
        primary: '#1e293b',
        brand: '#f59e42', // solar orange
        accent: '#ffd700', // solar yellow
        accent2: '#ffe066', // lighter yellow
        success: '#22c55e',
        warning: '#facc15',
        error: '#ef4444',
        dark: '#0f172a',
        dark2: '#1a2233',
        light: '#f8fafc',
        light2: '#f1f5f9',
        card: '#ffffff',
        card2: '#f4f4f5',
        text: '#1e293b',
        text2: '#334155',
        muted: '#64748b',
        info: '#38bdf8',
        purple: '#a78bfa',
        green: '#4ade80',
        yellow: '#fde047',
        orange: '#fb923c',
        orange2: '#ffb347',
        red: '#ef4444',
        white: '#fff',
        gray: '#e5e7eb',
        gray2: '#cbd5e1',
        glow: 'rgba(245, 158, 66, 0.4)', // soft orange glow
        'glow-yellow': 'rgba(255, 215, 0, 0.3)', // soft yellow glow
        'glow-blue': 'rgba(99, 102, 241, 0.2)', // soft blue glow
        'glow-green': 'rgba(34, 197, 94, 0.2)',
        'glow-white': '0 0 24px 4px rgba(255,255,255,0.15)',
      },
      fontFamily: {
        title: ['Montserrat', 'Inter', 'Arial', 'sans-serif'],
        body: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['Fira Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 16px 4px rgba(245, 158, 66, 0.4)',
        glowYellow: '0 0 16px 4px rgba(255, 215, 0, 0.3)',
        glowBlue: '0 0 16px 4px rgba(99, 102, 241, 0.2)',
        glowGreen: '0 0 16px 4px rgba(34, 197, 94, 0.2)',
        glowWhite: '0 0 24px 4px rgba(255,255,255,0.15)',
      },
    },
  },
  plugins: [],
};
