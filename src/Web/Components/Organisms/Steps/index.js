import React from 'react'
import PropTypes from 'prop-types'

import SumValue from './SumValue'

const STEPS = {
  SUM_VALUE: SumValue
}

function Steps ({ type, payload, options, editable }) {
  const Component = STEPS[type]

  return <Component {...payload} options={options} editable={editable} />
}

Steps.propTypes = {
  payload: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Steps
