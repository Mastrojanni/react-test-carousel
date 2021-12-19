import { useState } from "react";

// components
import ButtonArrow from "./ButtonArrow/ButtonArrow";
import Panel from "./Panel/Panel";

// style
import "./Carousel.scss";


const Carousel = ({
        panelsContent
    }) => {

    const [currPanelVisible, setCurrPanelVisible] = useState(0);

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

    return (
        <div className='carousel__container'>

            <div className="carousel__header">

                <div className="nav-bullet__container">

                    {panelsContent.map((panel, index) => {
                        const suppClass = (currPanelVisible === index) ? ' active' : '';

                        return (
                            <div
                                key={'carousel_bullet_' + index}
                                className={'bullet' + suppClass}
                                onClick={() => {
                                    setCurrPanelVisible(index);
                                }}
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
                            isActive={currPanelVisible === index}
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
