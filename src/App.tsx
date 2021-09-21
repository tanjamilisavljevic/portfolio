import './App.css';
import React, {useEffect, useState} from "react";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {

    const [counter, setCounter] = useState(2);

    useEffect(() => {
        const myTimer :any =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return ()  => clearInterval(myTimer);
    }, [counter]);


    if (counter === 0) {
        return (
            <div className='App'>
                <header>
                    <a className='headerLink' href='#about-me'> About Me </a>
                    <a className='headerLink' href='#my-projects'> My Projects </a>
                    <a className='headerLink' href='#contact'> Contact </a>
                </header>
                <div className='titleWrapper'>
                    <h1> WELCOME </h1>
                </div>
                <Cards/>
                <Footer/>
            </div>
        );
    } else {
        return <div className='counter'> {counter} </div>
    }
    ;

}

export default App;
