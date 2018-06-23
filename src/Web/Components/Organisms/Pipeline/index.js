import React from 'react'
import PropTypes from 'prop-types'

import Table from '../Table'
import Steps from '../Steps'

function ShowStep (step) {
  return (
    <Steps
      {...step}
      columns={this.columns}
      editable={false}
    />
  )
}

function ListOfSteps ({ steps, columns }) {
  return (
    <div>
      {steps.map(ShowStep, { columns })}
    </div>
  )
}

function Pipeline ({ data, columns, steps }) {
	return (
    <div>
      {!!steps.length && <ListOfSteps steps={steps} columns={columns} />}
      <Table data={data} columns={columns} />
    </div>
  )
}

Pipeline.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pipeline
