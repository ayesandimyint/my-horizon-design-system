import typographyTokens from '../design-tokens/typography.styles.tokens.json' with { type: 'json' };

export default {
  title: 'Design Tokens/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

const TypographyGrid = () => {
  const styles = `
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 40px; }
      .typography-family { margin-bottom: 60px; }
      .family-name { font-size: 24px; font-weight: 600; margin-bottom: 20px; }
      .typography-item { margin-bottom: 32px; padding: 24px; background: #f9f9f9; border-radius: 8px; border: 1px solid #e0e0e0; }
      .typography-preview { margin-bottom: 16px; }
      .typography-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; font-size: 12px; }
      .info-item { }
      .info-label { font-weight: 600; color: #666; margin-bottom: 4px; }
      .info-value { color: #999; font-family: monospace; }
    </style>
  `;

  const items = Object.entries(typographyTokens)
    .filter(([key]) => typeof key === 'string')
    .map(([key, token]) => {
      if (token.$type === 'typography') {
        const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } = token.$value;
        return `
          <div class="typography-item">
            <div class="typography-preview" style="font-family: ${fontFamily}; font-size: ${fontSize}; font-weight: ${fontWeight}; line-height: ${lineHeight}; letter-spacing: ${letterSpacing};">
              The quick brown fox jumps over the lazy dog
            </div>
            <div class="typography-info">
              <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${key}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Font Family</div>
                <div class="info-value">${fontFamily}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Font Size</div>
                <div class="info-value">${fontSize}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Font Weight</div>
                <div class="info-value">${fontWeight}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Line Height</div>
                <div class="info-value">${lineHeight}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Letter Spacing</div>
                <div class="info-value">${letterSpacing}</div>
              </div>
            </div>
          </div>
        `;
      }
      return '';
    })
    .filter(Boolean)
    .join('');

  return `
    ${styles}
    <div>
      <h1>Design System Typography</h1>
      <div class="typography-family">
        ${items}
      </div>
    </div>
  `;
};

export const AllTypography = {
  render: () => TypographyGrid(),
};
