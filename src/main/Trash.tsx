import React from 'react'
import Progress from './progress'
import './index.scoped.sass'
import CommandsLearn from '../commands-learn'

function Trash() {

  return (
    <div className="container">
      <Progress /> {/*  C/ */}
      <CommandsLearn />
    </div>
  )
}

export default Trash
