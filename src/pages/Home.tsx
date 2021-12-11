import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import styled from 'styled-components'
import Container from "../components/Container/Container"
import Card from "../components/Card/Card"
import { API } from "../types/API"

const Wrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const CardCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    margin-top : 25px; 
    gap: 50px;
`


export default function Home(){
    const [data,setData] = useState<API[] | undefined>()
    const { loading, error, value } = useFetch(
        `https://getgreenspark.mocklab.io/products`,
        {},
        []
      )

    const colorsBanner = ['#2E3A8C','#3B755F','#F2EBDB']
    const colorsText = [null,null,'#3B755F']

    useEffect(()=>{
        if (value !== undefined){
            let valueReal : API[] | never = value
            valueReal = valueReal.map( (e,ind) => {
                return {...e,
                    background: colorsBanner[ind],
                    textColor: colorsText[ind]
                }
            })
            setData(valueReal)
        }
    },[value])

    return (
        <Wrapper>
            <Container>
                <CardCont>
                    {data && data.map(e => <Card key={e.id.toString()} data={e}></Card>)}
                </CardCont>
            </Container>
        </Wrapper>  
    )
}