import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Trash from './main/Trash'
import MobileDesignPractice from './mobile-design-practice'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/trash' component={Trash} />
      <Route path='/' component={MobileDesignPractice} />
    </BrowserRouter>
  )
}

export default Routes

// const 
// kebab, camel
// no /* none */