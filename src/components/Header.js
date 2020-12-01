import React from 'react';
import { TopHeader } from './Styles';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <TopHeader>
      <img src={Logo} alt="Azeem Ansari" />
      <a href="https://github.com/AzeemAnsari" target="_blank" rel="noreferrer">
        <i className="fa fa-github"></i>
      </a>
    </TopHeader>
  );
};

export default Header;
