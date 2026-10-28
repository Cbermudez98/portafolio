/**
 * Palette reference for the navy / slate / teal theme.
 * Primary tokens live in src/styles.css (@theme + :root).
 */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        slate: '#1E293B',
        muted: '#94A3B8',
        light: '#E2E8F0',
        teal: '#5EEAD4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
};
