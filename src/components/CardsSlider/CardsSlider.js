import React from 'react'
import Slider from 'react-slick'

import SpotCard from '../SpotCard/SpotCard'
import OutstandingCard from '../OutstandingCard/OutstandingCard'
// import HighlightCard from '../HighlightCard/HighlightCard'
import LinkCard from '../LinkCard/LinkCard'
import Icon from '../Icon/Icon'

import './CardsSlider.scss'

class CardsSlider extends React.Component {
  componentDidMount() {
    this.setState({})
  }

  render(){
    const NextArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
      <div className="slick-arrow slick-next" {...props}>
        <Icon name="carat-right" width="32" height="32" />
      </div>
    )

    const PrevArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
      <div className="slick-arrow slick-prev" {...props}>
        <Icon name="carat-left" width="32" height="32" />
      </div>
    )

    var settings = {
      arrows: true,
      dots: true,
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
          breakpoint: 1500,
          settings: {
            arrows: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    switch ( this.props.type ) {
      case 'spots':
        return (
          <div className="CardsSlider">
            <h2 className="CardsSlider__Title">{ this.props.title }</h2>
            <Slider {...settings}>
              {
                this.props.spots.map(function (spot, i) {
                  return <SpotCard key={ i } spot={ spot } />
                })
              }
              <LinkCard url={ this.props.url } />
            </Slider>
          </div>
        )

      case 'ranking':
        return (
          <div className="CardsSlider">
            <h2 className="CardsSlider__Title">{ this.props.title }</h2>
            <Slider {...settings}>
              {
                this.props.spots.map(function (spot, i) {
                  return <OutstandingCard key={ i } position={ i } spot={ spot } />
                })
              }
            </Slider>
          </div>
        )

      case 'categories':
        return (
          <div className="CardsSlider">
            <h2 className="CardsSlider__Title">{ this.props.title }</h2>
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
}  

export default CardsSlider
