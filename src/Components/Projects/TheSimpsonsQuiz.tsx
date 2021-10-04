import React from 'react';

function TheSimpsonsQuiz() {
    return (
        <div>
            <div className='project' id='simpsons'>
                <p> Made using React with TypeScript.
                    Take a look at the finished product <a className='contactLink'
                                                           href='https://affectionate-jepsen-1d70e3.netlify.app/' target="_blank"> here</a>,
                    or my code <a className='contactLink'
                                  href='https://github.com/tanjamilisavljevic/the-impossible-quiz' target="_blank"> here</a>.
                    <div className='projectButtonWrapper'>
                        <a className='projectButton'  href='https://affectionate-jepsen-1d70e3.netlify.app/' target="_blank">Play now</a>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default TheSimpsonsQuiz;