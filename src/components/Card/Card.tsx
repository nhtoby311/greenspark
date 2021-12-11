import styled from "styled-components"
import CheckBox from "../CheckBox/CheckBox"
import CheckBoxColor from "../CheckBoxColor/CheckBoxColor"
import Logo from "../Logo/Logo"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const TileBar = styled.div`
    display: flex;
    align-items: center;
    background: #2E3A8C;
    border-radius: 5.95489px;
    padding: 15px 15px;
    gap: 20px;
`

const TextBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

`

const FixedText = styled.p`
    font-size: 12.406px;
    color: #F9F9F9;
`

const NumText = styled.h3`
    font-size: 17.8647px;
    color: #F9F9F9;
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

export default function Card(){
    return (
        <Box>
            <TileBar>
                <Logo/>
                <TextBar>
                    <FixedText>This product collects</FixedText>
                    <NumText>100 plastic bottles</NumText>
                </TextBar>
            </TileBar>
            
            <ContTools>
                <ToolsRow>
                    <ToolsText>Link to Public Profile</ToolsText>
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
                        <input type="checkbox" />
                    </Tools>
                </ToolsRow>
            </ContTools>

        </Box>
    )
}