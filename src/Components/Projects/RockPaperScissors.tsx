import React from 'react';

function RockPaperScissors() {
    return (
        <div>
            <div className='project' id='webshop'>
                <p> One of my first projects made with plain JavaScript. This is the moment I fell in love with
                    front-end
                    development.
                    Take a look at the finished product <a className='contactLink'
                                                           href='https://tanjamilisavljevic.github.io/rock-paper-scissors/'
                                                           target="_blank">
                        here</a>, or the code
                    <a className='contactLink'
                       href='https://github.com/tanjamilisavljevic/rock-paper-scissors' target="_blank"> here</a>.
                    <div className='projectButtonWrapper'>
                        <a className='projectButton' href='https://tanjamilisavljevic.github.io/rock-paper-scissors/'
                           target="_blank">Play now</a>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default RockPaperScissors;