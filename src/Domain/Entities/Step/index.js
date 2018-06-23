const TYPES = {
  SUM_VALUE: require('./SumValueStep')
}

function perform (payload, step, rows) {
  return rows.map(step, payload)
}

function Step ({ type, payload }) {
  const step = TYPES[type]

  this.perform = perform.bind(null, payload, step)
  this.type = type
  this.payload = payload
}

module.exports = Step
