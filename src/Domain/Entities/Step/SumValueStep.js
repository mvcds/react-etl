function SumValueStep (data) {
  const value = data[this.column]

  return {
    ...data,
    [ this.column ]: value + this.value
  }
}

module.exports = SumValueStep
