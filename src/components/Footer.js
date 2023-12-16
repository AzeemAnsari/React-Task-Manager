import React from 'react';

import { FooterContainer } from './Styles';

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} -{' '}
      <a href="https://www.azeemansari.me" target="_blank" rel="noreferrer">
        Azeem Ansari
      </a>
    </FooterContainer>
  );
};

export default Footer;
