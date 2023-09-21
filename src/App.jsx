import './App.css';
import { BsGithub } from "react-icons/bs";
import Gmaps from './Components/Maps/gmaps';
import { BsArrowUpCircle } from "react-icons/bs";
import Showbus from './Components/BusfilterPage/showbus';
import LandingPage from './Components/LandingPage/Header/landingpage';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  // Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="navbar">
        <a href="http://localhost:3000">
          <h1>Navigate<span>Xperts</span></h1>
        </a>
        <a href='https://github.com/anshu189/navigatexperts' rel='noreferrer' target='_blank' className='github-icon-a'>
          <BsGithub className='navbar-icon' />
        </a>
      </div>

      {/* <SearchLocationInput className="maps"/> */}

      {/* Define all the routes here then use it in application anywhere. */}
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}></Route>  
          <Route exact path="/buses" element={<Showbus/>}/><Route/>
          <Route exact path="/track" element={<Gmaps/>}/><Route/>
        </Routes>
      </Router>

      {/* Footer */}
      <div className="main-footer">
        <div className="sub-footer">
          <p><span>Powered by  </span>NavigateXperts</p>
        </div>
        <div className="sub-footer">
          <BsArrowUpCircle className='to-top-icon' onClick={scrollToTop}/>
          <div className="to-top" onClick={scrollToTop}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
