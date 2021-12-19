import styled from 'styled-components/macro';


export const AppContainer = styled.div`

    font-size: 16px;

    min-width: 320px;
    max-width: 1920px;

    min-height: 100vh;

    background: rgb(115, 115, 115);

    display: none;

    @media screen and (min-width:320px) {

        display: block;
    }

    @media screen and (min-width: 1920px) {

        margin: 0 auto;
    }
`;

export const AppHeader = styled.header`

    max-height: 40%;

    padding: 20px;

    text-align: center;

    @media screen and (min-width: 768px) {

        padding: 1.5%;
    }
`;

export const AppMain = styled.main`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AppFooter = styled(AppHeader)``;

export const AppTitle = styled.h1`

    margin: 0;
`;

export const Section = styled.section`

    width: 100%;
    max-width: 85%;

    margin: 20px auto 0;

    padding: 20px;

    border: 1px solid #000;

    @media screen and (min-width: 768px) {

        margin: 1.5% auto;

        padding: 2.5% 1.5%;
    }
`;
