import React, {useState} from 'react';
import TheSimpsonsQuiz from "./TheSimpsonsQuiz";
import FakeWebshop from "./FakeWebshop";
import WeatherApp from "./WeatherApp";
import RockPaperScissors from "./RockPaperScissors";

function MyProjects() {
    const [displaySimpsons, setDisplaySimpsons] = useState(false)
    const [displayWebshop, setDisplayWebshop] = useState(false)
    const [displayWeather, setDisplayWeather] = useState(false)
    const [displayRock, setDisplayRock] = useState(false)

    const handleSimpsons = () => {
        setDisplaySimpsons(true)
        setDisplayWebshop(false)
        setDisplayWeather(false)
        setDisplayRock(false)
    }
    const handleWebshop = () => {
        setDisplaySimpsons(false)
        setDisplayWeather(false)
        setDisplayRock(false)
        setDisplayWebshop(true)
    }

    const handleWeather = () => {
        setDisplaySimpsons(false)
        setDisplayWebshop(false)
        setDisplayRock(false)
        setDisplayWeather(true)
    }
    const handleRock = () => {
        setDisplaySimpsons(false)
        setDisplayWebshop(false)
        setDisplayWeather(false)
        setDisplayRock(true)
    }

    return (
        <div className='projectWrapper'>
            <ul>
                <li onClick={handleSimpsons} className={displaySimpsons ? 'liActive' : ''}>The Simpsons Quiz
                </li>
                <hr/>
                <li onClick={handleWebshop} className={displayWebshop ? 'liActive' : ''}>Fake Webshop</li>
                <hr/>
                <li onClick={handleWeather} className={displayWeather ? 'liActive' : ''}>Weather App</li>
                <hr/>
                <li onClick={handleRock} className={displayRock ? 'liActive' : ''}>Rock-Paper-Scissors</li>
            </ul>
            {displaySimpsons ? <TheSimpsonsQuiz/> : null}
            {displayWebshop ? <FakeWebshop/> : null}
            {displayWeather ? <WeatherApp/> : null}
            {displayRock ? <RockPaperScissors/> : null}
        </div>
    );
}

export default MyProjects;