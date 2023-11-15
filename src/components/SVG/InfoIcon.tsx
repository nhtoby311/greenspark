import { Props } from './types';

const InfoIcon = ({ className, color }: Props) => (
	<svg
		className={className}
		xmlns='http://www.w3.org/2000/svg'
		width={12}
		fill='none'
		viewBox='0 0 12 13'>
		<path
			fill={color || '#3B755F'}
			d='M5.5 9.474h1v-3h-1v3Zm.5-7.5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 9c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4Zm-.5-5.5h1v-1h-1v1Z'
		/>
		<path
			fill={color || '#3B755F'}
			d='M5.5 4.474h1v1h-1v-1Zm0 2h1v3h-1v-3Z'
		/>
		<path
			fill={color || '#3B755F'}
			d='M6 1.974c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 9c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4Z'
		/>
	</svg>
);
export default InfoIcon;
