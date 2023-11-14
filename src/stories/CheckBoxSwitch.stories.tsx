import type { Meta, StoryObj } from '@storybook/react';

import CheckBoxSwitch from '../components/CheckBoxSwitch/CheckBoxSwitch';

const meta: Meta<typeof CheckBoxSwitch> = {
	component: CheckBoxSwitch,
};

export default meta;
type Story = StoryObj<typeof CheckBoxSwitch>;

export const Default: Story = {
	args: {},
};
