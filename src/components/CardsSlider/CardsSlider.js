import React from 'react'
import Slider from 'react-slick'

import SpotCard from '../SpotCard/SpotCard'
import OutstandingCard from '../OutstandingCard/OutstandingCard'
import HighlightCard from '../HighlightCard/HighlightCard'
import Icon from '../Icon/Icon'

import './CardsSlider.scss'

const CardsSlider = props => {
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

  switch ( props.type ) {
    case 'spots':
      return (
        <div className="CardsSlider">
          <h2 className="CardsSlider__Title">{ props.title }</h2>
          <Slider {...settings}>
            <HighlightCard content={ props.description } />
            {
              props.spots.map(function (spot, i) {
                return <SpotCard key={ i } spot={ spot } />
              })
            }
          </Slider>
        </div>
      )

    case 'ranking':
      return (
        <div className="CardsSlider">
          <h2 className="CardsSlider__Title">{ props.title }</h2>
          <Slider {...settings}>
            {
              props.spots.map(function (spot, i) {
                return <OutstandingCard key={ i } position={ i } spot={ spot } />
              })
            }
          </Slider>
        </div>
      )

    case 'categories':
      return (
        <div className="CardsSlider">
          <h2 className="CardsSlider__Title">{ props.title }</h2>
        </div>
      )

    default:
      return (
        <div className="CardsSlider">
          <h2 className="CardsSlider__Title">Ups!</h2>
        </div>
      )
  }
}

export default CardsSlider
