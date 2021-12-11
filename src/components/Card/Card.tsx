import styled from "styled-components"
import Logo from "../Logo/Logo"

const Box = styled.div`
    display: flex;
    flex-direction: column;
`
const TileBar = styled.div`
    display: flex;
    
    background: #2E3A8C;
    border-radius: 5.95489px;
`

const TextBar = styled.div`
    display: flex;
    flex-direction: column;

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


        </Box>
    )
}