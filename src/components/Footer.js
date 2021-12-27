import { Link } from 'react-scroll';
import '../static/css/ShowCase.css';
import logoIcon from '../static/images/logo-icon.png';
import shapeEighteen from '../static/images/shape-18.png';
import shapeNineteen from '../static/images/shape-19.png';

export default function Footer() {

  return (
    <footer className="x-glassy-wrapper mt-60 mb-30 position-relative pl-30 pr-30 pb-30 pt-100">
      <img src={shapeEighteen} alt="" className="shape-18" />
      <img src={shapeNineteen} alt="" className="shape-19" />
      <div className="container x-container">
        <div className="row justify-content-center footer-nav">
          <div className="col-md-4">
            <h2>Project</h2>
            <ul>
              <li>
                <a href="https://opensea.io/collection/hallofroyals" target="_blank" rel="noreferrer">OpenSea</a>
              </li>
              <li>
                <Link to="mint" spy={true} smooth={true}>Mint</Link>
              </li>
              <li>
                <Link to="story" spy={true} smooth={true}>Story</Link>
              </li>
              <li>
                <Link to="roadmap" spy={true} smooth={true}>Roadmap</Link>
              </li>
              <li>
                <Link to="team" spy={true} smooth={true}>Team</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-md-flex flex-column justify-content-center align-items-center">
            <h2>Socials</h2>
            <ul>
              <li>
                <a href="https://discord.gg/hall-of-royals" target="_blank" rel="noreferrer">Discord</a>
              </li>
              <li>
                <a href="https://twitter.com/HallofRoyals?s=09" target="_blank" rel="noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com/hall_of_royals?utm_medium=copy_link" target="_blank" rel="noreferrer">Instagram</a>
              </li>
              <li>
                <a href="//" target="_blank" rel="noreferrer">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-50 d-flex justify-content-center">
          <div className="d-flex align-items-center footer-logo">
            <img src={logoIcon} alt="" />
            <h3>Hall Of Royals</h3>
            <img src={logoIcon} alt="" />
          </div>
        </div>
        <div className="mt-10 d-flex justify-content-center">
          <p>1000 unique Royals</p>
        </div>
        <div className="mt-40 d-flex justify-content-center">
          <p className="copyright">&copy; 2021 Hall Of Royals. All rights reserved</p>
        </div>
      </div>
    </footer>);
}