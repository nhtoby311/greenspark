import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from '../components/common/CheckBox/CheckBox';

const meta: Meta<typeof CheckBox> = {
	component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

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
