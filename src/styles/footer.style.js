import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 30px 20px;
  text-align: center;
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
`

export const ByLine = styled.span`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 14px; 
  line-height: 20px;
  color: #A6A6A6;
  position: absolute;
  right: 0;
  top: 0;
`

export const Anchor = styled.a`
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 14px; 
  line-height: 20px;
  font-weight: 500;
  color: rgb(102 102 102);
  text-decoration: none;
  transition: opacity 0.15s ease;
  
  &:hover {
    opacity: 0.75;
  }
`