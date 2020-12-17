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

function Footer1() {
  return (
    <footer className="bg-inverse footer-habitat">
      <div className="container">
        <div className="row footer-top-section">
          <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2" id="footer-products">
            <h6>Products</h6>
            <ul className="vertical-list footer-menu">
              <li>
                <a href="https://local.bsstag.com/live">Live</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/automate">Automate</a>
              </li>
              <li>
                <a href="/percy">Percy</a>
                <a href="/percy" className="btn-badge btn-primary" target="">
                  New!
                </a>
              </li>
              <li>
                <a className="app-live-link" href="https://local.bsstag.com/app-live">
                  App Live
                </a>
                <a href="https://local.bsstag.com/app-live" className="" target=""></a>
              </li>
              <li>
                <a className="app-automate-link" href="https://local.bsstag.com/app-automate">
                  App Automate
                </a>{' '}
                <a href="https://local.bsstag.com/app-automate" className="" target=""></a>
              </li>
              <li>
                <a href="https://local.bsstag.com/screenshots">Screenshots</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/responsive">Responsive</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/enterprise">Enterprise</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/speedlab">SpeedLab</a>{' '}
                <a href="https://local.bsstag.com/speedlab" className="btn-badge btn-primary" target="">
                  New!
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2" id="footer-platform">
            <h6>Platform</h6>
            <ul className="vertical-list footer-menu">
              <li>
                <a href="https://local.bsstag.com/list-of-browsers-and-platforms?ref=footer">Browsers &amp; Devices</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/data-centers">Data Centers</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/mobile-features?ref=footer">Mobile Features</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/security">Security</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2" id="footer-resources">
            <h6>Resources</h6>
            <ul className="vertical-list footer-menu">
              <li>
                <a href="https://local.bsstag.com/test-on-the-right-mobile-devices?ref=footer">Test on Right Devices</a>
              </li>
              <li>
                <a
                  data-href="https://local.bsstag.com/support"
                  href="https://local.bsstag.com/support"
                  id="support_footer"
                  title="Support"
                >
                  Support
                </a>
              </li>
              <li>
                <a href="https://status.browserstack.com">Status</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/release-notes">Release Notes</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/case-study">Case Studies</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/events">Events</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2" id="footer-company">
            <h6>Company</h6>
            <ul className="vertical-list footer-menu">
              <li>
                <a href="https://local.bsstag.com/company">About Us</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/customers">Customers</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/careers">Careers</a>{' '}
                <a href="https://local.bsstag.com/careers" className="btn-badge btn-primary" target="">
                  We're hiring!
                </a>
              </li>
              <li>
                <a href="https://local.bsstag.com/open-source?ref=footer">Open Source</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/partners">Partners</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/press">Press</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/contact?ref=footer">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4" id="footer-social">
            <h6>Social</h6>
            <ul className="horizontal-list footer-menu social-menu">
              <li>
                <a
                  className="social-link"
                  href="https://www.twitter.com/browserstack"
                  rel="nofollow"
                  target="_blank"
                  title="Twitter"
                >
                  <span className="icon-twitter"></span>
                </a>{' '}
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://www.facebook.com/pages/BrowserStack/305988982776051"
                  rel="nofollow"
                  target="_blank"
                  title="Facebook"
                >
                  <span className="icon-facebook"></span>
                </a>{' '}
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://www.linkedin.com/company/browserstack/"
                  rel="nofollow"
                  target="_blank"
                  title="LinkedIn"
                >
                  <span className="icon-linkedin"></span>
                </a>{' '}
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://www.youtube.com/c/browserstack"
                  rel="nofollow"
                  target="_blank"
                  title="YouTube"
                >
                  <span className="icon-youtube"></span>
                </a>{' '}
              </li>
              <li>
                <a
                  className="social-link"
                  href="https://www.instagram.com/browserstack"
                  rel="nofollow"
                  target="_blank"
                  title="Instagram"
                >
                  <span className="icon-instagram"></span>
                </a>{' '}
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-8 col-xl-8 footer-brand-container">
            <a className="brand" href="https://local.bsstag.com/">
              <img
                alt="Browserstack logo"
                className="w-svg"
                height="47"
                src="/images/static/header/header-logo.svg"
                width="219"
              />
            </a>{' '}
          </div>

          <div className="col-sm-12" id="footer-dropdown-links">
            <article className="footer-dropdown">
              <div className="footer-dropdown-row">
                <div className="col-xs-12 footer-dropdown-container">
                  <span className="dropdown-heading">Do more with BrowserStack</span>
                  <div className="dropdown-content">
                    <span className="dropdown-sub-content">
                      <ul className="footer-dropdown-menu">
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/test-in-internet-explorer">Test In IE</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/mobile-browser-emulator">Mobile Emulators</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/test-on-iphone">Test on iPhone</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/test-on-ipad">Test on iPad</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/test-on-galaxy">Test on Galaxy</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/android-testing">Android Testing</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/ios-testing">iOS Testing</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/guide">Guide</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/cross-browser-testing">Cross Browser Testing</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/emulators-simulators">Emulators &amp; Simulators</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/selenium">Selenium</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/automate/cypress">Cypress</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/android-emulators">Android Emulators</a>
                        </li>
                        <li className="menu-item">
                          <a href="https://local.bsstag.com/responsive-design">Responsive Design</a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="row footer-bottom-section">
          <div className="col-xs-12 col-md-6 col-lg-8 col-xl-8 copyright">
            <p>© 2011-2020 BrowserStack - The Most Reliable Mobile App &amp; Cross Browser Testing Company</p>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-8 col-xl-8" id="footer-legal-list">
            <ul className="horizontal-list legal">
              <li>
                <a href="https://local.bsstag.com/terms">Terms of Service</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/cookie-policy">Cookie Policy</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
