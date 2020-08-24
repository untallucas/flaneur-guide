import React from 'react'

import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import Navigation from '../components/Navigation/Navigation'

const About = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <div className="Layout Layout--Col-1">
          <div>
            <PageLayoutHeading title="Acerca" />
            <p className='PageLayoutHeading__Blurb'>
              Hola, mi nombre es Lucas. Soy diseñador y programador, y este es un experimento personal para practicar diseño, React y SCSS.
              Podés ver más de mi trabajo en <a href="https://www.behance.net/untallucas" rel="noopener noreferrer" target="_blank">Behance</a>, <a href="https://dribbble.com/untallucas" rel="noopener noreferrer" target="_blank">Dribbble</a> y <a href="https://github.com/untallucas" rel="noopener noreferrer" target="_blank">Github</a>. Habitualmente comparto contenidos de diseño en <a href="https://www.linkedin.com/in/lucasdimattia/" rel="noopener noreferrer" target="_blank">LinkedIn</a>, <a href="https://twitter.com/untallucas" rel="noopener noreferrer" target="_blank">Twitter</a> y <a href="https://medium.com/@untallucas" rel="noopener noreferrer" target="_blank">Medium</a>.<br/><br/>

              El objetivo de esta página es compartir la oferta de actividades culturales, recreativas y gastronómicas de la ciudad de Córdoba. Arte, música, museos, teatros, patrimonio arquitectónico, paseos de compras, bares y restaurantes, todo en el mismo lugar. Mostrar lugares que no todos conocen y ayudar a redescubrir rincones ocultos de la ciudad.<br/><br/>

              Si conocés otros lugares que no pueden faltar, podés <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">recomendarlos acá</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
