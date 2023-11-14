import styled from 'styled-components';

const Cont = styled.div`
	position: relative;
	&:hover > div {
		opacity: 1;
	}
`;

const InputBox = styled.input<Props>`
	--active-inner: #fff;
	--border: #212121;
	--border-hover: #3b755f;
	--background: ${(props) => props.bgcolor};
	--disabled: #f6f8ff;
	--disabled-inner: #e1e6f9;
	-webkit-appearance: none;
	-moz-appearance: none;
	height: 19px;
	width: 19px;
	border-radius: 3px;
	outline: none;
	position: relative;
	margin: 0;
	cursor: pointer;
	background: var(--b, var(--background));
	transition: background 0.3s, border-color 0.3s, box-shadow 0.2s,
		transform 0.2s;

	&:checked {
		transform: scale(0.7);
	}

	&:hover {
		opacity: 1;
	}
	&:before {
		content: '';
		position: absolute;
		left: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #ffffff48;
		opacity: 0;
		transition: opacity 0.2s;
	}

	&:hover:before {
		opacity: 1;
	}
`;

const ShadowBox = styled.div`
	height: 19px;
	width: 19px;
	border-radius: 3px;
	left: 0;
	top: 0;
	position: absolute;
	background: #d1c2c2;
`;

type Props = {
	bgcolor: string;
	onClick?: () => void;
	active?: boolean;
};

export default function CheckBoxColor(props: Props) {
	//console.log(props.active)
	const checkedVal = props.active ? true : false;
	return (
		<Cont onClick={props.onClick}>
			<ShadowBox></ShadowBox>
			<InputBox
				onChange={() => {}}
				checked={checkedVal}
				className='input-checkbox-color'
				bgcolor={props.bgcolor}
				type='checkbox'></InputBox>
		</Cont>
	);
}
