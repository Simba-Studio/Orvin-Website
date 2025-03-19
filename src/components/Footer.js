import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  text-align: center;
  font-size: 14px;
  color:#f8f9fa
  z-index: 10;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>© {currentYear} Orvin - All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
