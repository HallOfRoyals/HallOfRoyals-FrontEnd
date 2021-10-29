import React from 'react';
import Slider from "react-slick";
import '../static/css/ShowCase.css';

export default class ShowCaseSlider extends React.Component {
  constructor(props) {
    super(props)
    this.gallerySliderRef = React.createRef();
    this.state = {
      
    }
  }

  render() {
    var data = this.props.slides;
    var newsTemplate = data.map(function (item, index) {
      return (
        <div key={index}>
          <img src={item.image} className="case" alt="showcase" />
        </div>
      )
    });

    return (
      <div>
        <Slider {...this.props.settings}>{newsTemplate}</Slider>
      </div>
    );
  }
}
