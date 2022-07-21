import React from 'react'
import { Anchor, ByLine, FooterContainer, FooterLine, InnerWrapper } from '../styles/footer.style'


const Footer = () => (
  <FooterContainer>
    <InnerWrapper>
      <FooterLine>© 2022 MT App. All Rights Reserved.</FooterLine> 
      <ByLine>Website by <Anchor href="https://thanrx.com/" target="_blank" rel="noreferrer">thanrx</Anchor></ByLine>
    </InnerWrapper>
  </FooterContainer>
)

export default Footer