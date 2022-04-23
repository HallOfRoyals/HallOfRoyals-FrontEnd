import { Link } from "react-router-dom";
import '../static/css/ActionTray.css';
import logoIconDark from '../static/images/logo-icon-dark.png';

export default function ActionTray() {
  return (
    <section id="mint" className="glassy-wrapper x-section mt-120">
      <h1 className="section-title">Get a Royal</h1>
      <div className="row mt-20">
        <div className="col-12">
          <Link to="/gallery" className="pl-5 pr-5 glassy-wrapper -actiontray-actions text-center d-flex justify-content-center align-items-center btn-cap">
            <span>Mint a Royal</span>
            <img src={logoIconDark} alt="opensea" />
          </Link>
          <p className="text-center mt-10">Join our free community airdrop</p>
        </div>
      </div>
    </section>
  );
}
