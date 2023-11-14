import styled from 'styled-components';

const Cont = styled.div`
	position: relative;
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
	width: 38px;
	border-radius: 11px;
	outline: none;
	position: relative;
	margin: 0;
	cursor: pointer;
	background: var(--b, var(--background));
	border: 0.683608px solid #afc6bd;
	box-shadow: inset 0px 1.02541px 6.83608px rgba(0, 0, 0, 0.15);
	transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 4px;
		height: 8px;
		border-top: 0;
		border-left: 0;
		left: 5px;
		top: 2px;
		transform: rotate(45deg);
		z-index: 5;
		transition: transform 0.6s, opacity 0.2s;
	}

	&:checked {
		--b: var(--active);
		--bc: var(--active);
		--ab: var(--active-inner);
		--x: 17px;
	}

	&:before {
		content: '';
		display: block;
		position: absolute;
		left: -7px;
		top: -7px;
		border-radius: 50%;
		width: 31px;
		height: 31px;
		background: var(--ab, #afc6bd);
		opacity: 0;
		transform: translateX(var(--x, 0));
		transition: transform 0.6s, opacity 0.4s;
	}

	&:hover:before {
		opacity: 0.5;
	}

	&:after {
		left: 0px;
		top: -1px;
		border-radius: 50%;
		width: 17px;
		height: 17px;
		border: 0.683608px solid #afc6bd;
		background: var(--ab, #f9f9f9);
		transform: translateX(var(--x, 0));
	}

	&:disabled {
		&:not(:checked) {
			&:after {
				opacity: 0.6;
			}
		}
	}
`;

export default function CheckBoxSwitch() {
	return (
		<Cont>
			<InputBox type='checkbox'></InputBox>
		</Cont>
	);
}
