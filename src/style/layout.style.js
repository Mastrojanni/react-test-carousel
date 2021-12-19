import styled from 'styled-components/macro';


/* FLEX-BOX */
export const Row = styled.div`

    display: flex;

    flex-direction: row;
`;

export const Column = styled.div`

    display: flex;

    flex-direction: column;
`;

/* POSITION ABSOLUTE */
export const CenterToTop = styled.div`

    display: inline-block;

    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%);
`;

export const CenterToRight = styled.div`

    display: inline-block;

    position: absolute;
    top: 50%;
    right: 0;

    transform: translateY(-50%);
`;

export const CenterToLeft = styled.div`

    display: inline-block;

    position: absolute;
    top: 50%;
    left: 0;

    transform: translateY(-50%);
`;

export const CenterToBottom = styled.div`

    display: inline-block;

    position: absolute;
    bottom: 0;
    left: 50%;

    transform: translateX(-50%);
`;

export const PlaceToCenter = styled.div`

    display: inline-block;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`;
