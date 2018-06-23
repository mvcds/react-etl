import React from 'react'
import PropTypes from 'prop-types'

import Steps from './index'

function toOptions ({ Header, accessor }) {
  return {
    label: Header,
    value: accessor
  }
}

function StepsOptions ({ columns, ...rest }) {
  const options = columns.map(toOptions)

  return <Steps {...rest} options={options} />
}

StepsOptions.propTypes = {
  payload: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default StepsOptions
