import { Meta, StoryFn } from '@storybook/react';
import Button from './button';
import { ButtonProps } from './button.types';

export default {
title: 'Components/Button',
component: Button,
argTypes: {
children: { control: 'text', defaultValue: 'Click Me!' },
disabled: { control: 'boolean' },
backgroundColor: { control: 'color' }, // Add background color control
},
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <button {...args} />;

export const Default = Template.bind({});
Default.args = {
children: 'Click Me!',
disabled: false,
backgroundColor: '#4CAF50', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
children: 'I am Disabled',
disabled: true,
backgroundColor: '#A9A9A9', // Disabled background color
};

// export const Visible = Template.bind({});
// Visible.args = {
// children: 'I am Visible',
// disabled: false,
// backgroundColor: '#A9A9A9',
// };