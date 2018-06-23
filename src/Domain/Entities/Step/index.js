const TYPES = {
  SUM_VALUE: require('./SumValueStep')
}

function perform (payload, step, data) {
  return data.map(step, payload)
}

function Step ({ type, payload }) {
  const step = TYPES[type]

  this.perform = perform.bind(null, payload, step)
}

module.exports = Step
