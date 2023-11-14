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
	height: 20px;
	width: 38px;
	border-radius: 11px;
	outline: none;
	position: relative;
	margin: 0;
	cursor: pointer;
	background: var(--b, var(--background));
	border: 1px solid #afc6bd;
	box-shadow: inset 0px 1.02541px 6.83608px rgba(0, 0, 0, 0.15);
	transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

	&:after {
		content: '';
		display: block;
		position: absolute;

		left: 0;
		top: 0;
		border-radius: 50%;
		width: 17px;
		height: 17px;
		border: 1px solid #afc6bd;
		background: var(--ab, #f9f9f9);
		transform: translateX(var(--x, 0));
		transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
	}

	&:checked {
		--b: var(--active);
		--bc: var(--active);
		--ab: var(--active-inner);
		--x: 100%;
	}

	/* &:before {
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
	} */

	&:disabled {
		&:not(:checked) {
			&:after {
				opacity: 0.6;
			}
		}
	}
`;

type Props = {
	id?: string;
	name?: string;
	checked?: boolean;
	onChangeCB?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckBoxSwitch({
	id,
	name,
	checked,
	onChangeCB,
}: Props) {
	return (
		<Cont>
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
