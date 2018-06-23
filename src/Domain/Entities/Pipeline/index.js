function Pipeline (data) {
  this.data = data
  this.steps = []
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
}

Object.defineProperty(Pipeline.prototype, 'result', { get: getResult })

module.exports = Pipeline
