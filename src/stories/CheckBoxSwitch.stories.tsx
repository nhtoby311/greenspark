import type { Meta, StoryObj } from '@storybook/react';

import CheckBoxSwitch from '../components/common/CheckBoxSwitch/CheckBoxSwitch';

const meta: Meta<typeof CheckBoxSwitch> = {
	component: CheckBoxSwitch,
};

export default meta;
type Story = StoryObj<typeof CheckBoxSwitch>;

export const Default: Story = {
	args: {
		id: 'checkbox',
		name: 'checkbox',
	},
};

export const State: Story = {
	args: {
		checked: true,
	},
};
