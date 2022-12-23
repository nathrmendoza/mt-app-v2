import styled from "styled-components";
import Button from "../../components/button";
import Input from "../../components/input";
import { ThemeColors } from "../colors.style";

export const DividerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 40px;
  position: relative;
  padding: 24px 0;
  border-bottom: 1px dashed ${ThemeColors.lightGray};
`
export const RemoveDivider = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
`

export const Left = styled.div`
  position: relative;
  padding-bottom: 56px;
`

export const Right = styled.div`
  
`

export const NameInput = styled.input`
  font-size: 24px;
  line-height: 36px;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-style: italic;
`