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
import pic6 from '../static/images/community/6.png';
import pic7 from '../static/images/community/7.png';
import menuIcon from '../static/images/community/humber.svg';
import wolf from '../static/images/community/wolf.png';
import dove from '../static/images/community/dove.png';
import bee from '../static/images/community/bee.png';
import eagle from '../static/images/community/eagle.png';
import pheonix from '../static/images/community/phoenix.png';
import iconTipping from '../static/images/icon-tipping.png';
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
        desktop: 1.3,
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
          <div className="text-center mb-60">
            <h2>Story & Utility</h2>
          </div>
          <p className="notice">A collection of 13,500 unique "Royals" to immortalize the present day Kings and Queens - forever on the blockchain</p>
          <p className="info primary">Hall of Royals was inspired by the "bronze heads" of the Ancient Benin Kingdom. Cast around the 16th & 17th Century, these bronze heads were cast in honor of Kings & Queens</p>
          <p className="info primary">The Bronze Heads have a rich history of culture and conquest with most of them now on display in museums across Europe, far away from home.</p>
          <p className="info primary">However, via this project the Bronze Heads will find fresh meaning, a new expression and fusion with modern culture - a bridge between the ancient and the new.</p>
          <p className="info primary">So, leveraging the power of 3D technology and Web 3.0, Hall Of Royals will be used to not just honor and immortalize ourselves but also to give expression and recognition to ideas, projects and all else that we hold dear.</p>
          <div className="text-center mb-60">
            <h2>Monetize Your Royal NFT</h2>
          </div>
          <p className="info">3 Income Tiers for Royal Holders $$$ + Content Influenced Rarity</p>
          <div className="col-md-10 xniR-card text-center pt-40 pb-40 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle isAlt={true} title="Hall Of Royals" />
            </div>
            <p className="mb-30" style={{ marginTop: -60 }}>
              Your Royal NFT doubles as your membership in the Hall Of Royals Social
            </p>
            <p className="mb-30">Hall Of Royals Social is a social platform for the Royal community & the NFT community in general</p>
            <p className="mb-30">On the social platfrom you can dedicate your Royal to yourself, a family member, a fundraiser, your content - books, memes, artworks, website, newsletter, youtube channel, etc.</p>
            <p>Each Royal profile has a "TIP" button which lovers of your content can use to show their support by tipping you in $SOL, $ETH, $USDT, etc.</p>
          </div>
          <div className="mb-50 mt-30 community-knlD-wrapper">
            <Slider
              ref={this.gallerySliderRef}
              onSlideVisible={this.resetGallery}
              slidesPerPageSettings={this.state.slidesPerPageSettings}>
              <div className="d-flex flex-column community-knlD">
                <div className="d-flex flex-column align-items-center text-center profile">
                  <img src={pic1} alt="Community member" />
                  <h4>Destiny: Wolf <img src={wolf} alt="wolf" /></h4>
                  <h3>King Hobbs III</h3>
                </div>
                <div className="details-section">
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn action-btn"><img src={iconTipping} alt="Ethereum" /><span>Tip</span></button>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    DeFi changed my life completely...
                  </p>
                  <p className="pt-20">So, here's to DeFi...</p>
                  <p className="pt-20">
                    LONG LIVE CRYPTO!!! @George_XY (twitter) was here
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column community-knlD">
                <div className="d-flex flex-column align-items-center text-center profile">
                  <img src={pic2} alt="Community member" />
                  <h4>Destiny: Phoenix <img src={pheonix} alt="wolf" /></h4>
                  <h3>My Book: Loss and raising kids</h3>
                </div>
                <div className="details-section">
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn action-btn"><img src={iconTipping} alt="Ethereum" /><span>Tip</span></button>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    I'm dedicating this royal to myself. I'm a single mom with three kids. My hubby died in the line of duty shortly after our third child was born. I never thought I could do it... I was depressed for over a year but I had to find my way back for my kids.
                  </p>
                  <p className="pt-20">It's been 8 years now and I and my kids are doing great. It's tough but hey, what isn't. Believe in yourself and you too can achieve anything. I'm dedicating my Royal NFT to my book "Loss and raising kids" where I share my experience and how I rose like a phoenix from the ashes
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column community-knlD">
                <div className="d-flex flex-column align-items-center text-center profile">
                  <img src={pic4} alt="Community member" />
                  <h4>Destiny: Honey Bee <img src={bee} alt="wolf" /></h4>
                  <h3>King Meme III</h3>
                </div>
                <div className="details-section">
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn action-btn"><img src={iconTipping} alt="Ethereum" /><span>Tip</span></button>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    I, King Meme The Third, do solemnly swear to be a harsh dictator and punish you all - my subjects - with the most funny, mind bending memes you have ever seen.
                  </p>
                  <p className="pt-20">I swear to punish you all the days of your meme-serable lives with memes that make you laugh hard till you beg FOR MY MERCY.</p>
                  <p className="pt-20">
                    Hahahaha hahahaha hahahaha hahahaha hahahaha</p>

                </div>
              </div>
              <div className="d-flex flex-column community-knlD">
                <div className="d-flex flex-column align-items-center text-center profile">
                  <img src={pic3} alt="Community member" />
                  <h4>Destiny: Dove <img src={dove} alt="wolf" /></h4>
                  <h3>Super Dad</h3>
                </div>
                <div className="details-section">
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn action-btn"><img src={iconTipping} alt="Ethereum" /><span>Tip</span></button>
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
                </div>
              </div>

              <div className="d-flex flex-column community-knlD">
                <div className="d-flex flex-column align-items-center text-center profile">
                  <img src={pic5} alt="Community member" />
                  <h4>Destiny: Eagle <img src={eagle} alt="wolf" /></h4>
                  <h3>Black Moon Charity</h3>
                </div>
                <div className="details-section">
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn action-btn"><img src={iconTipping} alt="Ethereum" /><span>Tip</span></button>
                    <button type="button" className="btn action-btn">Follow</button>
                  </div>
                  <p className="pt-20">
                    This NFT is dedicated to the Black Moon Charity which is a charity foundation focused on bringing education to underprivileged children around the world through building of schools, partial and full scholarships, provison of learning materials, teacher training and deployment.
                  </p>
                  <p className="pt-20">"Education is the most powerful weapon which you can use to change the world" - Nelson Mandela</p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-md-10 xniR-card text-center pt-40 pb-40 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle isAlt={true} title="Royal Diary" />
            </div>
            <p className="mb-30" style={{ marginTop: -60 }}>Each Royal NFT has a diary where you post content</p>
            <p className="mb-30">
              The content (memes, photography, your life's story, your book, etc.) you put into your Royal NFT will increase it's value IRRESPECTIVE OF IT'S RARITY.
            </p>
            <p className="mb-30">The more interesting your content is the more valuable your NFT becomes because whoever buys it also gets to own all that content.</p>
            <p>Every post you make has a "Tip" button that allows people who like your post to tip you</p>
          </div>
          <div className="d-flex flex-row mt-20 mb-50 community-knlD kdlY">
            <div className="col-sm-2 d-flex flex-column align-items-start text-center profile">
              <img src={pic6} alt="Community member" />
            </div>
            <div className="col-sm-10 details-section">
              <div className="d-flex justify-content-between">
                <h3>King Meme III</h3>
                <img src={menuIcon} alt="menu" className="menu" />
              </div>
              <div className="pt-20">
                <img src={pic7} class="full-img" alt="" />
              </div>
              <div className="d-flex justify-content-between pt-30 special-action-section">
                <button type="button" className="btn action-btn"><img src={iconTipping} alt="Ethereum" /><span>10.9</span></button>
                <button type="button" className="btn action-btn"><img src={iconHeart} alt="Ethereum" /><span>5000</span></button>
              </div>
            </div>
          </div>
          <div className="col-md-10 xniR-card text-center pt-40 pb-40 pl-20 pr-20">
            <div className="d-flex justify-content-center pt-20">
              <SectionTitle isAlt={true} title="Royal Commission" />
            </div>
            <p className="mb-30" style={{ marginTop: -60 }}>
              For every tip on the Hall Of Royals Social there is a 10% commission.
            </p>
            <p>20% of revenue generated from the commissions will be distributed to the holders of Hall Of Royals NFT in perpetuity</p>
          </div>
          <div className="col-md-10 xniR-card text-center pt-20 pb-20 pl-20 pr-20">
            <p className="info mb-0">Other member benefits include 3D printing file + "voting rights" as explanied in the <Link to="roadmap" spy={true} smooth={true}>roadmap</Link> below</p>
          </div>
        </div>
      </div>
    </section>);
  }
}