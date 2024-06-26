import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text', defaultValue: 'Angry Lable!' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sad Label!',
  disabled: false,
  backgroundColor: '#ffffe0', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled!',
  disabled: true,
  backgroundColor: '#d3d3d3', // Disabled background color
};
