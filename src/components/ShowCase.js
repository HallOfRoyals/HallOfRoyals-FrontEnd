import React, { useLayoutEffect, useState } from 'react';
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

const slides = [
  { "image": pic1 },
  { "image": pic2 },
  { "image": pic3 },
  { "image": pic4 },
  { "image": pic5 },
  { "image": pic6 },
  { "image": pic7 },
  { "image": pic8 },
  { "image": pic9 },
  { "image": pic10 },
  { "image": pic11 },
  { "image": pic12 },
  { "image": pic13 },
  { "image": pic14 },
  { "image": pic15 },
  { "image": pic16 },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3.4,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  pauseOnHover: true,
  cssEase: "linear"
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function ShowCase() {
  const [width, _] = useWindowSize();
  if (width > 0) {
    if (width <= 800 && width > 510) {
      settings.slidesToShow = 2;
      return (<section className="showcase pb-50">
        <ShowCaseSlider settings={settings} slides={slides} />
      </section>);
    } else if (width <= 510) {
      settings.slidesToShow = 1;
      return (<section className="showcase pb-50">
        <ShowCaseSlider settings={settings} slides={slides} />
      </section>);
    }
  }

  return (<section className="showcase pb-50">
    <ShowCaseSlider settings={settings} slides={slides} />
  </section>);
}