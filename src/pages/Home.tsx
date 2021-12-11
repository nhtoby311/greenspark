import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import styled from 'styled-components'
import Container from "../components/Container/Container"
import Card from "../components/Card/Card"

const Wrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`


export default function Home(){
    const { loading, error, value } = useFetch(
        `https://getgreenspark.mocklab.io/products`,
        {},
        []
      )

    return (
        <Wrapper>
            <Container>
                <Card></Card>
            </Container>
        </Wrapper>  
    )
}