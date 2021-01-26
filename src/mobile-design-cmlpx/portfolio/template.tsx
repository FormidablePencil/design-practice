import React from 'react'
import { MyStocks } from '.'
import './index.scoped.sass'

// interface Stock {
//   title: string
//   percent: number
//   value: number
//   percentOfPortfolio: string
// }

function template({ myStocks }: { myStocks: MyStocks }) {
  return (
    <div className="container">
      <div className="top-bar">
        <h1>Portfolio</h1>
        <p className="view-all">View all</p>
      </div>
      <div className="row">
        <DisplayMyStocks myStocks={myStocks} />
      </div>
    </div>
  )
}

const DisplayMyStocks = ({ myStocks }: { myStocks: MyStocks }) =>
  <>
    {myStocks.map((stock) =>
      <div className="stock-container">
        <div className="first-section">
          <h4>{stock.title}</h4>
          <span>{stock.percent}</span>
        </div>
        <div className="graph" />
        <div className="info-container">
          <p className="price">{stock.percent}</p>
          <p className="percent-of-portfolio">{stock.percentOfPortfolio}% of your portfolio</p>
        </div>

      </div>
    )}
  </>

// ctrl + up/down for 10 line jumps

export default template
