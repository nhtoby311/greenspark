import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import Container from './Container/Container';
import Card from './Card/Card';
import { API } from '../../types/API';
import Loading from './Loading/Loading';
import dataMock from '../../data/mock_data.json';
import { cubicBezier, motion, useAnimate, stagger } from 'framer-motion';

export default function Home() {
	const [scope, animate] = useAnimate();

	const [data, setData] = useState<API[] | undefined>();
	const { loading, value } = useFetch(
		dataMock, //Remove and uncomment if want to fetch from API
		//`https://getgreenspark.mocklab.io/products`,
		{},
		[]
	);

	const colorsBanner = ['#2E3A8C', '#3B755F', '#F2EBDB'];
	const colorsText = [null, null, '#3B755F'];

	useEffect(() => {
		if (data && scope.current)
			animate(
				'form',
				{ opacity: [0, 1], y: [100, 0] },
				{
					delay: stagger(0.1, {
						ease: [0.44, 0.01, 0.81, 1],
						startDelay: 0.3,
					}),
					duration: 0.5,
				}
			);
	}, [data]);

	useEffect(() => {
		if (value !== undefined) {
			let valueReal: API[] | never = value;
			valueReal = valueReal.map((e, ind) => {
				return {
					...e,
					background: colorsBanner[ind],
					textcolor: colorsText[ind],
				};
			});
			setData(valueReal);
		}
		// eslint-disable-next-line
	}, [value]);

	return (
		<Wrapper ref={scope}>
			<Container>
				{loading ? (
					<Loading />
				) : (
					<CardCont>
						{data &&
							data.map((e) => (
								<Card key={e.id.toString()} data={e}></Card>
							))}
					</CardCont>
				)}
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	@media screen and (max-width: 937px) {
		align-items: flex-start;
		margin-top: 48px;
	}
`;

const CardCont = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin-top: 25px;
	gap: 50px;
	@media screen and (max-width: 937px) {
		grid-template-columns: 1fr;
	}
`;
