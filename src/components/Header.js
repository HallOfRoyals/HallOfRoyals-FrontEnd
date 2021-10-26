import logo from '../static/images/logo.png';
import imageShapeOne from '../static/images/header-shape-1.png';
import imageShapeTwo from '../static/images/header-shape-2.svg';
import imageShapeThree from '../static/images/header-shape-3.svg';
import play from '../static/images/play.svg';
import headFigure from '../static/images/head-figure.png';
import socialIconOne from '../static/images/social-icon1.svg';
import socialIconTwo from '../static/images/social-icon2.svg';
import socialIconThree from '../static/images/social-icon3.svg';
import Accordion from 'react-bootstrap/Accordion'
import NavToggler from './NavToggle';
// import headBob from '../static/images/head-bob.svg';
import '../static/css/Header.css';

export default function Header() {
  return (
    <header className="header-area">
      <div className="navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Accordion defaultActiveKey="0">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <img src={logo} alt="Yarner" />
                  </a>
                  <NavToggler eventKey="0" />

                  <Accordion.Collapse className="navbar-collapse hide sub-menu-bar" eventKey="0">
                    <ul id="nav" className="navbar-nav ms-sm-auto">
                      <li className="nav-item">
                        <a className="page-scroll" href="/#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="/#features">HOR</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="/#download">Mint</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="/#footer-contact-info">Exhibition</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="/#footer-contact-info">Roadmap</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="/#footer-contact-info">Team</a>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </nav>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-6 col-md-10">
              <div className="header-hero-content">
                <h3 className="header-title">Hall Of Royals</h3>
                <h5 className="header-title-helper">(A Royal Hall Of Fame)</h5>
                <p className="text">A collection of 13,000 unique "Royals" to immortalize the modern day Kings & Queens - forever on the blockchain</p>
                <ul className="d-flex">
                  <li><a href="https://www.youtube.com/watch?v=QqpIbRzfPNc" className="d-flex flex-row align-items-center header-video">
                    <img src={play} alt="play AR" /><span>AR Experience</span>
                  </a></li>
                </ul>
                <ul className="social-icons">
                  <li><a href="https://www.youtube.com/watch?v=QqpIbRzfPNc">
                    <img src={socialIconOne} alt="Discord" />
                  </a></li>
                  <li><a href="https://www.youtube.com/watch?v=QqpIbRzfPNc">
                    <img src={socialIconTwo} alt="Twitter" />
                  </a></li>
                  <li><a href="https://www.youtube.com/watch?v=QqpIbRzfPNc">
                    <img src={socialIconThree} alt="Opensea" />
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="header-image">
              <div className="image-shape">
                <img src={headFigure} alt="shape" />
              </div>
              {/* <div className="image-shape" style={{zIndex: -2}}>
                <img src={headBob} alt="shape" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="header-background"></div>
        <img className="header-shape-1" src={imageShapeOne} alt="shape" />
        <div className="header-shape-2">
          <img src={imageShapeTwo} alt="shape" />
        </div>
        <div className="header-shape-3">
          <img src={imageShapeThree} alt="shape" />
        </div>
      </div>
    </header>
  );
}
