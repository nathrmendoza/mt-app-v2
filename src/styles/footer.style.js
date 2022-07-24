import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 20px 20px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 0 20px 9px;
  }
`
export const InnerWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const FooterLine = styled.p`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 14px; 
  line-height: 20px;
  color: #A6A6A6;

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 13px;
  }
`

export const ByLine = styled.span`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 14px; 
  line-height: 20px;
  color: #A6A6A6;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 480px) {
    position: relative;
    margin-top: 5px;
    display: block;
    font-size: 11px;
    line-height: 13px;
  }
`

export const CustomAnchor = styled.a`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 14px; 
  line-height: 20px;
  font-weight: 700;
  color: rgb(102 102 102);
  text-decoration: none;
  transition: opacity 0.15s ease;
  opacity: 0.75;
  
  &:hover {
    opacity: 1;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 13px;
  }
`