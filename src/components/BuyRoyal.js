import { ProgressBar } from 'react-bootstrap';
import SectionTitle from './SectionTitle';

export default function BuyRoyal() {
  return (
    <section className="buyroyal-section pb-120">
      <div className="container">
        <SectionTitle title="Buy a Royal" />
        <div className="row align-items-center">
        </div>
        <div className="d-flex justify-content-center text-center">
          <div className="col-md-10">
            <ProgressBar className="reprogress" now={60} max={1500} min={0} />
            <div className="progress-helper">1,000/15,000 minted</div>
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