import type { Meta, StoryObj } from '@storybook/react';

import CheckBoxColor from '../components/CheckBoxColor/CheckBoxColor';

const meta: Meta<typeof CheckBoxColor> = {
	component: CheckBoxColor,
};

export default meta;
type Story = StoryObj<typeof CheckBoxColor>;

export const Default: Story = {
	// render: () => <CheckBoxColor  />,
	args: {
		checked: true,
		bgcolor: '#3B755F',
	},

	argTypes: {
		bgcolor: {
			options: ['#F2EBDB', '#2E3A8C', '#3B755F'],
			control: { type: 'select' },
		},
	},
};
