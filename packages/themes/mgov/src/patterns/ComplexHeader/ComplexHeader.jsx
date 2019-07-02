import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';

const Header = ({ logo, menuItems }) => {
  return (
    <Navbar inverse>
      <div className="m-c-navbar__section">
        <a href="/somewhere">
          <img {...logo} />
        </a>
        <div className="m-c-navbar__productName">Medicare Coverage Tools</div>
      </div>
      <div className="m-c-navbar__section m-c-navbar__section--right">
        <NavigationMenu alwaysShowMenuButton>
          {menuItems.map((item, i) => (
            <li key={i} className="m-c-navigationMenu__item">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
          <li className="m-c-navigationMenu__item">
            <hr />
          </li>
          <li className="m-c-navigationMenu__item">
            <a href="/spanish-version-of-site">Español</a>
          </li>
        </NavigationMenu>
      </div>
    </Navbar>
  );
};

export default Header;