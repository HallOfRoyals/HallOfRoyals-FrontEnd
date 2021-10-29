import socialIconOne from '../static/images/social-icon1.svg';
import socialIconTwo from '../static/images/social-icon2.svg';
import logo from '../static/images/logo.png';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-scroll';
import NavToggler from './NavToggle';
import '../static/css/Header.css';

export default function Header() {
  return (
    <header className="header-area">
      <div className="navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Accordion defaultActiveKey="1">
                <nav className="navbar navbar-expand-lg">
                  <div></div>
                  <NavToggler eventKey="0" />

                  <Accordion.Collapse className="navbar-collapse hide sub-menu-bar" eventKey="0">
                    <ul id="nav" className="navbar-nav ms-sm-auto">
                      <li className="nav-item">
                        <Link to="story" spy={true} smooth={true}>HOR</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="home" spy={true} smooth={true}>Mint</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="roadmap" spy={true} smooth={true}>Roadmap</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="team" spy={true} smooth={true}>Team</Link>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </nav>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className="header-hero bg_cover">
        <div className="bg-film"></div>
        <div className="container">
          <div className="d-flex flex-column justify-content-center text-center header-hero-content">
            <div className="d-flex justify-content-center text-center logo">
              <img src={logo} alt="" />
            </div>
            <h3 className="header-title">Hall Of Royals</h3>
            <h5 className="header-title-helper">(A Royal Hall Of Fame)</h5>
            <div className="d-flex justify-content-center mt-40">
              <p className="text">Inspired by the "Bronze Heads" of the<br/>ancient Benin Kingdom which were cast<br/>in honor of Kings and Queens</p>
            </div>
            <ul className="social-icons">
              <li>
                <a href="https://discord.gg/R8PQbnGZH2">
                <img src={socialIconOne} alt="Discord" />
              </a></li>
              <li><a href="https://twitter.com/HallofRoyals?s=09">
                <img src={socialIconTwo} alt="Twitter" />
              </a></li>
              {/* <li><a href="https://www.youtube.com/watch?v=QqpIbRzfPNc">
                <img src={socialIconThree} alt="Opensea" />
              </a></li> */}
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
}
