import { useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Cont = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding : 24px 16px;
    width: 250px;
    align-items:center;
    background: #FFFFFF;
    box-shadow: 0px 42px 76px rgba(0, 0, 0, 0.05), 0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963), 0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704), 0px 8.4px 12.35px rgba(0, 0, 0, 0.025), 0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296), 0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);
    border-radius: 4px;
    z-index:10;
    gap: 23px;
    left: -120px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
`

const Text = styled.p`
    font-size: 14px;
    color: #212121; 
    text-align: center;
`

const CusLink = styled(Link)`
    color: #3B755F;
    text-decoration: none;
    font-weight: 600;
`

type Props = {
    forwardRef: any;
}

export default function TooltipsWindow(props:Props){
    return(
        <Cont ref={props.forwardRef}>
            <Text>This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.</Text>
            <CusLink to="/">View Public Profile</CusLink>
        </Cont>
    )
}