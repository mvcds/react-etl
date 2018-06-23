const Step = require('./')

function build (type, payload) {
  return new Step({
    type,
    payload
  })
}

function SumValue ({ column, value }) {
  return build('SUM_VALUE', { column, value })
}

module.exports = {
  SumValue
}
