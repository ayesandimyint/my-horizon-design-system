import tokens from '../design-tokens/core.value.tokens.json' with { type: 'json' };

// Extract color tokens and group by color family
const colorTokens = Object.entries(tokens)
  .filter(([key]) => key.startsWith('color-'))
  .reduce((acc, [key, value]) => {
    const parts = key.replace('color-', '').split('-');
    const shade = parts[parts.length - 1];
    const family = parts.slice(0, -1).join('-');

    if (!acc[family]) acc[family] = {};
    acc[family][shade] = { key, ...value };
    return acc;
  }, {});

// Convert SRGB components to hex
const rgbToHex = (components) => {
  const [r, g, b] = components.map(v => Math.round(v * 255));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Convert SRGB components to RGB string
const rgbToString = (components) => {
  const [r, g, b] = components.map(v => Math.round(v * 255));
  return `rgb(${r}, ${g}, ${b})`;
};

export default {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

const ColorGrid = () => {
  const styles = `
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 40px; }
      .color-family { margin-bottom: 60px; }
      .family-name { font-size: 24px; font-weight: 600; margin-bottom: 20px; }
      .color-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
      .color-swatch { display: flex; flex-direction: column; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
      .swatch-color { height: 80px; width: 100%; }
      .swatch-info { padding: 12px; font-size: 12px; background: #f5f5f5; }
      .swatch-name { font-weight: 500; margin-bottom: 4px; }
      .swatch-value { color: #666; font-family: monospace; font-size: 11px; }
      .swatch-description { color: #999; font-size: 11px; margin-top: 4px; }
    </style>
  `;

  const colorFamilies = Object.entries(colorTokens)
    .sort()
    .map(([family, shades]) => {
      const sortedShades = Object.entries(shades)
        .sort((a, b) => {
          const aNum = parseInt(a[0]) || 0;
          const bNum = parseInt(b[0]) || 0;
          return aNum - bNum;
        });

      return `
        <div class="color-family">
          <div class="family-name">${family.charAt(0).toUpperCase() + family.slice(1)}</div>
          <div class="color-row">
            ${sortedShades
              .map(([shade, token]) => {
                const hex = rgbToHex(token.$value.components);
                const rgb = rgbToString(token.$value.components);
                return `
                  <div class="color-swatch">
                    <div class="swatch-color" style="background-color: ${hex};"></div>
                    <div class="swatch-info">
                      <div class="swatch-name">${family}-${shade}</div>
                      <div class="swatch-value">${hex}</div>
                      <div class="swatch-value">${rgb}</div>
                      ${token.$description ? `<div class="swatch-description">${token.$description}</div>` : ''}
                    </div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    ${styles}
    <div>
      <h1>Design System Colors</h1>
      ${colorFamilies}
    </div>
  `;
};

export const AllColors = {
  render: () => ColorGrid(),
};
