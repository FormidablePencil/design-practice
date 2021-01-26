import React from 'react'
import './index.scoped.sass'

function template({ balance, percentUpBy }) {
  return (
    <div className="container">
      <div className="balance-container">
        <h4>Your Balance</h4>
        <p className="balance">${balance}</p>
      </div>

      <div className="up-by-container">
        <span className="percent">+{percentUpBy}%</span>
        <div className="graph" />
      </div>
    </div>
  )
}

export default template
