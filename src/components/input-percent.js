import React from 'react'
import { PercentRangeInput } from '../styles/components/percentRange.styles'

const InputPercent = ({...options}) =>  (
  <PercentRangeInput type="range" {...options} />
)

export default InputPercent