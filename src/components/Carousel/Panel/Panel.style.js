import styled, { keyframes, css } from 'styled-components/macro';


const panelFadeIn = keyframes`

    from {

        opacity: 0;
    }

    to {

        opacity: 1;
    }
`;

export const PanelContainer = styled.div`

    min-width: 40px;
    max-width: 400px;

    min-height: 600px;

    font-size: ${({ fontSize }) => fontSize ?? '16px'};

    margin: 0;
    padding: 1.5em;

    background: rgba(255, 255, 255, 0.1);

    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: .5em;
    box-shadow: 10px 10px 10px rgba(45, 55, 68, 0.3);

    text-align: left;

    display: none;

    ${({ isVisible }) => isVisible && css`

        display: inline-block;
        animation: 200ms ${panelFadeIn} ease-out;
    `}
`;

export const Title = styled.div`

    & :first-child {

        margin: 0 0 20px;
    }
`;
