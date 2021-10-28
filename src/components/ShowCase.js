import React from 'react'
import '../static/css/ShowCase.css';
import pic1 from '../static/images/showcase/1.png';
import pic2 from '../static/images/showcase/2.png';
import pic3 from '../static/images/showcase/3.png';
import pic4 from '../static/images/showcase/4.png';
import pic5 from '../static/images/showcase/5.png';
import pic6 from '../static/images/showcase/6.png';
import pic7 from '../static/images/showcase/7.png';
import pic8 from '../static/images/showcase/8.png';
import pic9 from '../static/images/showcase/9.png';
import pic10 from '../static/images/showcase/10.png';
import pic11 from '../static/images/showcase/11.png';
import pic12 from '../static/images/showcase/12.png';
import pic13 from '../static/images/showcase/13.png';
import pic14 from '../static/images/showcase/14.png';
import pic15 from '../static/images/showcase/15.png';
import pic16 from '../static/images/showcase/16.png';
import ShowCaseSlider from './ShowCaseSlider';

export default class ShowCase extends React.Component {
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
    return (<section className="showcase pb-50">
      <ShowCaseSlider>
        <img src={pic1} alt="showcase"/>
        <img src={pic2} alt="showcase"/>
        <img src={pic3} alt="showcase"/>
        <img src={pic4} alt="showcase"/>
        <img src={pic5} alt="showcase"/>
        <img src={pic6} alt="showcase"/>
        <img src={pic7} alt="showcase"/>
        <img src={pic8} alt="showcase"/>
        <img src={pic9} alt="showcase"/>
        <img src={pic10} alt="showcase"/>
        <img src={pic11} alt="showcase"/>
        <img src={pic12} alt="showcase"/>
        <img src={pic13} alt="showcase"/>
        <img src={pic14} alt="showcase"/>
        <img src={pic15} alt="showcase"/>
        <img src={pic16} alt="showcase"/>
      </ShowCaseSlider>
    </section>);
  }
}