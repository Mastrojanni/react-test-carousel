import './ButtonArrow.scss';


const ButtonArrow = ({
        faceTo,
        onClick,
        disabled,
    }) => {

    let arrowClassName = 'arrow__content ';
    let suppClass = 'face--right';

    const arrowOnClickHandler = () => {
        onClick();
    };
    
    if (faceTo === 'left') {
        suppClass = 'face--left';
    }

    arrowClassName += suppClass;

    if (disabled || !onClick) {

        return (
            <button className='button-arrow__container' disabled={disabled}>
                <div className='arrow__container'>
                    <div className={arrowClassName} />
                </div>
            </button>
        );
    }
    
    return (
        <button
            className='button-arrow__container pointer--active'
            onClick={arrowOnClickHandler}
            disabled={disabled}
        >
            <div className='arrow__container'>
                <div className={arrowClassName} />
            </div>
        </button>
    );
};

export default ButtonArrow;
