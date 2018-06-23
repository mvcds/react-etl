import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'

import 'react-table/react-table.css'

function Table ({ data, columns }) {
	return (
    <ReactTable
      data={data}
      columns={columns}
      loading={false}
      showPagination={false}
      showPaginationBottom={false}
      showPageSizeOptions={false}
      minRows={0}
    />
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Table
