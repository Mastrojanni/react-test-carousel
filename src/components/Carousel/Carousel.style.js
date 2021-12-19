import styled, { css } from 'styled-components/macro';

import { CenterToLeft, CenterToRight, CenterToTop } from '../../style/layout.style';


export const CarouselContainer = styled.div`

    display: inline-block;

    position: relative;

    // width: 100%;
    // height: 100vh;
`;

export const LeftArrowContainer = styled(CenterToLeft)``;

export const RightArrowContainer = styled(CenterToRight)``;

export const NavBulletsContainer = styled(CenterToTop)`

    margin: 5px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
