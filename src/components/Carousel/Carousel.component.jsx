import { useState } from "react";

// components

// style (styled components)
import {
    CarouselContainer,
    LeftArrowContainer,
    RightArrowContainer,
    NavBulletsContainer,
    NavBullets
} from './Carousel.style';

import {
    ButtonArrow,
    ArrowContainer,
    ArrowLine
} from "./ButtonArrow.style";


const Carousel = ({
        panelsContent
    }) => {

    const [currPanelVisible, setCurrPanelVisible] = useState(1);

    const maxLenghtOfPanels = panelsContent.length - 1;

    const onPrevArrowClick = () => {
        setCurrPanelVisible((prevState) => {
            if (prevState === 0) return maxLenghtOfPanels;
            return --prevState;
        });
    };

    const onNextArrowClick = () => {
        setCurrPanelVisible((prevState) => {
            if (prevState === maxLenghtOfPanels) return 0;
            return ++prevState;
        });
    };

    const onBulletClick = index => () => {  // yuk!
        setCurrPanelVisible(index);
    };

    return (
        <CarouselContainer>

            <LeftArrowContainer>

                <ButtonArrow>
                    <ArrowContainer faceTo='left'>
                        <ArrowLine />
                        <ArrowLine />
                    </ArrowContainer>
                </ButtonArrow>

            </LeftArrowContainer>

            <NavBulletsContainer>
                {panelsContent.map((panel, index) => {
                    return (
                        <NavBullets
                            key={'CAROUSEL_BULLET_' + index}
                            active={currPanelVisible === index}
                            onClick={onBulletClick(index) }
                        />
                    );
                })}
            </NavBulletsContainer>

            <RightArrowContainer>

                <ButtonArrow>
                    <ArrowContainer faceTo='right'>
                        <ArrowLine />
                        <ArrowLine />
                    </ArrowContainer>
                </ButtonArrow>
            </RightArrowContainer>

        </CarouselContainer>
    );
};

export default Carousel;
