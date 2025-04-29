import './App.css'
import { Hero } from "./components/hero"
import { MovieMakers } from './components/movieMakers';
import { TechList } from './components/techList';
import { TimeLine } from './components/timeline';
// import { Router } from './router/routing.tsx';

function App() {
    return (
        <div>
            <div className='background'></div>
            <title>Move Analysis - SM: ATSV</title>
            <Hero />
            <TechList />
            <TimeLine />
            <MovieMakers />
        </div>
    );
}

export default App
