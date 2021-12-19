import { useState } from "react";

// components
import ButtonArrow from "./ButtonArrow/ButtonArrow";
import Panel from "./Panel/Panel";

// style (styled components)
import "./Carousel.scss";


const Carousel = ({
        panels
    }) => {

    const [currPanelIndex, setCurrPanelIndex] = useState(0);

    const panelsMaxNumber = panels.length - 1;

    const onPrevArrowClick = () => {
        setCurrPanelIndex((prevState) => {
            if (prevState === 0) return panelsMaxNumber;
            return --prevState;
        });
    };

    const onNextArrowClick = () => {
        setCurrPanelIndex((prevState) => {
            if (prevState === panelsMaxNumber) return 0;
            return ++prevState;
        });
    };

    return (
        
    );
};

export default Carousel;
