// components
import Carousel from './components/Carousel/Carousel'

// style
import './App.scss';
import './main.scss';


const App = () => {

    return (
        <div className="app__container">

            <header className='app__header'>
                <h1 className='app__title'>Carousel Test</h1>
            </header>

            <main className='app__main'>
                <section>
                    <Carousel />
                </section>
            </main>

            <footer></footer>

        </div>
    );
}

export default App;
