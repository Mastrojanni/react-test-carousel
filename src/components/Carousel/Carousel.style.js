import styled, { css } from 'styled-components/macro';

import { CenterToLeft, CenterToRight, CenterToTop } from '../../style/layout.style';


export const CarouselContainer = styled.div`

    display: inline-block;

    width: 100%;
    height: 100%;

    position: relative;     // !important for layout!

    // for testing
    // width: 100%;
    // height: 100vh;
`;

export const CarouselMain = styled.div`

    display: inline-block;
    width: 100%;
`;

export const LeftArrowContainer = styled(CenterToLeft)``;

export const RightArrowContainer = styled(CenterToRight)``;

export const NavBulletsContainer = styled.div`

    margin: 5px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row;

    gap: ${({ gap }) => gap ?? '5px'};

    font-size: ${({ bulletSize }) => bulletSize ?? '16px'};
`;

export const NavBullets = styled.span`

    display: inline-block;

    width: 1em;
    height: 1em;

    background: none;
    border: 2px solid rgb(60, 60, 60);
    border-radius: 3em;

    cursor: pointer;

    transition: all 150ms ease-in-out;

    ${({ active }) => active && css`

        width: 1.5em;
        height: 0.625em;

        box-shadow: inset 0 0 1.25em rgb(60, 60, 60);

        cursor: default;
    `}
`;

export const PanelsContainer = styled.div`

    display: inline-block;
`;
