import { Children, useState } from "react";

// components
import ButtonArrow from "../UI/ButtonArrow/ButtonArrow";
import Panel from "./Panel/Panel";

// style
import "./Carousel.scss";


const Carousel = ({
        panelsContent
    }) => {

    const [panelIndex, setPanelIndex] = useState(0);

    const panelsMaxLength = panelsContent.length - 1;

    const onPrevArrowClick = () => {
        setPanelIndex((prevState) => {
            if (prevState === 0) return panelsMaxLength;
            return --prevState;
        });
    };

    const onNextArrowClick = () => {
        setPanelIndex((prevState) => {
            if (prevState === panelsMaxLength) return 0;
            return ++prevState;
        });
    };

    return (
        <div className='carousel__container'>

            <ButtonArrow faceTo='left' onClick={onPrevArrowClick} />

            {panelsContent.map((panel, index)=>{
                return (
                    <Panel key={index} active={panelIndex === index} title={panel.title}>
                        {panel.text}
                    </Panel>
                );
            })}

            <ButtonArrow face='right' onClick={onNextArrowClick} />

        </div>
    );
};

export default Carousel;
