import logo from '../static/images/logo.png';
import socialOne from '../static/images/social-1.png';
import socialTwo from '../static/images/social-2.png';
import shapeOne from '../static/images/shape-1.png';
import shapeTwo from '../static/images/shape-2.png';
import shapeThree from '../static/images/shape-3.png';
import shapeFour from '../static/images/shape-4.png';
import shapeFive from '../static/images/shape-5.png';
import shapeSix from '../static/images/shape-6.png';
import shapeSeven from '../static/images/shape-7.png';
import shapeEight from '../static/images/shape-8.png';
import shapeNine from '../static/images/shape-9.png';
import shapeTen from '../static/images/shape-10.png';
import shapeEleven from '../static/images/shape-11.png';
import shapeTwelve from '../static/images/shape-12.png';
import shapeThirteen from '../static/images/shape-13.png';
import '../static/css/Header.css';

export default function Header() {
  return (
    <header id="home" className="header-area">
      <div className="navbar-area">
        <div className="container">
          <div className="d-flex justify-content-between justify-content-md-start">
            <img src={logo} alt="HOR" className="logo" />
            <ul className="ml-md-200 nav-anchors">
              <li className="d-inline-block"><a href="/" className="action">Connect Wallet</a></li>
              <li className="d-none d-md-inline-block"><a href="https://twitter.com/HallofRoyals?s=09" target="_blank" rel="noreferrer"><img src={socialOne} alt="" /></a></li>
              <li className="d-none d-md-inline-block"><a href="https://discord.gg/hall-of-royals" target="_blank" rel="noreferrer"><img src={socialTwo} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container header-hero-content">
        <div className="d-flex">
          <div className="col-md-9">
            <h1>Hall Of Royals</h1>
            <p>Inspired by the Bronze heads of the ancient Benin Kingdom
              which were cast in honor of Kings and Queens</p>
            <ul className="mt-15 nav-anchors d-md-none">
              <li className="d-inline-block"><a href="https://twitter.com/HallofRoyals?s=09" target="_blank" rel="noreferrer"><img src={socialOne} alt="" /></a></li>
              <li className="d-inline-block"><a href="https://discord.gg/hall-of-royals" target="_blank" rel="noreferrer"><img src={socialTwo} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <img src={shapeOne} alt="shape-1" className="shape-1"/>
      <img src={shapeTwo} alt="shape-2" className="shape-2"/>
      <img src={shapeThree} alt="shape-3" className="shape-3"/>
      <img src={shapeFour} alt="shape-4" className="d-none d-sm-block shape-4"/>
      <img src={shapeFive} alt="shape-5" className="shape-5"/>
      <img src={shapeSix} alt="shape-6" className="shape-6"/>
      <img src={shapeSeven} alt="shape-7" className="shape-7"/>
      <img src={shapeEight} alt="shape-8" className="shape-8"/>
      <img src={shapeNine} alt="shape-9" className="shape-9"/>
      <img src={shapeTen} alt="shape-10" className="shape-10"/>
      <img src={shapeEleven} alt="shape-11" className="shape-11"/>
      <img src={shapeTwelve} alt="shape-12" className="shape-12"/>
      <img src={shapeThirteen} alt="shape-13" className="shape-13"/>
    </header>
  );
}
