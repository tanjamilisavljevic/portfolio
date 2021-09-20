import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/about-me" className='AboutMe'> About Me </Link>
          <Link to="/projects" className='Projects'> My Projects </Link>
          <Link to="/contact" className='Contact'> Contact </Link>
          <Switch>
            <Route path="/about-me" component={AboutMe}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
