import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterMenuUI } from './filter-menu';

const meta: Meta<typeof FilterMenuUI> = {
  title: 'UI/FilterMenuUI',
  component: FilterMenuUI,
  args: {
    text: 'All Books',
    quality: 211,
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

type Story = StoryObj<typeof FilterMenuUI>;

export const Default: Story = {};