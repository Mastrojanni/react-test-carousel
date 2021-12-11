// components
import Carousel from './components/Carousel/Carousel'

// style
import './App.scss';
import './main.scss';


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
        <div className="app__container">

            <header className='app__header'>
                <h1 className='app__title'>Carousel Test</h1>
            </header>

            <main className='app__main'>
                <section>
                    <Carousel panelsContent={CAROUSEL_PANEL_CONTENT} />
                </section>
            </main>

            <footer></footer>

        </div>
    );
}

export default App;
