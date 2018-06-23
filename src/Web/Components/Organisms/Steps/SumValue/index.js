import React from 'react'
import PropTypes from 'prop-types'
import NumericInput from 'react-numeric-input'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

function SumValueStep ({ selected, columns, value }) {
  return (
    <div>
      Into <Select value={selected} options={columns} clearable={false} />
      Sum <NumericInput value={value} precision={2} step={0.01} />
    </div>
  )
}

SumValueStep.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number.isRequired,
  selected: PropTypes.string
}

export default SumValueStep
