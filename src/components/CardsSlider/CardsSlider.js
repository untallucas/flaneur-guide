import React from 'react'
import Slider from 'react-slick'

import SpotCard from '../SpotCard/SpotCard'
import OutstandingCard from '../OutstandingCard/OutstandingCard'
import HighlightCard from '../HighlightCard/HighlightCard'
import Icon from '../Icon/Icon'

import './CardsSlider.scss'

const CardsSlider = props => {
  const NextArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
    <div className="slick-arrow slick-next" {...props}>
      <Icon name="carat-right" color="#000000" />
    </div>
  )

  const PrevArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
    <div className="slick-arrow slick-prev" {...props}>
      <Icon name="carat-left" color="#000000" />
    </div>
  )

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
