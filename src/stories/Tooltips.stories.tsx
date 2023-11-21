import type { Meta, StoryObj } from '@storybook/react';

import Tooltips from '../components/common/Tooltips/Tooltips';

const meta: Meta<typeof Tooltips> = {
	component: Tooltips,
};

export default meta;
type Story = StoryObj<typeof Tooltips>;

export const Default: Story = {
	args: {},

	render: () => (
		<div
			style={{
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
			}}>
			<Tooltips>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum, vitae.
				</p>
				<p>Lorem, Dolorum, vitae.</p>
			</Tooltips>
		</div>
	),
};
