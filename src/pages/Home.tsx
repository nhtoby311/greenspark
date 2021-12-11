import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import styled from 'styled-components'


export default function Home(){
    const { loading, error, value } = useFetch(
        `https://getgreenspark.mocklab.io/products`,
        {},
        []
      )

    return (
        <>
            {}
        </>
    )
}