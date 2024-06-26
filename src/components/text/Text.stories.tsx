import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text', defaultValue: 'Goofy Text!' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add background color control
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Try to hover over me and see what happens to you!',
  disabled: false,
  backgroundColor: '#f0e68c', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Sucks for you, but you have been disabled!',
  disabled: true,
  backgroundColor: '#d3d3d3', // Disabled background color
};
