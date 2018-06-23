function SumValueStep (row) {
  const value = row[this.column]

  return {
    ...row,
    [ this.column ]: value + this.value
  }
}

module.exports = SumValueStep
