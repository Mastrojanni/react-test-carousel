// components

// style (styled components)
import { GlobalStyle } from './style/Global.style';
import {
    AppContainer,
    AppHeader,
    AppMain,
    AppFooter,
    AppTitle,
    AppSection
} from './App.style';


const CAROUSEL_PANEL_CONTENT = [
    {
        title: <h2>Panel 0</h2>,
        text: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae magnam accusamus sed.</p>,
    },
    {
        title: <h2>Panel 1</h2>,
        text: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae magnam accusamus sed.</p>,
    },
    {
        title: <h2>Panel 2</h2>,
        text: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae magnam accusamus sed.</p>,
    },
];


const App = () => {
    return (
        <>
            <GlobalStyle />

            <AppContainer>
                <AppHeader>
                    <AppTitle>Carousel Test</AppTitle>
                </AppHeader>

                <AppMain>
                    <AppSection></AppSection>
                </AppMain>

                <AppFooter></AppFooter>
            </AppContainer>
        </>
    );
}

export default App;
