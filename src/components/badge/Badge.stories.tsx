// Figma: https://www.figma.com/design/e1O2ke1lc0CpM6GhYKyr3o/%F0%9F%A7%8A-Horizon-.-Web-.-Components-.-Draft-.?node-id=39-84&t=sMWbnfr6TH4s7ZKE-1

import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    form: {
      control: 'select',
      options: ['dot', 'dotText', 'text'],
      description: 'Badge form style',
    },
    role: {
      control: 'select',
      options: ['positive', 'negative', 'warning', 'info', 'accent', 'neutral'],
      description: 'Badge semantic role/color',
    },
    label: {
      control: 'text',
      description: 'Badge label text (for dotText and text forms)',
    },
  },
};

const Template = (args: any) => <Badge {...args} />;

// Dot Form Stories
export const DotPositive = Template.bind({}) as any;
DotPositive.args = { form: 'dot', role: 'positive' };
DotPositive.storyName = 'Dot / Positive';

export const DotNegative = Template.bind({}) as any;
DotNegative.args = { form: 'dot', role: 'negative' };
DotNegative.storyName = 'Dot / Negative';

export const DotWarning = Template.bind({}) as any;
DotWarning.args = { form: 'dot', role: 'warning' };
DotWarning.storyName = 'Dot / Warning';

export const DotInfo = Template.bind({}) as any;
DotInfo.args = { form: 'dot', role: 'info' };
DotInfo.storyName = 'Dot / Info';

export const DotAccent = Template.bind({}) as any;
DotAccent.args = { form: 'dot', role: 'accent' };
DotAccent.storyName = 'Dot / Accent';

export const DotNeutral = Template.bind({}) as any;
DotNeutral.args = { form: 'dot', role: 'neutral' };
DotNeutral.storyName = 'Dot / Neutral';

// DotText Form Stories
export const DotTextPositive = Template.bind({}) as any;
DotTextPositive.args = { form: 'dotText', role: 'positive', label: 'Label' };
DotTextPositive.storyName = 'DotText / Positive';

export const DotTextNegative = Template.bind({}) as any;
DotTextNegative.args = { form: 'dotText', role: 'negative', label: 'Label' };
DotTextNegative.storyName = 'DotText / Negative';

export const DotTextWarning = Template.bind({}) as any;
DotTextWarning.args = { form: 'dotText', role: 'warning', label: 'Label' };
DotTextWarning.storyName = 'DotText / Warning';

export const DotTextInfo = Template.bind({}) as any;
DotTextInfo.args = { form: 'dotText', role: 'info', label: 'Label' };
DotTextInfo.storyName = 'DotText / Info';

export const DotTextAccent = Template.bind({}) as any;
DotTextAccent.args = { form: 'dotText', role: 'accent', label: 'Label' };
DotTextAccent.storyName = 'DotText / Accent';

export const DotTextNeutral = Template.bind({}) as any;
DotTextNeutral.args = { form: 'dotText', role: 'neutral', label: 'Label' };
DotTextNeutral.storyName = 'DotText / Neutral';

// Text Form Stories
export const TextPositive = Template.bind({}) as any;
TextPositive.args = { form: 'text', role: 'positive', label: 'Label' };
TextPositive.storyName = 'Text / Positive';

export const TextNegative = Template.bind({}) as any;
TextNegative.args = { form: 'text', role: 'negative', label: 'Label' };
TextNegative.storyName = 'Text / Negative';

export const TextWarning = Template.bind({}) as any;
TextWarning.args = { form: 'text', role: 'warning', label: 'Label' };
TextWarning.storyName = 'Text / Warning';

export const TextInfo = Template.bind({}) as any;
TextInfo.args = { form: 'text', role: 'info', label: 'Label' };
TextInfo.storyName = 'Text / Info';

export const TextAccent = Template.bind({}) as any;
TextAccent.args = { form: 'text', role: 'accent', label: 'Label' };
TextAccent.storyName = 'Text / Accent';

export const TextNeutral = Template.bind({}) as any;
TextNeutral.args = { form: 'text', role: 'neutral', label: 'Label' };
TextNeutral.storyName = 'Text / Neutral';

// All Variants View
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div>
      <h3>Dot Form</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Badge form="dot" role="positive" />
        <Badge form="dot" role="negative" />
        <Badge form="dot" role="warning" />
        <Badge form="dot" role="info" />
        <Badge form="dot" role="accent" />
        <Badge form="dot" role="neutral" />
      </div>
    </div>

    <div>
      <h3>DotText Form</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Badge form="dotText" role="positive" label="Label" />
        <Badge form="dotText" role="negative" label="Label" />
        <Badge form="dotText" role="warning" label="Label" />
        <Badge form="dotText" role="info" label="Label" />
        <Badge form="dotText" role="accent" label="Label" />
        <Badge form="dotText" role="neutral" label="Label" />
      </div>
    </div>

    <div>
      <h3>Text Form (Pill)</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Badge form="text" role="positive" label="Label" />
        <Badge form="text" role="negative" label="Label" />
        <Badge form="text" role="warning" label="Label" />
        <Badge form="text" role="info" label="Label" />
        <Badge form="text" role="accent" label="Label" />
        <Badge form="text" role="neutral" label="Label" />
      </div>
    </div>
  </div>
);
AllVariants.storyName = 'All Variants';
