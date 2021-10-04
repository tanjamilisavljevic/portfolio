import React from 'react';

function WeatherApp() {
    return (
        <div>
            <div className='project' id='webshop'>
                <p> One of my first projects made with plain JavaScript, using an API.
                    Take a look at the finished product <a className='contactLink'
                                                           href='https://tanjamilisavljevic.github.io/weather-app/' target="_blank">
                        here</a>, or the code
                    <a className='contactLink' href='https://github.com/tanjamilisavljevic/weather-app' target="_blank"> here</a>.
                    <div className='projectButtonWrapper'>
                        <a className='projectButton' href='https://tanjamilisavljevic.github.io/weather-app/'
                           target="_blank">Check the weather</a>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default WeatherApp;