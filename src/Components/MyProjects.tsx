import React, {useState} from 'react';

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
    const Simpsons = () => (
        <div className='project' id='simpsons'>
            <p className='projectTitle'> The Simpsons Quiz </p>
            <p> Made using React with TypeScript.
                Take a look at the finished product <a className='contactLink'
                                                       href='https://affectionate-jepsen-1d70e3.netlify.app/'> here </a>,
                or my code <a className='contactLink'
                              href='https://github.com/tanjamilisavljevic/the-impossible-quiz'> here </a>.
            </p>
        </div>
    )
    const handleWebshop = () => {
        setDisplaySimpsons(false)
        setDisplayWeather(false)
        setDisplayRock(false)
        setDisplayWebshop(true)
    }
    const Webshop = () => (
        <div className='project' id='webshop'>
            <p className='projectTitle'> Fake Webshop </p>
            <p> Made using React in collaboration with a fellow student.
                Take a look at the finished product <a className='contactLink'
                                                       href='https://determined-lichterman-67b53e.netlify.app/'> here </a>,
                or the code <a className='contactLink'
                               href='https://github.com/tanjamilisavljevic/ecommerce-with-react'> here </a>.
            </p>
        </div>
    )

    const handleWeather = () => {
        setDisplaySimpsons(false)
        setDisplayWebshop(false)
        setDisplayRock(false)
        setDisplayWeather(true)
    }
    const Weather = () => (
        <div className='project' id='webshop'>
            <p className='projectTitle'> Weather App</p>
            <p> One of my first projects made with plain JavaScript, using an API.
                Take a look at the finished product <a className='contactLink'
                                                       href='https://tanjamilisavljevic.github.io/weather-app/'>
                    here </a>, or the code
                <a className='contactLink' href='https://github.com/tanjamilisavljevic/weather-app'> here </a>.
            </p>
        </div>
    )
    const handleRock = () => {
        setDisplaySimpsons(false)
        setDisplayWebshop(false)
        setDisplayWeather(false)
        setDisplayRock(true)
    }
    const Rock = () => (
        <div className='project' id='webshop'>
            <p className='projectTitle'> Rock-Paper-Scissors </p>
            <p> One of my first projects made with plain JavaScript. This is the moment I fell in love with front-end
                development.
                Take a look at the finished product <a className='contactLink'
                                                       href='https://tanjamilisavljevic.github.io/rock-paper-scissors/'>
                    here </a>, or the code
                <a className='contactLink' href='https://github.com/tanjamilisavljevic/rock-paper-scissors'> here </a>.
            </p>
        </div>
    )


    return (
        <div className='projectWrapper'>
            <ul>
                <li onClick={handleSimpsons} className={displaySimpsons ? 'liActive' : 'notActive'}>The Simpsons Quiz
                </li>
                <hr/>
                <li onClick={handleWebshop} className={displayWebshop ? 'liActive' : 'notActive'}>Fake Webshop</li>
                <hr/>
                <li onClick={handleWeather} className={displayWeather ? 'liActive' : 'notActive'}>Weather App</li>
                <hr/>
                <li onClick={handleRock} className={displayRock ? 'liActive' : 'notActive'}>Rock-Paper-Scissors</li>
            </ul>
            {displaySimpsons ? <Simpsons/> : null}
            {displayWebshop ? <Webshop/> : null}
            {displayWeather ? <Weather/> : null}
            {displayRock ? <Rock/> : null}
        </div>
    );
}

export default MyProjects;