import React from 'react'

function template({ progressValue, dec, inc }) {
  return (
    <div>
      <div className='progress-bar'>
        <div style={{ width: `${progressValue}%` }} className='progress-status' />
      </div>
      <div className="btn-container">
        <button className='button' onClick={() => dec(10)}>increment</button> {/* cmd + ; select specific tag */}
        <button className='button' onClick={() => inc(10)}>decrement</button>
      </div>
    </div>
  )
}

export default template
