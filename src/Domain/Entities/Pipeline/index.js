function Pipeline (data) {
  this.data = data
  this.steps = []
  this.columns = []
}

function performStep (final, step) {
  return step.perform(final)
}

function getResult () {
  const result = this.steps.reduce(performStep, this.data)

  return result
}

Pipeline.prototype.addStep = function (step) {
  this.steps = [ ...this.steps, step ]

  return this
}

Pipeline.prototype.addColumn = function (column) {
  const newColumn = {
    Header: column,
    accessor: column
  }

  this.columns = [ ...this.columns, newColumn ]

  return this
}

Object.defineProperty(Pipeline.prototype, 'result', { get: getResult })

module.exports = Pipeline
