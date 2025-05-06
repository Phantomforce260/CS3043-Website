import './App.css'
import { Chapters } from './components/chapters';
import { GroupWork } from './components/groupWork';
import { Hero } from "./components/hero"
import { MovieMakers } from './components/movieMakers';
import { TechList } from './components/techList';
import { TimeLine } from './components/timeline';
import {useRef} from "react";
import ComicButton from "./router/comicButton.tsx";
import {References} from './components/references';

function App() {
    const heroRef = useRef(null);
    const timelineRef = useRef(null);
    const techListRef = useRef(null);
    const chaptersRef = useRef(null);
    const movieMakersRef = useRef(null);
    const groupWorkRef = useRef(null);
    const referencesRef = useRef(null);

    const scrollToSection = (section : any) => {
        section.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className='background'></div>
            <title>Movie Analysis - SM: ATSV</title>
            <div style={{
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 10,
                display: "flex",
            }}>
                <ComicButton displayText={"Home"} clickFunction={() => scrollToSection(heroRef)}/>
                <ComicButton displayText={"Tech List"} clickFunction={() => scrollToSection(techListRef)}/>
                <ComicButton displayText={"Timeline"} clickFunction={() => scrollToSection(timelineRef)}/>
                <ComicButton displayText={"Chapters"} clickFunction={() => scrollToSection(chaptersRef)}/>
                <ComicButton displayText={"Movie Makers"} clickFunction={() => scrollToSection(movieMakersRef)}/>
                <ComicButton displayText={"Group Work"} clickFunction={() => scrollToSection(groupWorkRef)}/>
                <ComicButton displayText={"References"} clickFunction={() => scrollToSection(referencesRef)}/>
            </div>
            <div ref={heroRef}>
                <Hero/>
            </div>
            <div className="slideshow">
                <iframe className={"main"} src="https://1drv.ms/p/c/1dd6cff4559d638e/IQTb7e5gp80oTLMnrr2F-vqrAQCgh3yXTAZyjTz-FZVDWBY?wdAr=1.7777777777777777" width="1280px" height="720px" frameBorder="0">
                    This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
                </iframe>
            </div>
            <div ref={techListRef}>
                <TechList/>
            </div>
            <div ref={timelineRef}>
                <TimeLine/>
            </div>
            <div ref={chaptersRef}>
                <Chapters/>
            </div>
            <div ref={movieMakersRef}>
                <MovieMakers/>
            </div>
            <div ref={groupWorkRef}>
                <GroupWork/>
            </div>
            <div ref={referencesRef}>
                <References/>
            </div>
        </div>
    );
}

export default App
