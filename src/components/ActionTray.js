import '../static/css/ActionTray.css';
import openseaIcon from '../static/images/opensea-icon.png';
import crownIcon from '../static/images/crown-icon.png';

export default function ActionTray() {
  return (
    <section id="mint" className="glassy-wrapper x-section mt-120">
      <h1 className="section-title">Get a Royal</h1>
      <div className="row mt-20">
        <div className="col-6">
          <a href="https://opensea.io/collection/hallofroyals" target="_blank" rel="noreferrer" className="pl-5 pr-5 glassy-wrapper -actiontray-actions text-center d-flex justify-content-center align-items-center">
            <span>Buy on OpenSea</span>
            <img src={openseaIcon} alt="opensea"/>
          </a>
          <p className="text-center mt-10">Genesis collection</p>
        </div>
        <div className="col-6">
          <a href="/" className="pl-5 pr-5 glassy-wrapper -actiontray-actions text-center d-flex justify-content-center align-items-center">
            <span>Mint a custom Royal</span>
            <img src={crownIcon} alt="opensea" />
          </a>
          <p className="text-center mt-10">Get a custom sculpt</p>
        </div>
      </div>
    </section>
  );
}