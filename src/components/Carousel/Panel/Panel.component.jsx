//style (styled component)
import {
    PanelContainer,
    Title,
} from './Panel.style';


const Panel = ({
        isVisible,
        title,
        children
    }) => {

    return (
        <PanelContainer isVisible={isVisible}>
            <Title>{title}</Title>

            {children}
        </PanelContainer>
    );
};

export default Panel;
