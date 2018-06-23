import React, { Component } from 'react'

import Pipeline from './index'

class PipelineState extends Component {
  render () {
    const { data, columns, steps, result } = this.props.model

    return (
      <Pipeline
        original={data}
        data={result}
        columns={columns}
        steps={steps}
      />
    )
  }
}

export default PipelineState
