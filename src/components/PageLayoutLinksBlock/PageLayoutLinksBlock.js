import React from 'react'

import './PageLayoutLinksBlock.scss'

const PageLayoutLinksBlock = props => {
  if (props.web || props.tel || props.email || props.facebook || props.twitter || props.instagram || props.snapchat || props.whatsapp || props.foursquare || props.swarm || props.yelp || props.tripadvisor) {
    return (
      <div className='PageLayoutLinksBlock'>
        <h2 className='PageLayoutLinksBlock__Title'>{ props.title }</h2>
        <ul>
        { Boolean( props.web ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Sitio web</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ props.web }>{ props.web }</a></div>
          </li>
        )}

        { Boolean( props.tel ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Teléfono</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'tel:' + props.tel }>{ props.tel }</a></div>
          </li>
        )}

        { Boolean( props.whatsapp ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>WhatsApp</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'whatsapp:' + props.whatsapp }>{ props.whatsapp }</a></div>
          </li>
        )}

        { Boolean( props.email ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Email</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'mailto:' + props.email }>{ props.email }</a></div>
          </li>
        )}

        { Boolean( props.instagram ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Instagram</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.instagram.com/' + props.instagram }>{ props.instagram }</a></div>
          </li>
        )}

        { Boolean( props.twitter ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Twitter</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.twitter.com/' + props.twitter }>{ props.twitter }</a></div>
          </li>
        )}

        { Boolean( props.facebook ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>Facebook</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.facebook.com/' + props.facebook }>{ props.facebook }</a></div>
          </li>
        )}

        { Boolean( props.foursquare ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>foursquare</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.foursquare.com/' + props.foursquare }>{ props.foursquare }</a></div>
          </li>
        )}

        { Boolean( props.yelp ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>yelp</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.yelp.com/' + props.yelp }>{ props.yelp }</a></div>
          </li>
        )}

        { Boolean( props.swarm ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>swarm</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.swarm.com/' + props.swarm }>{ props.swarm }</a></div>
          </li>
        )}

        { Boolean( props.tripadvisor ) && (
          <li className='PageLayoutLinksBlock__Item'>
            <div className='PageLayoutLinksBlock__Item__Label'>tripadvisor</div>
            <div className='PageLayoutLinksBlock__Item__Value'><a className='PageLayoutLinksBlock__Item__Value__Link' href={ 'https://www.tripadvisor.com/' + props.tripadvisor }>{ props.tripadvisor }</a></div>
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
