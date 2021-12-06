import { useState } from 'react';

// components
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow';
import Panel from './Panel/Panel';

// style
import './Carousel.scss';


const Carousel = () => {

    const [panelIndex, setPanelIndex] = useState(0);

    const onPrevArrowClick = () => {

        setPanelIndex((prevState) => {
            if (prevState === 0) return 2;
            return --prevState;
        });
    };

    const onNextArrowClick = () => {

        setPanelIndex((prevState) => {
            if(prevState === 2) return 0;
            return ++prevState;
        });
    };

    return (
        <div className="carousel__container">
            <ButtonArrow face='left' onClick={onPrevArrowClick} />

            <Panel active={panelIndex === 0} />
            <Panel active={panelIndex === 1} />
            <Panel active={panelIndex === 2} />

            <ButtonArrow face='right' onClick={onNextArrowClick} />
        </div>
    );
};

export default Carousel;
