import React, {useState} from 'react';
import BirthdayGirl from "../birthday-girl.png";
import BirthdayGirl2 from "../birthday-girl2.png";
import BirthdayCard from "../birthday-card.png";
import BirthdayCard2 from "../birthday-card2.png";
import Phone from "../phone.png";
import Phone2 from "../phone2.png";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
// @ts-ignore
import Obfuscate from "react-obfuscate"

function Cards() {

    const [girlPicture, setGirlPicture] = useState(BirthdayGirl)
    const [cardPicture, setCardPicture] = useState(BirthdayCard)
    const [phonePicture, setPhonePicture] = useState(Phone)

    const changePicture = () => {
        if (girlPicture === BirthdayGirl) {
            setGirlPicture(BirthdayGirl2)
        } else {
            setGirlPicture(BirthdayGirl)
        }
    }

    const changeCard = () => {
        if (cardPicture === BirthdayCard) {
            setCardPicture(BirthdayCard2)
        } else {
            setCardPicture(BirthdayCard)
        }
    }

    const changePhone = () => {
        if (phonePicture === Phone) {
            setPhonePicture(Phone2)
        } else {
            setPhonePicture(Phone)
        }
    }

    return (
        <div>
            <div className="cardWrapper">

                <div className='card' id='about-me'>
                    <a id='card1'>
                        <h4> Get to know me </h4>
                        <AboutMe/>
                    </a>
                </div>


                <img className='rightImg' id='girl' onClick={changePicture} src={girlPicture} alt='a smiling girl'/>

                <div className='card' id='my-projects'>
                    <a id='card2'>
                        <h4> See my work </h4>
                        <MyProjects/>
                    </a>
                </div>

                <img className='leftImg' id='birthdayCard' onClick={changeCard} src={cardPicture} alt='a card'/>


                <div className='card' id='contact'>
                    <div id='card3'>
                        <h4> Let's get in touch! </h4>
                        <p>
                            Connect with me on
                            <Obfuscate className='contactLink'
                               href='https://www.linkedin.com/in/tanja-milisavljevic-5444a8212/'
                               target="_blank"> LinkedIn</Obfuscate>
                            <br/>OR
                            <br/> <Obfuscate className='contactLink'
                                     href='https://github.com/tanjamilisavljevic' target="_blank"> GitHub</Obfuscate>
                            <br/>OR
                            <br/> <Obfuscate className='contactLink' href="mailto: tanjamilisavljevic7@gmail.com"
                                     target="_blank">email me</Obfuscate>
                            <br/>OR
                            <br/>
                            <Obfuscate className='contactLink' tel="+32456147888">call me </Obfuscate> during office hours!
                        </p>
                    </div>
                </div>

                <img className='rightImg' id='phone' onClick={changePhone} src={phonePicture} alt='a phone'/>

            </div>
        </div>
    );
}

export default Cards;