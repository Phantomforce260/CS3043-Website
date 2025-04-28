import './App.css'
import { Hero } from "./components/hero"
import { TechList } from './components/techList';
// import { Router } from './router/routing.tsx';

function App() {
    return (
        <div>
            <div className='background'></div>
            <title>Move Analysis - SM: ATSV</title>
            <Hero />
            <TechList />
        </div>
    );
}

export default App
