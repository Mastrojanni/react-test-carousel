import './ButtonArrow.scss';


const ButtonArrow = ({
        faceTo,
        onClick,
        disabled,
    }) => {

    let suppClass = ' face--right';

    const arrowOnClickHandler = () => {
        onClick();
    };
    
    if (faceTo === 'left') {
        suppClass = ' face--left';
    }

    if (disabled || !onClick) {
        return (
            <button
                className={'button-arrow__container' + suppClass}
                disabled={disabled}
            >
                <div className={'arrow__container' + suppClass}>
                    <div className='arrow__line' />
                    <div className='arrow__line' />
                </div>
            </button>
        );
    }
    
    return (
        <button
            className={'button-arrow__container pointer--active' + suppClass}
            onClick={arrowOnClickHandler}
            disabled={disabled}
        >
            <div className={'arrow__container' + suppClass}>
                <div className='arrow__line' />
                <div className='arrow__line' />
            </div>
        </button>
    );
};

export default ButtonArrow;
