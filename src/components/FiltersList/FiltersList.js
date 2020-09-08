import React from 'react'

import './FiltersList.scss'

const FiltersList = function (props) {
  return (
    <div className='FiltersList'>
      { props.children }
    </div>
  )
}

export default FiltersList
