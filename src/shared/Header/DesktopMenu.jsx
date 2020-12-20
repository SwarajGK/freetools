import React from 'react';
import ProductSubMenu from './ProductSubMenu';
import DeveloperSubMenu from './DeveloperSubMenu';

const DesktopMenu = ({ header }) =>
  header.mainNav.map(({ label, link, subMenu }) => {
    if (label === 'Products' || label === 'Developers') {
      return (
        <li className="dropdown-holder hide-sm hide-xs" key={label}>
          <a
            href="#"
            className="product-dropdown-toggle dropdown-toggle"
            id="product-menu-toggle"
            data-target={`${label}-menu-dropdown`}
          >
            {label}
            <span className="account-down-caret" />
            <div className="product-menu-animator" />
          </a>
          {label === 'Products' && <ProductSubMenu subMenu={subMenu} />}
          {label === 'Developers' && <DeveloperSubMenu subMenu={subMenu} />}
        </li>
      );
    } else if (label === 'FREE TRIAL') {
      return (
        <li className="free-trial-link" key={label}>
          <a className="btn-secondary-white btn-md" href="/users/sign_up">
            Free Trial
          </a>
        </li>
      );
    } else if (label === 'Search') {
      return (
        <li className="no-btn icon-only" key={label}>
          <a className="doc-search-cta doc-search-menu-icon" id="doc-menu-toggle"></a>
        </li>
      );
    }
    return (
      <li className="hide-sm hide-xs" key={label}>
        <a href={link}>{label}</a>
      </li>
    );
  });

export default DesktopMenu;
