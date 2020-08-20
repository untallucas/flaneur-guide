import React from 'react'
import Slider from 'react-slick'

import SpotCard from '../SpotCard/SpotCard'
import HighlightCard from '../HighlightCard/HighlightCard'
import Icon from '../Icon/Icon'

import './SpotCardsSlider.scss'

const SpotCardsSlider = props => {
//const SpotCardsSlider = function ({ props, onClick }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <div className="slick-arrow slick-next"><Icon name="carat-right" color="#000000" /></div>,
    prevArrow: <div className="slick-arrow slick-prev"><Icon name="carat-left" color="#000000" /></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="SpotCardsSlider">
      <h2 className="SpotCardsSlider__Title">{ props.title }</h2>
      <Slider {...settings}>
        <HighlightCard content="Acá va algo relacionado a los contenidos del slider" />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
        <SpotCard />
      </Slider>
    </div>
  )
}

export default SpotCardsSlider
