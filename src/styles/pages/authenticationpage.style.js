import styled from "styled-components";
import { Heading4, Paragraph } from "../typography.style";

export const Container = styled.div`
  width: 100%;
  max-width: 478px;
  min-height: 380px;
  padding: 42px 24px;
  border-radius: 10px;
  border: 1px solid rgb(58,58,58, 0.15);
  box-shadow: rgba(58,58,58,0.25) 0px 4px 10px 0px; 

  @media (max-width: 480px) {
    padding: 42px 24px 32px;
    min-height: 441px;
  }
`

export const TwoColContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 15px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const SignInDivider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 14px;
  margin: 24px 0 16px;
  font-weight: 600;
  color: rgba(58,58,58,0.75);

  &:before, &:after {
    content: '';
    dispaly: inline-block;
    width: calc(50% - 64px);
    height: 1px;
    background: rgba(58,58,58,0.25);
  }
`

export const LineDivider = styled.div`
  dispaly: inline-block;
  width: 100%;
  height: 1px;
  background: rgba(58,58,58,0.25);
  margin: 24px 0 16px;

`

export const CustomHeading = styled(Heading4)`
  color: rgb(30 41 59);
`

export const CustomParagraph = styled(Paragraph)`
  color: rgb(30 41 59);
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignment ? props.alignment : 'space-evenly'};

  @media (max-width: 480px) {
    flex-direction: column;
    button {
      margin-bottom: 8px;
    }
    button:last-child {
      margin-bottom: 0px;
    }
  }
`

export const SubmitContainer = styled.div`
  button {
    min-width: 120px;
  }
`

export const CustomToggle = styled.span`
  color: rgb(30 64 175);
  cursor: pointer;
  transition: opacity 0.15s ease;
  text-decoration: underline;
  &:hover {
    opacity: 0.75;
  }
`