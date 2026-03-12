import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogoUI } from './logo';

const meta: Meta<typeof LogoUI> = {
  title: 'UI/LogoUI',
  component: LogoUI,
  args: {
    onClick: () => undefined,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof LogoUI>;

export const Default: Story = {};