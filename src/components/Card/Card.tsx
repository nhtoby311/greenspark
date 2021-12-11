import styled from "styled-components"
import Logo from "../Logo/Logo"

const Box = styled.div`
    display: flex;
    flex-direction: column;
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
`
const ToolsRow = styled.div`
    display : flex;
    justify-content: space-between;
`
const ToolsText = styled.p`
    font-size: 14px;
    color: #3B755F;
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
                    <div>
                        <input type="checkbox" />
                    </div>
                </ToolsRow>
                <ToolsRow>
                    <ToolsText>Badge colour</ToolsText>
                    <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </div>
                </ToolsRow>
                <ToolsRow>
                    <ToolsText>Activate badge</ToolsText>
                    <div>
                        <input type="checkbox" />
                    </div>
                </ToolsRow>
            </ContTools>

        </Box>
    )
}