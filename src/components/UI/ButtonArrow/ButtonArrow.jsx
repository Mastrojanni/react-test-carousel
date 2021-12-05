import './ButtonArrow.scss';


const ButtonArrow = ({
        face,
        onClick,
        disabled,
    }) => {

    let arrowClassName = 'arrow__content ';
    let suppClass = 'face--right';

    const arrowOnClickHandler = () => {
        onClick();
    };
    
    if (face === 'left') {
        suppClass = 'face--left';
    }

    arrowClassName += suppClass;

    if (!onClick) {

        return (
            <button className='arrow__container' disabled={disabled}>
                <div className={arrowClassName} />
            </button>
        );
    }
    
    return (
        <button
            className='arrow__container pointer--active'
            onClick={arrowOnClickHandler}
            disabled={disabled}
        >
            <div className={arrowClassName} />
        </button>
    );
};

export default ButtonArrow;
