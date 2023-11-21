import styled from 'styled-components';

import InfoIcon from '../../SVG/InfoIcon';
import React from 'react';

const Cont = styled.div`
	position: relative;
	&:hover > div {
		opacity: 1;
		pointer-events: auto;
	}
`;

const Window = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	padding: 24px 16px;
	width: 250px;
	align-items: center;
	background: #ffffff;
	box-shadow: 0px 42px 76px rgba(0, 0, 0, 0.05),
		0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963),
		0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704),
		0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
		0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296),
		0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);
	border-radius: 4px;
	z-index: 10;
	gap: 23px;
	left: -120px;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.2s;

	p {
		font-size: 14px;
		color: #212121;
		text-align: center;
	}
`;

type Props = {
	children: React.ReactNode;
};

export default function Tooltips({ children }: Props) {
	return (
		<Cont>
			<InfoIcon />
			<Window>{children}</Window>
		</Cont>
	);
}
