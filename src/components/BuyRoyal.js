import { ProgressBar } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import componentThree from '../static/images/component3.svg';

export default function BuyRoyal() {
  return (
    <section className="buyroyal-section pb-120">
      <div className="container">
        <SectionTitle title="Buy a Royal" />
        <div className="row align-items-center justify-content-between mb-20" style={{ marginTop: -60 }}>
          <div className="col-sm-6 col-lg-3 d-flex justify-content-center align-items-center">
            <div className="buy-component component1"></div>
          </div>
          <div className="col-sm-6 col-lg-3 caption-component text-center magic-mt-10">
            <img src={componentThree} alt="Maximum Transactions" />
            <h4>max per transaction</h4>
            <div>(coming soon)</div>
          </div>
          <div className="col-sm-6 col-lg-3 caption-component text-center magic-mt-10">
            <img src={componentThree} alt="Price" />
            <h4>Price</h4>
            <div>(coming soon)</div>
          </div>
          <div className="col-sm-6 col-lg-3 d-flex justify-content-center align-items-center magic-mt-10">
            <div className="buy-component component2"></div>
          </div>
        </div>
        <div className="row text-center mb-10">
          <div className="col-md-10 mh-auto">
            <ProgressBar className="reprogress" now={60} max={1500} min={0} />
            <div className="progress-helper">0/10,000 minted</div>
          </div>
        </div>
        <div className="d-flex justify-content-center text-center">
          <div className="royal-info">
            All Royals are unique and algorithm-generated from over 200 traits. Royals are stored on the Ethereum ERC-721 blockchain
          </div>
        </div>
      </div>
    </section>
  );
}