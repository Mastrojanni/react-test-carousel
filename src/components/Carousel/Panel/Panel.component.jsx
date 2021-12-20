//style (styled component)
import {
    PanelContainer,
    Title,
} from './Panel.style';


const Panel = ({
        title,
        children
    }) => {

    return (
        <PanelContainer>
            <Title>{title}</Title>

            {children}
        </PanelContainer>
    );
};

export default Panel;
