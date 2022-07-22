import styled, {css} from "styled-components";

export const FormInput = styled.input`
  display: inline-block;
  width: ${props => props.width ? props.width : 'auto'};
  border-radius: 30px;
  padding: 10px 24px 10px 16px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #5c5c5c;
  border: 2px solid rgb(51 65 85);
  box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.15) inset;
  margin-bottom: 10px;
  
  &::placeholder {
    color: #a6a6a6;
  }
  
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  ${props => props.disabled && css`
    opacity: 0.7;
    pointer-events: none;
  `}
`