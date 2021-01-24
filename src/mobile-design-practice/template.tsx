import React from 'react'
import Converter from './converter'
import DetailsSect from './details-sect'
import './index.scoped.sass'

function template() {
  return (
    <div className="container">
      <DetailsSect />
      <Converter />
    </div>
  )
}

export default template

