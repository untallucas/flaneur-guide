import React from 'react'

import './PageLayoutLinksBlock.scss'

const PageLayoutLinksBlock = props => {
  if (props.content) {
    return (
      <div className='PageLayoutLinksBlock'>
        <h2 className='PageLayoutLinksBlock__Title'>{ props.title }</h2>
        <ul>
        { Boolean( props.content.web ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Sitio web</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ props.content.web }>{ props.content.web }</a></div>
          </li>
        )}

        { Boolean( props.content.tel ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Teléfono</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'tel:' + props.content.tel }>{ props.content.tel }</a></div>
          </li>
        )}

        { Boolean( props.content.whatsapp ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>WhatsApp</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'whatsapp:' + props.content.whatsapp }>{ props.content.whatsapp }</a></div>
          </li>
        )}

        { Boolean( props.content.email ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Email</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'mailto:' + props.content.email }>{ props.content.email }</a></div>
          </li>
        )}

        { Boolean( props.content.instagram ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Instagram</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.instagram.com/' + props.content.instagram }>{ props.content.instagram }</a></div>
          </li>
        )}

        { Boolean( props.content.twitter ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Twitter</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.twitter.com/' + props.content.twitter }>{ props.content.twitter }</a></div>
          </li>
        )}

        { Boolean( props.content.facebook ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Facebook</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.facebook.com/' + props.content.facebook }>{ props.content.facebook }</a></div>
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
