import styled, { css } from "styled-components";

export const MainButton = styled.button`
  display: inline-block;
  padding: 0;
  outline: 0;
  border: 0;
  cursor: pointer;
  padding-top: 5px;
  background: transparent;
`

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const ButtonShadow = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;

  ${props => props.buttonType === 'default' && css`
    background: rgb(33,169,87);
  `}

  ${props => props.buttonType === 'red' && css`
    background: rgb(192,34,18);
  `}

  ${props => props.buttonType === 'google' && css`
    background: rgb(199, 55, 44);
  `}

  ${props => props.buttonType === 'facebook' && css`
    background: rgb(56, 80, 133);
  `}

`

export const ButtonAbove = styled.span`
  display: inline-block;
  color: #FFFFFF;
  border-radius: 6px;
  padding: 10px 12px;
  transform: translateY(-5px);
  transition: transform 0.15s ease;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 600;

  &:hover {
    transform: translateY(0px);
  }

  ${props => props.buttonType === 'default' && css`
    background: rgba(54, 192, 110);
  `}

  ${props => props.buttonType === 'red' && css`
    background: rgb(217, 73, 63);
  `}

  ${props => props.buttonType === 'google' && css`
    background: rgb(233,66,53);
  `}

  ${props => props.buttonType === 'facebook' && css`
    background: rgb(72, 103, 170);
  `}

`