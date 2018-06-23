import React from 'react'
import PropTypes from 'prop-types'

import Table from '../Table'

function Pipeline ({ data, columns }) {
	return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  )
}

Pipeline.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pipeline
