import { Link } from 'react-router-dom';
import logo from '../static/images/logo.png';
import socialOne from '../static/images/social-1.png';
import socialTwo from '../static/images/social-2.png';

export default function Nav() {
  return (
    <div className="navbar-area">
      <div className="container">
        <div className="d-flex justify-content-between justify-content-md-start">
          <Link to="/">
          <img src={logo} alt="HOR" className="logo" />
          </Link>
          <ul className="ml-md-200 nav-anchors">
            <li className="d-inline-block"><a href="/" className="btn btn-primary btn-cap">Connect Wallet</a></li>
            <li className="d-none d-md-inline-block"><a href="https://twitter.com/HallofRoyals?s=09" target="_blank" rel="noreferrer"><img src={socialOne} alt="" /></a></li>
            <li className="d-none d-md-inline-block"><a href="https://discord.gg/hall-of-royals" target="_blank" rel="noreferrer"><img src={socialTwo} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}