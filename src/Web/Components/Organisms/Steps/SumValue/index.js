import React from 'react'
import PropTypes from 'prop-types'
import NumericInput from 'react-numeric-input'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

function SumValueStep ({ column, options, value, editable }) {
  return (
    <div>
      Into <Select
        value={column}
        options={options}
        clearable={false}
        disabled={!editable}
      />
      Sum <NumericInput
        value={value}
        precision={2}
        step={0.01}
        disabled={!editable}
      />
    </div>
  )
}

SumValueStep.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number.isRequired,
  editable: PropTypes.bool.isRequired,
  column: PropTypes.string
}

export default SumValueStep
