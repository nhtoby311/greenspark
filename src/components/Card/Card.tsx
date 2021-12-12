import styled from "styled-components"
import CheckBox from "../CheckBox/CheckBox"
import CheckBoxColor from "../CheckBoxColor/CheckBoxColor"
import CheckBoxSwitch from "../CheckBoxSwitch/CheckBoxSwitch"
import Logo from "../Logo/Logo"
import { API } from "../../types/API"
import Tooltips from "../Tooltips/Tooltips"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const TileBar = styled.div<PropsTileBar>`
    display: flex;
    align-items: center;
    background: ${(props) => props.background};
    border-radius: 5.95489px;
    padding: 15px 15px;
    gap: 20px;
`

const TextBar = styled.div<PropsTitleBar>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: ${(props) => props.textColor === null ? "#F9F9F9" : props.textColor};
`

const FixedText = styled.p`
    font-size: 12.406px;
    //color: #F9F9F9;
`

const NumText = styled.h3`
    font-size: 17.8647px;
    //color: #F9F9F9;
    font-weight: bold;
`

const ContTools = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
`
const ToolsRow = styled.div`
    display : flex;
    justify-content: space-between;
`
const ToolsText = styled.p`
    font-size: 14px;
    color: #3B755F;
`

const Tools = styled.div`
    display: flex;
    gap: 4px;
`

type Props = {
    data : API | undefined
}

type PropsTileBar = {
    background: string | undefined
}

type PropsTitleBar = {
    textColor: string | undefined | null
}

export default function Card(props : Props){
    console.log(props.data)
    const carbonCaseTxt = props.data?.type === "carbon" ? "kgs of " : ""
    return (
        <Box>
            <TileBar background={props.data?.background}>
                <Logo textColor={props.data?.textColor}/>
                <TextBar textColor={props.data?.textColor}>
                    <FixedText>This product collects</FixedText>
                    <NumText>{props.data?.amount} {carbonCaseTxt} {props.data?.type}</NumText>
                </TextBar>
            </TileBar>
            
            <ContTools>
                <ToolsRow>
                    <div style={{display:'flex',gap:"2px"}}>
                        <ToolsText>Link to Public Profile</ToolsText>
                        <Tooltips/>
                    </div>
                    <Tools>
                        <CheckBox></CheckBox>
                    </Tools>
                </ToolsRow>
                <ToolsRow>
                    <ToolsText>Badge colour</ToolsText>
                    <Tools>
                        <CheckBoxColor bgColor="#2E3A8C"/>
                        <CheckBoxColor bgColor="#3B755F"/>
                        <CheckBoxColor bgColor="#F2EBDB"/>
                        <CheckBoxColor bgColor="#FFFFFF"/>
                        <CheckBoxColor bgColor="#212121"/>
                    </Tools>
                </ToolsRow>
                <ToolsRow>
                    <ToolsText>Activate badge</ToolsText>
                    <Tools>
                        <CheckBoxSwitch/>
                    </Tools>
                </ToolsRow>
            </ContTools>

        </Box>
    )
}