import './Panel.scss';

const Panel = ({
        active,
        title,
        children
    }) => {

    let suppClass = active ? ' active' : '';

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
