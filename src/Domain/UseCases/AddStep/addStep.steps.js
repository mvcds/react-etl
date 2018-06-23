const fs = require('fs')
const assert = require('assert')
const { random } = require('faker')

const { Given, When, Then } = require('cucumber')

const Pipeline = require('Domain/Entities/Pipeline/pipeline.fixture')
const Steps = require('Domain/Entities/Step/step.fixture')

Given('I use the {string} fixture', function (fixture) {
  this.pipeline = Pipeline[fixture]()
})

When('I sum some value to their {string}', function (column) {
  this.value = random.number()
  this.column = column

  const step = Steps.SumValue({ column, value: this.value })

  this.pipeline.addStep(step)
})

Then('the result will be increased by that value', function () {
  const { pipeline, column, value } = this

  pipeline.result.forEach(({ income }, i) => {
    const expectation = pipeline.data[i].income + value

    assert.equal(income, expectation, `Unexpected "${column}"`)
  })
})
