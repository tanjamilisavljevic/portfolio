import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import BirthdayCard from "./birthday-card.png";
import BirthdayGirl from "./birthday-girl.png";
import Phone from "./phone.png";

function App() {
    return (
        <div className='App'>

            <Router>
                <div className='header'>
                    <Link to='/about-me' className='headerLink'> About Me </Link>
                    <Link to='/projects' className='headerLink'> My Projects </Link>
                    <Link to='/contact' className='headerLink'> Contact </Link>
                    <Switch>
                        <Route path='/about-me' component={AboutMe}/>
                        <Route path='/projects' component={Projects}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                </div>
            </Router>

            <h1 className='mainTitle'> WELCOME </h1>

            <div className="cardWrapper">

                <div className='card' id='card1'>
                    <h4> Get to know me here </h4>
                    <p> This is dummy text. This is dummy text. This is dummy text.</p>
                    <a href='/src/Components/AboutMe.tsx'> Link to about me </a>
                </div>

                <img className='rightImg' src={BirthdayGirl}/>

                <div className='card' id='card2'>
                    <h4> See my work here </h4>
                    <p> This is dummy text. This is dummy text. This is dummy text.</p>
                    <a href='/src/Components/Projects.tsx'> Link to projects </a>
                </div>

                <img className='leftImg' src={BirthdayCard}/>


                <div className='card' id='card3'>
                    <h4> Let's get in touch! </h4>
                    <p> This is dummy text. This is dummy text. This is dummy text.</p>
                    <a href='/src/Components/Contact.tsx'> Link to contact </a>
                </div>

                <img className='rightImg' src={Phone}/>
            </div>
        </div>
    );
}

export default App;
