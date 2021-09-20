import './App.css';
import React, {useEffect, useState} from "react";
import Cards from "./Components/Cards";

function App() {

    const [counter, setCounter] = useState(3);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    if (counter === 0) {
        return (
            <div className='App'>
                <header>
                    <a className='headerLink' href='#card1'> About Me </a>
                    <a className='headerLink' href='#card2'> My Projects </a>
                    <a className='headerLink' href='#card3'> Contact </a>
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
