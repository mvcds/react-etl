import React, { Component } from 'react'

import Pipeline from './index'

class PipelineState extends Component {
  render () {
    const { data, columns } = this.props.model

    return (
      <Pipeline
        data={data}
        columns={columns}
      />
    )
  }
}

export default PipelineState
