import React from 'react';
import Responsive from 'components/common/Responsive';
import './Header.scss';

const Header = () => (
  <header className="base header">
    <Responsive className="header-wrapper">
      <h2>
        ICO contributions
      </h2>
    </Responsive>
  </header>
);

export default Header;
