import template from './template'

export const transaction = { amountReceived: 10.21, amountSent: 212.21 }
function Converter() {

  return template(transaction)
}

export default Converter
