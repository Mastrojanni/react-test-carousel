import styled, { css } from 'styled-components/macro';

import { Column } from '../../style/layout.style';


export const ButtonArrow = styled.button`

    display: inline-block;

    font-size: 16px;

    margin: 0;
    padding: 1em 1.5em;

    background: none;
    border: none;
    border-radius: 12px;

    cursor: pointer;

    &:hover, &:active, &:focus {

        background: rgba(255, 255, 255, 0.25);
    }
    
    &:focus {

        outline: 2px solid #000;
    }

    &:active {

        transform: scale(0.98);

        box-shadow:
            inset 2px 2px 8px 0 rgba(0, 0, 0, 0.2),
            inset -2px -2px 8px 0 rgba(0, 0, 0, 0.2);
    }

    &:disabled {

        cursor: not-allowed;

        &:hover, &:active, &:focus {

            background: rgba(255, 255, 255, 0.2);

            transform: none;
            box-shadow: none;
        }
    }
`;

export const ArrowContainer = styled(Column)`

    align-items: center;
    justify-content: center;

    ${({ faceTo }) => {

        if(faceTo === 'left') return css`
    
            & :first-child {

                transform: translateY(4px) rotate(45deg);
            }

            & :last-child {

                transform: translateY(-4px) rotate(-45deg);
            }
        `

        if(faceTo === 'right') return css`

            & :first-child {

                transform: translateY(4px) rotate(-45deg);
            }

            & :last-child {

                transform: translateY(-4px) rotate(45deg);
            }
        `
    }}
`;

export const ArrowLine = styled.div`

    display: inline-block;

    width: 5px;
    height: 20px;

    background: #000;
`;
