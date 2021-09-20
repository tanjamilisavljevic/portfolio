import './App.css';
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import React, {useEffect} from "react";
import Cards from "./Components/Cards";

function App() {

    const [counter, setCounter] = React.useState(3);

    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    if (counter === 0) {
        return (
            <div className='App'>
                <header>
                    <a href='./Components/AboutMe.tsx'> About Me </a>
                    <a href='./Components/Projects.tsx'> My Projects </a>
                    <a href='./Components/Contact.tsx'> Contact </a>
                </header>
                <div className='titleWrapper'>
                    <h1 className='mainTitle'> WELCOME </h1>
                </div>
                <Cards/>
            </div>
        );
    } else {
        return <div className='counter'> {counter} </div>
    }
    ;

}

export default App;
