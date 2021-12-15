import './Panel.scss';

const Panel = ({
        isActive,
        title,
        children
    }) => {

    let suppClass = isActive ? ' active' : '';

    return (
        <div className={'panel__container' + suppClass}>
            
            <div className="title">
                {title}
            </div>

            {children}
        </div>
    );
};

export default Panel;
