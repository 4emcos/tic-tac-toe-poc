import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #e0e1dd;
        overflow-x: hidden;
        overflow-y: hidden;
    }

`;

export { GlobalStyle };
