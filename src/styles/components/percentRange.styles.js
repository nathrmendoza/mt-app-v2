import styled from "styled-components";
import { ThemeColors } from "../colors.style";

export const PercentRangeInput = styled.input`
  outline: 0;
  border: 0;
  border-radius: 500px;
  width: 400px;
  max-width: 100%;
  margin: 24px 0 16px;
  transition: box-shadow 0.2s ease-in-out;

  & {
    overflow: hidden;
    height: 40px;
    -webkit-appearance: none;
    background-color: ${ThemeColors.offWhite};
  }
  &::-webkit-slider-runnable-track {
    height: 40px;
    -webkit-appearance: none;
    color: #444;
    // margin-top: -1px;
    transition: box-shadow 0.2s ease-in-out;
  }
  &::-webkit-slider-thumb {
    width: 40px;
    -webkit-appearance: none;
    height: 40px;
    cursor: ew-resize;
    background: #fff;
    box-shadow: -340px 0 0 320px ${ThemeColors.mainColor}, inset 0 0 0 40px ${ThemeColors.mShadColor};
    border-radius: 50%;
    position: relative;
  }
  
  &::-moz-range-progress {
    background-color: #43e5f7; 
  }
  &::-moz-range-track {  
    background-color: #9a905d;
  }
  // IE
  &::-ms-fill-lower {
    background-color: #43e5f7; 
  }
  &::-ms-fill-upper {  
    background-color: #9a905d;
  }
`