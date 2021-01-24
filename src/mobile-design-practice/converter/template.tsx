import React from 'react'
import './index.scoped.sass'

function template({ amountSent, amountReceived }) {
  return (
    <div className="container">
      <h2>Converter</h2>
      <Transaction amount={amountReceived} title='You sent' />
        <div className="refresh-icon">()</div>
      <Transaction amount={amountSent} title='You got' />

      <button className="convert">Convert now</button>
    </div>
  )
}

const Transaction = ({ amount, title }) => {
  return (
    <div className="transaction-container">
      <h5>{title}</h5>
      <div className="row">
        <p className="amount">{amount}</p>
        <div className="btns-container">
          <button className="first-btn">1</button>
          <button className="second-btn">ETH</button>
        </div>
      </div>
    </div>
  )
}

export default template
