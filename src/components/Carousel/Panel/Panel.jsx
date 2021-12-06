import './Panel.scss';

const Panel = ({
        active,
    }) => {

    let suppClass = '';
    if (active) suppClass = ' active';

    return (
        <div className={'panel__container' + suppClass}>
            <h2>Panel 0</h2>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                magnam accusamus sed.
            </p>
        </div>
    );
};

export default Panel;
