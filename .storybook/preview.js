import '../build/css/tokens.css';

// Load Google Fonts for design tokens
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const tags = ['autodocs'];
