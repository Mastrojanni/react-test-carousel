import { Children, useState } from "react";

// components
import ButtonArrow from "./ButtonArrow/ButtonArrow";
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

            <div className="carousel__header">

                <div className="nav-bullet__container">

                    {panelsContent.map((panel, index) => {
                        const suppClass = (panelIndex === index) ? ' active' : '';

                        return (
                            <div
                                key={'carousel_bullet_' + index}
                                className={'bullet' + suppClass}
                            />
                        );
                    })}

                </div>

            </div>

            <div className="carousel__main">

                <ButtonArrow faceTo='left' onClick={onPrevArrowClick} />

                {panelsContent.map((panel, index)=>{
                    return (
                        <Panel
                            key={'carousel_panel_' + index}
                            isActive={panelIndex === index}
                            title={panel.title}
                        >
                            {panel.text}
                        </Panel>
                    );
                })}

                <ButtonArrow face='right' onClick={onNextArrowClick} />

            </div>

        </div>
    );
};

export default Carousel;
