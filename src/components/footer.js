import React from 'react'
import { ByLine, CustomAnchor, FooterContainer, FooterLine, InnerWrapper } from '../styles/footer.style'


const Footer = () => (
  <FooterContainer>
    <InnerWrapper>
      <FooterLine>© 2022 MT App. All Rights Reserved.</FooterLine> 
      <ByLine>Website by <CustomAnchor href="https://thanrx.com/" target="_blank" rel="noreferrer">thanrx</CustomAnchor></ByLine>
    </InnerWrapper>
  </FooterContainer>
)

export default Footer