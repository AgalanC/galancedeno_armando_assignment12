import { Meta, StoryFn } from '@storybook/react';
import CustomCard from './Card';
import { CustomCardProps } from './Card.types';

export default {
  title: 'Components/CustomCard',
  component: CustomCard,
  argTypes: {
    children: { control: 'text', defaultValue: 'Hi Kevin!' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Define an intersection type including backgroundColor
type CustomCardStoryProps = CustomCardProps & { backgroundColor?: string };

const Template: StoryFn<CustomCardStoryProps> = (args) => <CustomCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hi Kevin!',
  disabled: false,
  backgroundColor: '#ffffff', // Default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Hi Kevin!',
  disabled: true,
  backgroundColor: '#d3d3d3', // Disabled background color
};
