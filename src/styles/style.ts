import { createGlobalStyle } from "styled-components";
import "./style.css"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Cabin', sans-serif;
    }
 `

export default GlobalStyle