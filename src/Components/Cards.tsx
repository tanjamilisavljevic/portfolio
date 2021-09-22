import React from 'react';
import BirthdayGirl from "../birthday-girl.png";
import BirthdayCard from "../birthday-card.png";
import Phone from "../phone.png";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";

function Cards() {


    return (
        <div>
            <div className="cardWrapper">

                <div className='card' id='about-me'>
                    <a id='card1'>
                        <h4> Get to know me </h4>
                        <AboutMe/>
                    </a>
                </div>

                <img className='rightImg' id='girl' src={BirthdayGirl}/>

                <div className='card' id='my-projects'>
                    <a id='card2'>
                        <h4> See me work </h4>
                        <MyProjects/>
                    </a>
                </div>

                <img className='leftImg' id='birthdayCard' src={BirthdayCard}/>


                <div className='card' id='contact'>
                    <a id='card3'>
                        <h4> Let's get in touch! </h4>
                        <p> Connect with me on
                            <a className='contactLink'
                               href='https://www.linkedin.com/in/tanja-milisavljevic-5444a8212/'> LinkedIn</a>
                            <br/>OR
                            <br/> <a className='contactLink'
                               href='https://github.com/tanjamilisavljevic'> GitHub</a>
                            <br/>OR
                            <br/> <a className='contactLink' href="mailto: tanjamilisavljevic7@gmail.com"
                                     target="_blank">email me</a>
                            <br/>OR
                            <br/><a className='contactLink' href="tel:+32456147888"> call me </a> during office hours!
                        </p>
                    </a>
                </div>

                <img className='rightImg' id='phone' src={Phone}/>

            </div>
        </div>
    );
}

export default Cards;