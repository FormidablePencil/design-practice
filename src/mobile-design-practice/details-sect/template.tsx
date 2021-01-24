
import React from 'react'
import './index.scoped.sass'

/* first */
function template({ balance, percentUpBy, dollarUpBy }) {
  return (
    /* second */
    <div className="container">

      <div className="balance">
        <h2>Total Balance</h2>
        <p>${balance}</p>
      </div>

      <div className="stocks-doing">
        <p>+{dollarUpBy}</p>
        <p>{percentUpBy}</p>
      </div>

      <div className="action-btns-container">
        <button className="buy">Buy</button>
        <button className="sell">Sell</button>
      </div>

    </div>

  )
}

export default template
