import React from 'react'

import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import FeedbackLink from '../components/FeedbackLink/FeedbackLink'

class About extends React.Component {
  render() {
    let content = 
      (
        <span>
          Hola, mi nombre es Lucas. Soy diseñador y programador, y esto nació como un experimento personal para despuntar del vicio del diseño, React y SCSS.
          Podés ver más de mi trabajo en <a href="https://www.behance.net/untallucas" rel="noopener noreferrer" target="_blank">Behance</a>, <a href="https://dribbble.com/untallucas" rel="noopener noreferrer" target="_blank">Dribbble</a> y <a href="https://github.com/untallucas" rel="noopener noreferrer" target="_blank">Github</a>. Habitualmente comparto contenidos de diseño en <a href="https://www.linkedin.com/in/lucasdimattia/" rel="noopener noreferrer" target="_blank">LinkedIn</a>, <a href="https://twitter.com/untallucas" rel="noopener noreferrer" target="_blank">Twitter</a> y <a href="https://medium.com/@untallucas" rel="noopener noreferrer" target="_blank">Medium</a>.<br/><br/>
          El objetivo de esta página es compartir la oferta de actividades culturales, recreativas y gastronómicas de la ciudad de Córdoba. Arte, música, museos, teatros, patrimonio arquitectónico, paseos de compras, bares y restaurantes, todo en el mismo lugar. Mostrar lugares que no todos conocen y ayudar a redescubrir rincones ocultos de la ciudad.<br/><br/>
          Si querés contactarte conmigo, encontraste algo que no está bien o conocés otros lugares que no pueden faltar, podés <a href="https://forms.gle/E5pAMvgEf5Z5VwKX6" rel="noopener noreferrer" target="_blank">dejar el dato acá</a>.
        </span>
      )
    return (
      <div className="Page">

        <FeedbackLink />
        <Navigation />
        <Header title="Acerca" history={ this.props.history } />

        <div className="Page__Wrapper Page__Wrapper--BottomPadding">

          <div className="Grid Grid--Col-12">
            <div className="Grid__Content">
              <PageLayoutHeading title="Acerca" text={ content } />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default About
