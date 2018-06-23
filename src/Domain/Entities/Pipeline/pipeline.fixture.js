const Pipeline = require('./')

const employees = require('../../../Fixtures/employees.fixture.json')

function build (data) {
  return new Pipeline(data)
}

function OfEmployees () {
  return build(employees.data)
    .addColumn('name')
    .addColumn('income')
}

module.exports = {
  OfEmployees
}

