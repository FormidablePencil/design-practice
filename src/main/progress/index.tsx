import React, { useState } from 'react'
// import { Container, ProgressBar, ProgressStatus, Button } from './index.module.sass'
import './index.scoped.sass'
import template from './template'

function Progress() { /* ctrl + up/down to nav */
  const [progressValue, setProgressValue] = useState(20)
  // const someFunc = () => console.log('someFunc')
  const inc: any = (num) => setProgressValue(prev => prev + num)
  const dec = (num) => setProgressValue(prev => prev - num)

  return template({ progressValue, inc, dec })
}

export default Progress
