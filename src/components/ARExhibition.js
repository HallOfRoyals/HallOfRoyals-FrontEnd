import '../static/css/ARExhibition.css';
import SectionTitle from './SectionTitle';
import play from '../static/images/play.svg';

export default function ARExhibition() {
  return (
    <section className="pb-120">
      <div className="container">
        <SectionTitle title="AR Experience" />
      </div>
      <div className="text-center pt-100 pb-100 d-flex flex-column align-items-center exhibition-xcndM">
        <div className="exhibition-overlay"></div>
        <div className="exhibition-content">
          <h2>7,500 Queens + Kings 7,500</h2>
          <div className="mt-125 info-section">
            <h2>AR Exhibition</h2>
            <a href="/" className="action-btn">
              <img src={play} alt="Start Exhibition" />
            </a>
          </div>
        </div>
      </div>
      <div className="xniR-wrapper">
        <div className="container pt-100 pb-100">
          <div className="text-center mb-80">
            <h2>Story & Community</h2>
          </div>
          <p className="notice">Inspired by the ancient Benin Kingdom " Bronze Heads" which were cast in honour of Kings and Queens</p>
          <p className="info">The "'Royals" NFT will be used to honor and immortalize individuals, ideas, projects and every other thing that holders wish to to dedicate their Royals" to</p>
          {/* Carousel here */}
          <div className="text-center mb-80">
            <h2>Member Benefits</h2>
          </div>
          <p className="notice">Buying a Royal makes you a member of the Royal Hall Of Fame</p>
          <p className="info">Each memeber's NFT doubles as their profile</p>
          <div className="col-md-10 xniR-card text-center pt-40 pb-20 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle title="Hall Of Royals" />
            </div>
            <p className="mb-30" style={{marginTop: -60}}>
              A unique community of Kings and Queens immortalized forever in the blockchain. Alternatively, you can dedicate your Royal to your achievements, a family member, a fundraiser, your content - books, memes, artworks, website, newsletter, youtube channel, etc.
            </p>
            <p>Even if you sell, your content continues to live in the "Archive" of your Royal NFT.</p>
            <p>Each Royal has an "Archive".</p>
            <p>Content from all previous buyers/owners are stored forever in it's Archive</p>
          </div>
          <div className="col-md-10 xniR-card text-center pt-40 pb-20 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle title="Royal Diary" />
            </div>
            <p style={{ marginTop: -60 }}>Each Royal NFT has a diary where you post content you want people to see or content people will find interesting or valuable.</p>
            <p className="mb-30">
              This can help PROMOTE YOUR ROYAL NFT and make it more valuable.
            </p>
            <p className="mb-30">The content (memes, photography, your life's story, your book, etc.) you put into your Royal NFT can help increase it's value IRRESPECTIVE OF IT'S RARITY.</p>
            <p>The more interesting your content is the more valuable your NFT becomes because whoever buys it also gets to own all that content.</p>
          </div>
          <div className="col-md-10 xniR-card text-center pt-40 pb-20 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle title="Royal Earning" />
            </div>
            <p className="mb-30" style={{ marginTop: -60 }}>
              Each Royal (profile) has a "Tip" button which allows your followers to tip you in ETH.
            </p>
            <p className="mb-30">Each post you make in your Royal Diary also has a "Tip" button and can also be tipped in ETH</p>
            <p>UTILITY: Your Royal can; earn you passive income without being sold; be used as a fundraiser; to raise money for a cause; to launch a book; to crowdfund; etc.</p>
          </div>
          <p className="info mt-30 mb-0">Buying a Royal makes you a member of the Royal Hall Of Fame</p>
        </div>
      </div>
    </section>
  );
}