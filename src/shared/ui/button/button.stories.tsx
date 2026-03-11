import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonUI } from './button';

const meta: Meta<typeof ButtonUI> = {
  title: 'UI/ButtonUI',
  component: ButtonUI,
  args: {
    text: '+ Add book',
    onClick: () => undefined,
  },
  argTypes: {
    text: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonUI>;

export const Default: Story = {};