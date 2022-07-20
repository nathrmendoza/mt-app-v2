import React from 'react'
import { MainButton, ButtonAbove, ButtonShadow, Wrapper} from '../styles/components/Button.style'

const Button = ({children, buttonType='default', ...otherOptions}) => {

  return (
    <MainButton {...otherOptions} >
      <Wrapper>
        <ButtonShadow buttonType={buttonType} />
        <ButtonAbove buttonType={buttonType}>{children}</ButtonAbove>
      </Wrapper>
    </MainButton>
  )
}

export default Button