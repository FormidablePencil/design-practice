import React from 'react'
import Progress from './progress'
import './index.scoped.sass'
import CommandsLearn from '../commands-learn'

function Main() {

  return (
    <div className="container">
      <Calculator />
      <Progress /> {/*  C/ */}
      <CommandsLearn />
    </div>
  )
}

export default Main
