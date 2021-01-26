import template from './template'

const myStocks = [
  { title: 'Tesla', percent: 90, value: 34567, percentOfPortfolio: 10 },
  { title: 'Samsung', percent: 10, value: 4567, percentOfPortfolio: 20 },
  { title: 'Swag', percent: 4, value: 567, percentOfPortfolio: 50 },
]
export type MyStocks = typeof myStocks;

function Portfolio() {

  return template({ myStocks })
}

export default Portfolio
