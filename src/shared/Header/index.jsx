import React, { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import OpenMenu from '../Icons/OpenMenu';
import CloseMenu from '../Icons/CloseMenu';
import { activeTabs } from '../../const';

function Header({ data: header }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeOpenMobileMenu, setActiveOpenMobileMenu] = useState(activeTabs.NONE);

  const onMobileMenuClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onProductMenuClick = (e) => {
    e.preventDefault();
    setActiveOpenMobileMenu(activeTabs.PRODUCT);
  };

  const onDeveloperMenuClick = (e) => {
    e.preventDefault();
    setActiveOpenMobileMenu(activeTabs.DEVELOPER);
  };

  return (
    <header className="header-habitat">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
            <a className="logo" href="https://local.bsstag.com/" title="BrowserStack">
              <img
                alt="Browserstack logo"
                className="w-svg"
                height="43"
                src="https://d2drbeoe2t10g7.cloudfront.net/development/images/static/header/header-logo.svg"
                style={{ height: '43px' }}
                width="188"
              />
            </a>
            <a className="doc-search-mobile-cta doc-search-menu-icon" id="doc-menu-toggle">
              <img alt="Search logo" height="25" src="/images/static/header/ic-search.svg" width="30" />
            </a>
            <a
              href=""
              className="collapse-toggle pull-right bs-collapse-toggle"
              data-target="primary-menu"
              onClick={onMobileMenuClick}
            >
              {isMobileMenuOpen ? <CloseMenu height={18} width={18} /> : <OpenMenu height={18} width={24} />}
            </a>
            <ul className="horizontal-list product-menu">
              <li className="pull-left">
                <a className="header__product-name" href="https://local.bsstag.com/speedlab">
                  SpeedLab
                </a>
              </li>
            </ul>
          </div>
          <nav className="col-xs-12 col-md-11 col-lg-12 col-xl-12 user--signed-out primary-menu-container  no-pad pull-right">
            <ul
              className={`pull-right horizontal-list bs-collapse primary-menu ${
                activeOpenMobileMenu !== activeTabs.NONE ? 'hide' : ''
              } ${isMobileMenuOpen && activeOpenMobileMenu === activeTabs.NONE ? 'active' : ''}`}
            >
              <li className="dropdown-holder clear hide-md hide-lg hide-xl">
                <a
                  href="#"
                  className="product-dropdown-toggle forward"
                  id="product-menu-toggle-responsive"
                  data-trigger="product-responsive"
                  onClick={onProductMenuClick}
                >
                  Products<span className="account-ahead-caret"></span>
                  <div className="product-menu-animator" />
                </a>
              </li>
              <li className="dropdown-holder clear hide-md hide-lg hide-xl">
                <a
                  href="#"
                  className="product-dropdown-toggle forward"
                  id="product-menu-toggle-responsive"
                  data-trigger="developers-responsive"
                  onClick={onDeveloperMenuClick}
                >
                  Developers<span className="account-ahead-caret"></span>
                </a>
              </li>
              <li className="hide-md hide-lg hide-xl">
                <a href="https://local.bsstag.com/live-for-teams">Live for Teams</a>
              </li>
              <li className="hide-md hide-lg hide-xl">
                <a href="https://local.bsstag.com/pricing?product=live">Pricing</a>
              </li>
              <DesktopMenu header={header} />
            </ul>

            <ul
              className={`product-menu-dropdown-responsive mobile-dropdown-menu dropdown-section col-xs-12 no-pad clear primary hide-md hide-lg hide-xl ${
                activeOpenMobileMenu === activeTabs.PRODUCT ? '' : 'hide'
              }`}
              data-target="product-responsive"
            >
              <li
                className="section-title back"
                data-target="primary"
                onClick={() => setActiveOpenMobileMenu(activeTabs.NONE)}
              >
                <span className="account-behind-caret"></span>Products
              </li>
              <li className="section-head">
                <span className="product-type">Test your websites</span>
              </li>
              {header.mainNav[0].subMenu.website.menus.map(({ label, subLabel, link }) => (
                <li>
                  <a className="header-dropdown-item" href={link}>
                    <div className="dropdown-link-heading">{label}</div>
                    <div className="dropdown-link-text">{subLabel}</div>
                  </a>
                </li>
              ))}
              <li className="section-head">
                <span className="product-type">Test your mobile apps</span>
              </li>
              {header.mainNav[0].subMenu.app.menus.map(({ label, subLabel, link }) => (
                <li>
                  <a className="header-dropdown-item" href={link}>
                    <div className="dropdown-link-heading">{label}</div>
                    <div className="dropdown-link-text">{subLabel}</div>
                  </a>
                </li>
              ))}
              <li className="section-head section-head-new enterprise-section-head">
                <span className="product-type">For Teams</span>
              </li>
              <li>
                <a className="tools" href="https://local.bsstag.com/enterprise">
                  Enterprise
                </a>
              </li>
              <li className="section-head">
                <span className="product-type">Tools</span>
              </li>
              {header.mainNav[0].subMenu.tools.menus.map(({ label, link }) => (
                <li>
                  <a className="tools" href={link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <ul
              className={`developers-menu-dropdown-responsive mobile-dropdown-menu dropdown-section col-xs-12 no-pad clear primary hide-md hide-lg hide-xl ${
                activeOpenMobileMenu === activeTabs.DEVELOPER ? '' : 'hide'
              }`}
              data-target="developers-responsive"
            >
              <li
                className="section-title back"
                data-target="primary"
                onClick={() => setActiveOpenMobileMenu(activeTabs.NONE)}
              >
                <span className="account-behind-caret"></span>Developers
              </li>
              {header.mainNav[1].subMenu.map(({ label, link }) => (
                <li>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
