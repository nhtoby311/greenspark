import styled from 'styled-components';

const Cont = styled.div`
	position: relative;
	&:hover > div {
		opacity: 1;
	}
`;

const InputBox = styled.input`
	--active: #3b755f;
	--active-inner: #fff;
	--border: #212121;
	--border-hover: #3b755f;
	--background: #fff;
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
	border: 2px solid var(--bc, var(--border));
	background: var(--b, var(--background));
	transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 4px;
		height: 8px;
		border: 2px solid var(--active-inner);
		border-top: 0;
		border-left: 0;
		left: 5px;
		top: 2px;
		transform: rotate(45deg);
		z-index: 5;
		transition: transform 0.2s, opacity 0.2s;
	}

	&:checked {
		--b: var(--active);
		--bc: var(--active);
	}

	&:hover {
		--bc: var(--border-hover);
	}
`;
const HoverShadow = styled.div`
	width: 31px;
	height: 31px;
	position: absolute;
	background: #afc6bd;
	left: -6px;
	top: -6px;
	border-radius: 50%;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
`;

type Props = {
	id?: string;
	name?: string;
	checked?: boolean;
	onChangeCB?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckBox({ id, name, checked, onChangeCB }: Props) {
	return (
		<Cont>
			<HoverShadow></HoverShadow>
			<InputBox
				id={id}
				name={name}
				checked={checked}
				onChange={onChangeCB}
				type='checkbox'
			/>
		</Cont>
	);
}
