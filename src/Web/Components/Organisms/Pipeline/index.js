import React from 'react'
import PropTypes from 'prop-types'

import Table from '../Table'
import Steps from '../Steps'

function ShowStep (step, index) {
  return (
    <React.Fragment key={index}>
      <details>
        <summary>
          Step #{index + 1}
        </summary>
        <Steps
          {...step}
          columns={this.columns}
          editable={false}
        />
      </details>
      <br />
    </React.Fragment>
  )
}

function ListOfSteps ({ steps, columns }) {
  return (
    <div>
      {steps.map(ShowStep, { columns })}
    </div>
  )
}

function Pipeline ({ original, data, columns, steps }) {
	return (
    <div>
      <div>
        <header>Source</header>
        <Table data={original} columns={columns} />
      </div>
      <br />
      {!!steps.length && <ListOfSteps steps={steps} columns={columns} />}
      <br />
      <div>
        <header>Final</header>
        <Table data={data} columns={columns} />
      </div>
    </div>
  )
}

Pipeline.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  original: PropTypes.arrayOf(PropTypes.object).isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pipeline
