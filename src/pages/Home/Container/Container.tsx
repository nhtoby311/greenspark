import { cubicBezier, motion } from 'framer-motion';
import styled from 'styled-components';

const Cont = styled.div`
	min-height: 40%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 36px;

	background: #f9f9f9;
	box-shadow: 0px 42px 76px rgba(0, 0, 0, 0.05),
		0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963),
		0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704),
		0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
		0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296),
		0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);
	border-radius: 8px;
`;

const Line = styled(motion.div)`
	width: 100%;
	height: 2px;
	background: #b0b0b0;
	margin-top: 12px;
	transform-origin: left;
`;

const Title = styled(motion.h1)`
	font-size: 30px;
`;

export default function Container(props: any) {
	return (
		<Cont>
			<Title
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.7,
					ease: cubicBezier(0.44, 0.01, 0.81, 1),
				}}>
				Per product widget
			</Title>
			<Line
				initial={{ transform: 'scaleX(0)' }}
				animate={{ transform: 'scaleX(1)' }}
				transition={{
					duration: 0.7,
					delay: 0.2,
					ease: cubicBezier(0.44, 0.01, 0.81, 1),
				}}
			/>
			{props.children}
		</Cont>
	);
}
