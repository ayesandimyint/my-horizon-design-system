import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button variant style',
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'pressed', 'focused', 'disabled'],
      description: 'Button interaction state',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary',
  state: 'default',
};
Primary.storyName = 'Primary / Default';

export const PrimaryHovered = Template.bind({});
PrimaryHovered.args = {
  label: 'Button',
  variant: 'primary',
  state: 'hovered',
};
PrimaryHovered.storyName = 'Primary / Hovered';

export const PrimaryPressed = Template.bind({});
PrimaryPressed.args = {
  label: 'Button',
  variant: 'primary',
  state: 'pressed',
};
PrimaryPressed.storyName = 'Primary / Pressed';

export const PrimaryFocused = Template.bind({});
PrimaryFocused.args = {
  label: 'Button',
  variant: 'primary',
  state: 'focused',
};
PrimaryFocused.storyName = 'Primary / Focused';

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  label: 'Button',
  variant: 'primary',
  state: 'disabled',
};
PrimaryDisabled.storyName = 'Primary / Disabled';

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary',
  state: 'default',
};
Secondary.storyName = 'Secondary / Default';

export const SecondaryHovered = Template.bind({});
SecondaryHovered.args = {
  label: 'Button',
  variant: 'secondary',
  state: 'hovered',
};
SecondaryHovered.storyName = 'Secondary / Hovered';

export const SecondaryPressed = Template.bind({});
SecondaryPressed.args = {
  label: 'Button',
  variant: 'secondary',
  state: 'pressed',
};
SecondaryPressed.storyName = 'Secondary / Pressed';

export const SecondaryFocused = Template.bind({});
SecondaryFocused.args = {
  label: 'Button',
  variant: 'secondary',
  state: 'focused',
};
SecondaryFocused.storyName = 'Secondary / Focused';

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  label: 'Button',
  variant: 'secondary',
  state: 'disabled',
};
SecondaryDisabled.storyName = 'Secondary / Disabled';

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div>
      <h3>Primary Variant</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button label="Default" variant="primary" state="default" />
        <Button label="Hovered" variant="primary" state="hovered" />
        <Button label="Pressed" variant="primary" state="pressed" />
        <Button label="Focused" variant="primary" state="focused" />
        <Button label="Disabled" variant="primary" state="disabled" />
      </div>
    </div>
    <div>
      <h3>Secondary Variant</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button label="Default" variant="secondary" state="default" />
        <Button label="Hovered" variant="secondary" state="hovered" />
        <Button label="Pressed" variant="secondary" state="pressed" />
        <Button label="Focused" variant="secondary" state="focused" />
        <Button label="Disabled" variant="secondary" state="disabled" />
      </div>
    </div>
  </div>
);
AllVariants.storyName = 'All Variants';
