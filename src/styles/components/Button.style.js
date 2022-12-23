import styled, { css } from "styled-components";
import { ThemeColors } from "../colors.style";

export const MainButton = styled.button`
  display: inline-block;
  padding: 0;
  outline: 0;
  border: 0;
  cursor: pointer;
  padding-top: 5px;
  background: transparent;
  min-width: ${props => props.width ? props.width : '96px'};

  ${props => props.disabled && css`
    opacity: 0.5;
    pointer-events: none;
  `}
`

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100%;
`

export const ButtonShadow = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: ${ThemeColors.mShadColor};

  ${props => props.buttonType === 'removeDivider' && css`
    border-radius: 50%;
    background: rgb(192,34,18);
  `}
  ${props => props.buttonType === 'default' && css`
    background: ${ThemeColors.mShadColor};
  `}

  ${props => props.buttonType === 'secondary' && css`
    background: rgb(30 41 59);
  `}

  ${props => props.buttonType === 'green' && css`
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

  ${props => props.buttonType === 'redHasIcon' && css`
    background: rgb(192,34,18);
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
  min-width: 100%;
  background: ${ThemeColors.mainColor};

  &:hover {
    transform: translateY(0px);
  }

  ${props => props.buttonType === 'removeDivider' && css`
    border-radius: 50%;
    padding: 9px 11px 7px;
    background: rgb(217, 73, 63);

    svg {
      color: #FFFFFF;
      width: 18px;
      font-size: 18px;
    }
  `}
  ${props => props.buttonType === 'default' && css`
    background: ${ThemeColors.mainColor};
  `}
  
  ${props => props.buttonType === 'secondary' && css`
    background: rgb(255 255 255);
    border: 2px solid rgb(51 65 85);
    color: rgb(51 65 85);
  `}

  ${props => props.buttonType === 'green' && css`
    background: rgb(54, 192, 110);
  `}

  ${props => props.buttonType === 'red' && css`
    background: rgb(217, 73, 63);
  `}

  ${props => props.buttonType === 'redHasIcon' && css`
    background: rgb(217, 73, 63);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 5px;
      font-size: 12px;
      width: 12px;
    }
  `}

  ${props => props.buttonType === 'google' && css`
    background: rgb(233,66,53);
  `}

  ${props => props.buttonType === 'facebook' && css`
    background: rgb(72, 103, 170);
  `}

  ${props => props.buttonType === 'hasicon' && css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 5px;
      color: #FFFFFF;
      fill: #FFFFFF;
      font-size: 18px;
    }
  `}

`