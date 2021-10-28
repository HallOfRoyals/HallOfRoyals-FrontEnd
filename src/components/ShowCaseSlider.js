import React from 'react';
import { Slider } from '@lifarl/react-scroll-snap-slider';
import styled from 'styled-components';

const StyledPagination = styled.div`
  list-style: none;
  width: 50%;
  padding: 0 0 20 0;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
`

const StyledPaginationBullet = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.isActive ? '#000' : '#b6b6b6')};
  cursor: pointer;
  margin: 0 7px;
  border-radius: 50%;
  transition-property: transform, opacity, background-color;
  transition-duration: 0.3s;
`

export const renderFullWidthSlide = (index, item) => {
  return (
    <div key={index} style={{ width: '100%' }}>
      <div className="caseImages"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {item}
      </div>
    </div>
  )
}

export default class ShowCaseSlider extends React.Component {
  constructor(props) {
    super(props)
    this.gallerySliderRef = React.createRef();
    this.state = {
      slidesPerPageSettings: {
        mobileSmall: 1.1,
        mobileBig: 1.9,
        tablet: 2.3,
        desktop: 3.6,
      },
      slideIndex: 0,
      hasScrolled: false
    }
  }

  items = () => this.props.children.map((item, index) => renderFullWidthSlide(index, item));

  changeGalleryIndex = (index) => {
    this.gallerySliderRef.current?.scrollToSlide(index);
    this.setState({ slideIndex: index });
  }

  resetGallery = () => {
    if (!this.state.hasScrolled) {
      this.gallerySliderRef.current?.scrollToSlide(8);
      this.setState({ hasScrolled: true });
    }
  }

  onGallerySlidesVisibilityChange = (index) => {
    this.setState({ slideIndex: index });
  }

  render() {
    return (
      <div>
        <Slider
          ref={this.gallerySliderRef}
          slidesPerPageSettings={this.state.slidesPerPageSettings}
          onSlideVisible={this.resetGallery}
          onSlidesVisibilityChange={this.onGallerySlidesVisibilityChange}
        >
          {this.items()}
        </Slider>
        <div className="container">
          <StyledPagination>
            {this.props.children.map((item, index) => {
              return (
                <StyledPaginationBullet
                  key={index}
                  onClick={() => this.changeGalleryIndex(index)}
                  isActive={this.state.slideIndex === index}
                ></StyledPaginationBullet>
              )
            })}
          </StyledPagination>
        </div>
      </div>
    )
  }
}
