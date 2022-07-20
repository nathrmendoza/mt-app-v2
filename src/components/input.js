import React from 'react'
import { FormInput } from '../styles/components/Input.styles'

const Input = ({label, ...options}) => (
  <FormInput placeholder={label} {...options}/>
)

export default Input