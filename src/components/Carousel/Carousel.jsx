// components
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow';

// style
import './Carousel.scss';


const Carousel = () => {

    return (
        <div className="carousel__container">
            <ButtonArrow face='left' onClick={() => {}} />
            <ButtonArrow face='right' onClick={() => {}} />
        </div>
    );
};

export default Carousel;
