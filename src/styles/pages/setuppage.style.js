import styled, {css} from "styled-components";
import Button from "../../components/button";
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
`
export const CustomTwoColContainer = styled(TwoColContainer)`
  margin-top: 12px;
`

export const CustomLabel = styled(Label)`
  font-weight: 600;
  display: inline-block;
`

export const CustomForm = styled.form`
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
  padding-bottom: 52px;
`

export const CustomSubmit = styled(Button)`
  position: absolute;
  bottom: 0;
  right:0;
`

export const FormOverflowWrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: auto;
`

export const AddDividerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 0
`