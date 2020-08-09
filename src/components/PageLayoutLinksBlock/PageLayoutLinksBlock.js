import React from 'react'

import './PageLayoutLinksBlock.scss'

const PageLayoutLinksBlock = props => {
  if (props.content) {
    return (
      <div className="PageLayoutLinksBlock">
        <h2>{ props.title }</h2>

        <ul>
        { Boolean( props.content.web ) && (
          <li>
            <span>Sitio web:</span> { props.content.web }
          </li>
        )}

        { Boolean( props.content.tel ) && (
          <li>
            <span>Teléfono:</span> { props.content.tel }
          </li>
        )}

        { Boolean( props.content.whatsapp ) && (
          <li>
            <span>WhatsApp:</span> { props.content.whatsapp }
          </li>
        )}

        { Boolean( props.content.email ) && (
          <li>
            <span>Email:</span> { props.content.email }
          </li>
        )}

        { Boolean( props.content.instagram ) && (
          <li>
            <span>Instagram:</span> { props.content.instagram }
          </li>
        )}

        { Boolean( props.content.twitter ) && (
          <li>
            <span>Twitter:</span> { props.content.twitter }
          </li>
        )}

        { Boolean( props.content.facebook ) && (
          <li>
            <span>Facebook:</span> { props.content.facebook }
          </li>
        )}
        </ul>
      </div>
    )
  }
  else {
    return null
  }
}

export default PageLayoutLinksBlock
