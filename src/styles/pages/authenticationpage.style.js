import styled from "styled-components";
import { ThemeColors } from "../colors.style";
import { Heading4, Paragraph } from "../typography.style";

export const Container = styled.div`
  width: 100%;
  max-width: 481px;
  min-height: 491px;
  padding: 40px;
  border-radius: 8px;
  border: 1px solid rgb(58, 58, 58, 0.15);
  box-shadow: rgba(58, 58, 58, 0.25) 0px 0px 10px 0px;

  @media (max-width: 480px) {
    padding: 0;
    min-height: 441px;
    box-shadow: none;
    border: none;
  }
`;

export const OneColContainer = styled.div`
  width: 100%;
  display: block;
  input {
    width: 100%;
  }
`;

export const TwoColContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 15px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SignInDivider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 14px;
  margin: 32px 0 24px;
  font-weight: 600;
  color: rgba(58, 58, 58, 0.75);

  &:before,
  &:after {
    content: "";
    dispaly: inline-block;
    width: calc(50% - 64px);
    height: 1px;
    background: rgba(58, 58, 58, 0.25);
  }
`;

export const LineDivider = styled.div`
  dispaly: inline-block;
  width: 100%;
  height: 1px;
  background: rgba(58, 58, 58, 0.25);
  margin: 24px 0 16px;
`;

export const CustomHeading = styled(Heading4)`
  color: rgb(30 41 59);
  text-align: center;
`;

export const CustomParagraph = styled(Paragraph)`
  color: rgb(30 41 59);
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.alignment ? props.alignment : "space-evenly"};

  @media (max-width: 480px) {
    flex-direction: column;
    button {
      margin-bottom: 8px;
    }
    button:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const SubmitContainer = styled.div`
  button {
    min-width: 180px;
    margin: 0 auto;
    display: block;
  }
`;

export const CustomToggle = styled.span`
  color: #299253;
  cursor: pointer;
  transition: opacity 0.15s ease;
  text-decoration: underline;
  &:hover {
    opacity: 0.75;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 36px;
`;

export const LogoText = styled(Paragraph)`
  font-size: 14px;
  line-height: 18px;
  font-style: italic;
  font-weight: 500;
  color: ${ThemeColors.lightGray}
  text-align: center;
`;

export const TermsPolicy = styled(Paragraph)`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;
