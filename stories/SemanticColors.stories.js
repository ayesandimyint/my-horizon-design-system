import lightTokens from '../design-tokens/semantic.light.tokens.json' with { type: 'json' };
import darkTokens from '../design-tokens/semantic.dark.tokens.json' with { type: 'json' };
import coreTokens from '../design-tokens/core.value.tokens.json' with { type: 'json' };

// Convert SRGB components to hex
const rgbToHex = (components) => {
  if (Array.isArray(components)) {
    const [r, g, b] = components.map(v => Math.round(v * 255));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  return components;
};

// Resolve color references
const resolveColorValue = (value) => {
  if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
    const refName = value.slice(1, -1);
    const referencedToken = coreTokens[refName];
    if (referencedToken && referencedToken.$value.components) {
      return rgbToHex(referencedToken.$value.components);
    }
    return '#999999'; // Fallback gray
  }
  return value;
};

export default {
  title: 'Design Tokens/Semantic Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

const SemanticColorGrid = () => {
  const styles = `
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 40px; }
      .theme-section { margin-bottom: 80px; }
      .theme-title { font-size: 32px; font-weight: 700; margin-bottom: 30px; }
      .color-family { margin-bottom: 40px; }
      .family-name { font-size: 18px; font-weight: 600; margin-bottom: 16px; color: #333; }
      .color-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
      .color-swatch { display: flex; flex-direction: column; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
      .swatch-color { height: 60px; width: 100%; border-radius: 4px 4px 0 0; }
      .swatch-info { padding: 10px; font-size: 11px; background: #fafafa; }
      .swatch-name { font-weight: 600; margin-bottom: 3px; color: #222; word-break: break-word; }
      .swatch-value { color: #666; font-family: monospace; font-size: 10px; margin-bottom: 2px; }
      .swatch-ref { color: #aaa; font-family: monospace; font-size: 9px; margin-bottom: 3px; }
      .swatch-description { color: #999; font-size: 10px; line-height: 1.3; }
    </style>
  `;

  const renderColors = (tokens) => {
    const colorTokens = Object.entries(tokens)
      .filter(([key]) => key.startsWith('color-'))
      .map(([key, value]) => ({ key, ...value }))
      .sort((a, b) => a.key.localeCompare(b.key));

    // Group by prefix (bg-, text-, border-, etc.)
    const grouped = colorTokens.reduce((acc, token) => {
      const match = token.key.match(/^color-([a-z]+)-/);
      const prefix = match ? match[1] : 'other';
      if (!acc[prefix]) acc[prefix] = [];
      acc[prefix].push(token);
      return acc;
    }, {});

    return Object.entries(grouped)
      .sort()
      .map(([prefix, items]) => {
        const prefixName = {
          'bg': 'Background',
          'text': 'Text',
          'border': 'Border',
          'icon': 'Icon',
          'other': 'Other'
        }[prefix] || prefix.charAt(0).toUpperCase() + prefix.slice(1);

        return `
          <div class="color-family">
            <div class="family-name">${prefixName}</div>
            <div class="color-row">
              ${items
                .map(token => {
                  const color = resolveColorValue(token.$value);

                  return `
                    <div class="color-swatch">
                      <div class="swatch-color" style="background-color: ${color};"></div>
                      <div class="swatch-info">
                        <div class="swatch-name">${token.key.replace('color-', '')}</div>
                        <div class="swatch-value">${color}</div>
                        <div class="swatch-ref">${token.$value}</div>
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
  };

  return `
    ${styles}
    <div>
      <h1>Design System Semantic Colors</h1>

      <div class="theme-section">
        <div class="theme-title">Light Theme</div>
        ${renderColors(lightTokens)}
      </div>

      <div class="theme-section">
        <div class="theme-title">Dark Theme</div>
        ${renderColors(darkTokens)}
      </div>
    </div>
  `;
};

export const AllSemanticColors = {
  render: () => SemanticColorGrid(),
};
