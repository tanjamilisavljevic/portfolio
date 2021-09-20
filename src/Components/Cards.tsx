import React, {useState} from 'react';
import BirthdayGirl from "../birthday-girl.png";
import BirthdayGirl2 from "../birthday-girl2.png";
import BirthdayCard from "../birthday-card.png";
import Phone from "../phone.png";

function Cards() {


    return (
        <div>
            <div className="cardWrapper">

                <div className='card' id='card1'>
                    <a id='card1'>
                    <h4> Get to know me here </h4>
                    <p> This is dummy text. This is dummy text. This is dummy text.</p>
                    </a>
                </div>

                <img className='rightImg' src={BirthdayGirl}/>

                <div className='card' id='card2'>
                    <a id='card2'>
                    <h4> See my work here </h4>
                    <p> This is dummy text. This is dummy text. This is dummy text.</p>
                    </a>
                </div>

                <img className='leftImg' src={BirthdayCard}/>


                <div className='card' id='card3'>
                    <a id='card3'>
                    <h4> Let's get in touch! </h4>
                    <p> This is dummy text. This is dummy text. This is dummy text.</p>
                    </a>
                </div>

                <img className='rightImg' src={Phone}/>

            </div>
        </div>
    );
}

export default Cards;