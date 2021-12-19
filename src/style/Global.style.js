import { createGlobalStyle } from 'styled-components/macro';


export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {

        box-sizing: border-box;
    }

    html, body {

        min-width: 100%;
        min-height: 100%;

        margin: 0;
        padding: 0;

        background: #FFF;
        color: #000;

        font-size: 16px;
        text-align: left;
    }

    body {

        font-family: sans-serif;

        background: rgb(128, 128, 128);
    }
`;
