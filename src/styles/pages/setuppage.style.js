import styled, {css} from "styled-components";
import { ThemeColors } from "../colors.style";
import { Label } from "../typography.style";
import { TwoColContainer } from "./authenticationpage.style";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  padding: 42px 18px 42px 24px;
  border-radius: 10px;
  border: 1px solid rgb(58,58,58, 0.15);
  box-shadow: rgba(58,58,58,0.25) 0px 4px 10px 0px; 

`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${ThemeColors.offWhite};
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${ThemeColors.lighterGray};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${ThemeColors.lighterGray};
  }
`
export const CustomTwoColContainer = styled(TwoColContainer)`
  margin-top: 12px;
`

export const CustomLabel = styled(Label)`
  font-weight: 600;
  display: inline-block;
`