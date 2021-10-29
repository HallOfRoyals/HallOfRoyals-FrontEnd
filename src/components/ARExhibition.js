import React from 'react';
import '../static/css/ARExhibition.css';
import SectionTitle from './SectionTitle';
import { Link } from 'react-scroll';
import { Slider } from '@lifarl/react-scroll-snap-slider';
import pic1 from '../static/images/community/1.png';
import pic2 from '../static/images/community/2.png';
import pic3 from '../static/images/community/3.png';
import pic4 from '../static/images/community/4.png';
import pic5 from '../static/images/community/5.png';
import wolf from '../static/images/community/wolf.png';
import dove from '../static/images/community/dove.png';
import bee from '../static/images/community/bee.png';
import eagle from '../static/images/community/eagle.png';
import pheonix from '../static/images/community/phoenix.png';
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
    return (<section id="story" className="pb-70">
      <div className="xniR-wrapper">
        <div className="container pt-100 pb-40">
          <div className="text-center mb-80">
            <h2>Story & Community</h2>
          </div>
          <p className="notice">A collection of 13,500 unique "Royals" to immortalize the present day Kings and Queens - forever on the blockchain</p>
          <p className="info">Hall of Royals was inspired by the "bronze heads" of the Ancient Benin Kingdom. These Bronze Heads were used in ancient times to honor Kings and Queens of the Benin Kingdom.</p>
          <p className="info">The Bronze Heads have a rich history of culture and conquest with most of them now sitting in museums across Europe.</p>
          <p className="info">However, via this project the Bronze Heads will find fresh meaning, a new expression and fusion with modern culture - a bridge between the ancient and the new.</p>
          <p className="info">So, leveraging the power of 3D technology and Web 3.0, Hall Of Royals will be used to not just honor and immortalize ourselves but also to give expression and recognition to ideas, projects and all else that we hold dear.</p>
          <div className="mb-50 community-knlD-wrapper">
            <Slider
              ref={this.gallerySliderRef}
              onSlideVisible={this.resetGallery}
              slidesPerPageSettings={this.state.slidesPerPageSettings}>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic1} alt="Community member" />
                  <h4>Destiny: Wolf <img src={wolf} alt="wolf"/></h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>King Hobbs III</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    DeFi changed my life completely...
                  </p>
                  <p className="pt-20">So, here's to DeFi...</p>
                  <p className="pt-20">
                    LONG LIVE CRYPTO!!! @George_XY (twitter) was here
                  </p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>0.05</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>16</span></button>
                  </div>
                </div>
              </div>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic2} alt="Community member" />
                  <h4>Destiny: Phoenix <img src={pheonix} alt="wolf" /></h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>Loss and raising kids</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    I'm dedicating this royal to myself. I'm a single mom with three kids. My hubby died in the line of duty shortly after our third child was born. I never thought I could do it... I was depressed for over a year but I had to find my way back for my kids.
                  </p>
                  <p className="pt-20">It's been 8 years now and I and my kids are doing great. It's tough but hey, what isn't. Believe in yourself and you too can achieve anything. I'm dedicating my Royal NFT to my book "Loss and raising kids" where I share my experience and how I rose like a phoenix from the ashes
                  </p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>1.5</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>101</span></button>
                  </div>
                </div>
              </div>
              
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic3} alt="Community member" />
                  <h4>Destiny: Dove <img src={dove} alt="wolf" /></h4>
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
                  <img src={pic4} alt="Community member" />
                  <h4>Destiny: Honey Bee <img src={bee} alt="wolf" /></h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>King Meme III</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    I, King Meme The Third, do solemnly swear to be a harsh dictator and punish you all - my subjects - with the most funny, mind bending memes you have ever seen.
                  </p>
                  <p className="pt-20">I swear to punish you all the days of your meme-serable lives with memes that make you laugh hard till you beg FOR MY MERCY.</p>
                  <p className="pt-20">
                    Hahahaha hahahaha hahahaha hahahaha hahahaha</p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>5.23</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>1,235</span></button>
                  </div>
                </div>
              </div>
              <div className="d-flex community-knlD">
                <div className="col-sm-3 d-flex flex-column align-items-center text-center profile">
                  <img src={pic5} alt="Community member" />
                  <h4>Destiny: Eagle <img src={eagle} alt="wolf" /></h4>
                </div>
                <div className="col-sm-9 details-section">
                  <div className="d-flex justify-content-between">
                    <h3>Black Moon Charity</h3>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    This NFT is dedicated to the Black Moon Charity which is a charity foundation focused on bringing education to underprivileged children around the world through building of schools, partial and full scholarships, provison of learning materials, teacher training and deployment.
                  </p>
                  <p className="pt-20">"Education is the most powerful weapon which you can use to change the world" - Nelson Mandela</p>
                  <div className="d-flex justify-content-between pt-30 special-action-section">
                    <button type="button" className="btn action-btn"><img src={iconEther} alt="Ethereum" /><span>0.8</span></button>
                    <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>69</span></button>
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
          <div className="col-md-10 xniR-card text-center pt-40 pb-40 pl-20 pr-20">
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
          <div className="col-md-10 xniR-card text-center pt-40 pb-40 pl-20 pr-20">
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
          <div className="col-md-10 xniR-card text-center pt-40 pb-40 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle title="Royal Earning" />
            </div>
            <p className="mb-30" style={{ marginTop: -60 }}>
              Each Royal (profile) has a "Tip" button which allows your followers to tip you in ETH.
            </p>
            <p className="mb-30">Each post you make in your Royal Diary also has a "Tip" button and can also be tipped in ETH</p>
            <p>UTILITY: Your Royal can; earn you passive income without being sold; be used as a fundraiser; to raise money for a cause; to launch a book; to crowdfund; etc.</p>
          </div>
          <p className="info mt-30 mb-0">Other member benefits include 3D printing file + "voting rights" as explanied in the <Link to="roadmap" spy={true} smooth={true}>roadmap</Link> below</p>
        </div>
      </div>
    </section>);
  }
}