import styled from "styled-components"

const Cont = styled.div`
    position: relative;
    &:hover > div{
        opacity: 1;
    }
`

const InputBox = styled.input<Props>`
    --active-inner: #fff;
    --border: #212121;
    --border-hover: #3B755F;
    --background: ${(props) => props.bgColor};
    --disabled: #F6F8FF;
    --disabled-inner: #E1E6F9;
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
    transition: background .3s, border-color .3s, box-shadow .2s, transform 0.2s;

    &:checked {
      transform: scale(0.7);
    }


    &:hover{
        opacity: 1;
    }
    &:before{
        content: "";
        position: absolute;
        left: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ffffff48;
        opacity: 0;
        transition: opacity 0.2s;
    }

    &:hover:before{
        opacity: 1;
    }

`

const ShadowBox = styled.div`
    height: 19px;
    width: 19px;
    border-radius: 3px;
    left: 0;
    top: 0;
    position: absolute;
    background: #d1c2c2;
`

type Props = {
    bgColor: string;
};

export default function CheckBoxColor(props: Props){
    return (
        <Cont >
            <ShadowBox></ShadowBox>
            <InputBox className="input-checkbox-color" bgColor={props.bgColor} type="checkbox"></InputBox>
        </Cont>
    )
}