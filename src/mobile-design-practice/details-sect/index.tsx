import template from './template'

const apiInfo = {
  balance: 34324.23,
  percentUpBy: 10,
  dollarUpBy: 21.232
}

function DetailsSect() {
  return template(apiInfo)
}

export default DetailsSect
