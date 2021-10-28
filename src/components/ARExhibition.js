import React from 'react'
import '../static/css/ARExhibition.css';
import SectionTitle from './SectionTitle';
import { Slider } from '@lifarl/react-scroll-snap-slider';
import pic1 from '../static/images/community/1.png';
import iconEther from '../static/images/icon-ethereum.png';
import iconHeart from '../static/images/icon-heart.png';

export default class AREXhibition extends React.Component {
  constructor(props) {
    super(props)
    this.gallerySliderRef = React.createRef();
    this.state = {
      slidesPerPageSettings: {
        mobileSmall: 1.1,
        mobileBig: 1.1,
        tablet: 1.2,
        desktop: 1.2,
      },
      hasScrolled: false
    }
  }
  
  resetGallery = () => {
    if (!this.state.hasScrolled) {
      this.gallerySliderRef.current?.scrollToSlide(2);
      this.setState({ hasScrolled: true })
    }
  }

  render() {
    return (<section className="pb-120">
      <div className="xniR-wrapper">
        <div className="container pt-100 pb-100">
          <div className="text-center mb-80">
            <h2>Story & Community</h2>
          </div>
          <p className="notice">Inspired by the ancient Benin Kingdom " Bronze Heads" which were cast in honour of Kings and Queens</p>
          <p className="info">The "'Royals" NFT will be used to honor and immortalize individuals, ideas, projects and every other thing that holders wish to to dedicate their Royals" to</p>
          <div className="mb-50 community-knlD-wrapper">
            <Slider
              ref={this.gallerySliderRef}
              onSlideVisible={this.resetGallery}
              slidesPerPageSettings={this.state.slidesPerPageSettings}>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic1} alt="Community member" />
                  <h4>Destiny: Wolf</h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>King Hobbs III</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    Dad has always been there for me. He was a man with a big heart.
                  </p>
                  <p className="pt-20">He always said "Flowers are forever".</p>
                  <p>He loved giving flowers. For him they were the ultimate representation of love.</p>
                  <p>The love he taught us has kept us united even through the worst times.</p>
                  <p className="pt-20">
                    I miss you, I love you and I'm dedicating this Royal to you cos you raised us like a true king.
                  </p>
                  <p> - In loving memory of Sr. Gregory Flynn</p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>2.9</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>200</span></button>
                  </div>
                </div>
              </div>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic1} alt="Community member" />
                  <h4>Destiny: Dove</h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>Super Dad</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    Dad has always been there for me. He was a man with a big heart.
                  </p>
                  <p className="pt-20">He always said "Flowers are forever".</p>
                  <p>He loved giving flowers. For him they were the ultimate representation of love.</p>
                  <p>The love he taught us has kept us united even through the worst times.</p>
                  <p className="pt-20">
                    I miss you, I love you and I'm dedicating this Royal to you cos you raised us like a true king.
                  </p>
                  <p> - In loving memory of Sr. Gregory Flynn</p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>2.9</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>200</span></button>
                  </div>
                </div>
              </div>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic1} alt="Community member" />
                  <h4>Destiny: Dove</h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>Super Dad</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    Dad has always been there for me. He was a man with a big heart.
                  </p>
                  <p className="pt-20">He always said "Flowers are forever".</p>
                  <p>He loved giving flowers. For him they were the ultimate representation of love.</p>
                  <p>The love he taught us has kept us united even through the worst times.</p>
                  <p className="pt-20">
                    I miss you, I love you and I'm dedicating this Royal to you cos you raised us like a true king.
                  </p>
                  <p> - In loving memory of Sr. Gregory Flynn</p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>2.9</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>200</span></button>
                  </div>
                </div>
              </div>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic1} alt="Community member" />
                  <h4>Destiny: Wolf</h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>King Hobbs III</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    Dad has always been there for me. He was a man with a big heart.
                  </p>
                  <p className="pt-20">He always said "Flowers are forever".</p>
                  <p>He loved giving flowers. For him they were the ultimate representation of love.</p>
                  <p>The love he taught us has kept us united even through the worst times.</p>
                  <p className="pt-20">
                    I miss you, I love you and I'm dedicating this Royal to you cos you raised us like a true king.
                  </p>
                  <p> - In loving memory of Sr. Gregory Flynn</p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>2.9</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>200</span></button>
                  </div>
                </div>
              </div>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic1} alt="Community member" />
                  <h4>Destiny: Wolf</h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>King Hobbs III</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    Dad has always been there for me. He was a man with a big heart.
                  </p>
                  <p className="pt-20">He always said "Flowers are forever".</p>
                  <p>He loved giving flowers. For him they were the ultimate representation of love.</p>
                  <p>The love he taught us has kept us united even through the worst times.</p>
                  <p className="pt-20">
                    I miss you, I love you and I'm dedicating this Royal to you cos you raised us like a true king.
                  </p>
                  <p> - In loving memory of Sr. Gregory Flynn</p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>2.9</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>200</span></button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="text-center mb-80">
            <h2>Member Benefits</h2>
          </div>
          <p className="notice">Buying a Royal makes you a member of the Royal Hall Of Fame</p>
          <p className="info">Each memeber's NFT doubles as their profile</p>
          <div className="col-md-10 xniR-card text-center pt-40 pb-20 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle title="Hall Of Royals" />
            </div>
            <p className="mb-30" style={{ marginTop: -60 }}>
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
          <p className="info mt-30 mb-0">Other member benefits include "voting rights" as explanied in the roadmap below</p>
        </div>
      </div>
    </section>);
  }
}