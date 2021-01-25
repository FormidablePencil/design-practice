import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Trash from './main/Trash'
import MobileDesignPractice from './mobile-design-practice'
import MobileDesignPractice2 from './mobile-design-practice-2'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/trash' component={Trash} />
      <Route path='/mobile-design-1' component={MobileDesignPractice} />
      <Route path='/' component={MobileDesignPractice2} />
    </BrowserRouter>
  )
}

export default Routes

// const 
// kebab, camel
// no /* none */