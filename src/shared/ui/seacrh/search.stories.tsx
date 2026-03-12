import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SearchUI } from './search';
import type { TSearchInputUIProps } from './types';

const meta: Meta<typeof SearchUI> = {
  title: 'ui/SearchUI',
  component: SearchUI,
  argTypes: {
    value: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const InteractiveTemplate = (args: TSearchInputUIProps) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <SearchUI
      {...args}
      value={value}
      onChange={setValue}
      onClear={() => setValue('')}
    />
  );
};

export const Empty: Story = {
  render: InteractiveTemplate,
  args: {
    placeholder: '',
    value: '',
  },
};