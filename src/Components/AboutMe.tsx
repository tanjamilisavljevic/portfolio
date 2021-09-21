import React from 'react';

function AboutMe() {
    return (
        <div>

            <div className='aboutMeTextTitle'>Hi! I'm <strong> Tanja Milisavljević </strong>, a web developer based in
                Ghent, Belgium.
            </div>
            <br/>
            <div className='aboutMeText'>
                I am a full stack developer, with a strong preference for front-end development and a passion for
                thoughtful UI design. Some technologies I've been working with recently are: JavaScript, React,
                Typescript, CSS (SASS).  I love collaborating and sharing knowledge!
                <a className='contactLink' href="mailto: tanjamilisavljevic7@gmail.com" target="_blank"> Say Hi</a>,
                and let's work together!
            </div>
                <br/>
            <div className='aboutMeText'>
                When I'm not coding, catch me baking vegan cookies or watching scary movies and cuddling with my dog,
                💖Lada💖
                on the couch.
            </div>
        </div>
    );
}

export default AboutMe;