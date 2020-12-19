import React from 'react';

function DeveloperSubMenu({ subMenu }) {
  return (
    <ul className="dropdown-menu dev-dropdown-menu" id="dev-menu-dropdown">
      {subMenu.map(({ label, link, data }) => (
        <li key={label}>
          <a href={link} {...data}>{label}</a>
        </li>
      ))}
    </ul>
  );
}

export default DeveloperSubMenu;
