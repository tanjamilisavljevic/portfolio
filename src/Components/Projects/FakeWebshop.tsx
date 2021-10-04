import React from 'react';

function FakeWebshop() {
    return (
        <div>
            <div className='project' id='webshop'>
                <p> Made using React in collaboration with a fellow student.
                    Take a look at the finished product <a className='contactLink'
                                                           href='https://determined-lichterman-67b53e.netlify.app/' target="_blank"> here</a>,
                    or the code <a className='contactLink'
                                   href='https://github.com/tanjamilisavljevic/ecommerce-with-react' target="_blank"> here</a>.
                    <div className='projectButtonWrapper'>
                    <a className='projectButton' href="https://determined-lichterman-67b53e.netlify.app/" target="_blank"> To the Bookshop</a>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default FakeWebshop;