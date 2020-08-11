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
            <span>Sitio web:</span> <a href={ props.content.web }>{ props.content.web }</a>
          </li>
        )}

        { Boolean( props.content.tel ) && (
          <li>
            <span>Teléfono:</span> <a href={ 'tel:' + props.content.tel }>{ props.content.tel }</a>
          </li>
        )}

        { Boolean( props.content.whatsapp ) && (
          <li>
            <span>WhatsApp:</span> <a href={ 'whatsapp:' + props.content.whatsapp }>{ props.content.whatsapp }</a>
          </li>
        )}

        { Boolean( props.content.email ) && (
          <li>
            <span>Email:</span> <a href={ 'mailto:' + props.content.email }>{ props.content.email }</a>
          </li>
        )}

        { Boolean( props.content.instagram ) && (
          <li>
            <span>Instagram:</span> <a href={ 'https://www.instagram.com/' + props.content.instagram }>{ props.content.instagram }</a>
          </li>
        )}

        { Boolean( props.content.twitter ) && (
          <li>
            <span>Twitter:</span> <a href={ 'https://www.twitter.com/' + props.content.twitter }>{ props.content.twitter }</a>
          </li>
        )}

        { Boolean( props.content.facebook ) && (
          <li>
            <span>Facebook:</span> <a href={ 'https://www.facebook.com/' + props.content.facebook }>{ props.content.facebook }</a>
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
