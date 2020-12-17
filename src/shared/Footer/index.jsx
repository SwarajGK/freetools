import React, { useState } from 'react';

function Footer({ data: footer }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuClick = () => setIsMenuOpen(!isMenuOpen);
  return (
    <footer className="bg-inverse footer-habitat">
      <div className="container">
        <div className="row footer-top-section">
          {footer.links.map(({ label, menu }) => (
            <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2" id="footer-products" key={label}>
              <h6>{label}</h6>
              <ul className="vertical-list footer-menu">
                {menu.map(({ label: menuLabel, link: menuLink, isNew, isHiring }) => (
                  <li key={menuLabel}>
                    <a href={menuLink}>{menuLabel}</a>
                    {isNew && (
                      <a href={menuLink} className="btn-badge btn-primary" target="">
                        New!
                      </a>
                    )}
                    {isHiring && (
                      <a href={menuLink} className="btn-badge btn-primary" target="">
                        We're hiring!
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-xs-12 col-md-4 col-lg-8 col-xl-8 footer-brand-container">
            <a className="brand" href="/">
              <img alt="Browserstack logo" className="w-svg" height="47" src={footer.logo} width="219" />
            </a>
          </div>
          <div className="col-sm-12" id="footer-dropdown-links">
            <article className="footer-dropdown">
              <div className="footer-dropdown-row">
                <div className="col-xs-12 footer-dropdown-container">
                  <span className="dropdown-heading" onClick={onMenuClick}>
                    {footer.doMore.label}
                  </span>
                  {isMenuOpen && (
                    <div className="dropdown-content">
                      <span className="dropdown-sub-content">
                        <ul className="footer-dropdown-menu">
                          {footer.doMore.links.map(({ label, link }) => (
                            <li className="menu-item" key={label}>
                              <a href={link}>{label}</a>
                            </li>
                          ))}
                        </ul>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="row footer-bottom-section">
          <div className="col-xs-12 col-md-6 col-lg-8 col-xl-8 copyright">
            <p>{footer.bottom.label}</p>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-8 col-xl-8" id="footer-legal-list">
            <ul className="horizontal-list legal">
              {footer.bottom.links.map(({ label, link }) => (
                <li key={label}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
