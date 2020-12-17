import React from 'react';

function Header() {
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
              id="primary-menu-toggle"
            >
              <img alt="Open Menu" height="18" src="/images/static/header/open-menu.svg" width="24" />
              <img alt="Close Menu" height="18" src="/images/static/header/close-menu.svg" width="18" />
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
            <ul className="pull-right horizontal-list bs-collapse primary-menu" id="primary-menu">
              <li className="dropdown-holder clear hide-md hide-lg hide-xl">
                <a
                  href="#"
                  className="product-dropdown-toggle  forward"
                  id="product-menu-toggle-responsive"
                  data-trigger="product-responsive"
                >
                  Products<span className="account-ahead-caret"></span>
                  <div className="product-menu-animator">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </a>
              </li>
              <li className="dropdown-holder clear hide-md hide-lg hide-xl">
                <a
                  href="#"
                  className="product-dropdown-toggle  forward"
                  id="product-menu-toggle-responsive"
                  data-trigger="developers-responsive"
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
              <li className="dropdown-holder hide-sm hide-xs">
                <a
                  href="#"
                  className="product-dropdown-toggle dropdown-toggle "
                  data-target="product-menu-dropdown"
                  id="product-menu-toggle"
                >
                  Products<span className="account-down-caret"></span>
                </a>
                <ul
                  className="product-menu-dropdown dropdown-menu text-center live_testing_menu"
                  id="product-menu-dropdown"
                >
                  <div className="row">
                    <div className="col-xs-10">
                      <ul className="dropdown-section col-xs-5">
                        <li className="section-head">
                          <span className="product-type">Test your websites</span>
                        </li>
                        <li>
                          <a className="header-dropdown-item" data-product="Live" href="https://local.bsstag.com/live">
                            <svg width="45" height="40" className="product-icon">
                              {/* <use xlink:href="#live-icon"></use> */}
                            </svg>
                            <div className="dropdown-link-heading">Live</div>
                            <div className="dropdown-link-text">Interactive cross browser testing</div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="header-dropdown-item"
                            data-product="Automate"
                            href="https://local.bsstag.com/automate"
                          >
                            <svg width="45" height="40" className="product-icon">
                              {/* <use xlink:href="#automate-icon"></use> */}
                            </svg>
                            <div className="dropdown-link-heading">Automate</div>
                            <div className="dropdown-link-text">Selenium testing at scale</div>
                          </a>
                        </li>
                        <li>
                          <a className="header-dropdown-item" data-product="Percy" href="/percy">
                            <svg width="45" height="40" className="product-icon">
                              {/* <use xlink:href="#percy-icon"></use> */}
                            </svg>
                            <div className="dropdown-link-heading">
                              Percy
                              <span className="btn-badge btn-primary">New</span>
                            </div>
                            <div className="dropdown-link-text">Visual testing &amp; review</div>
                          </a>
                        </li>
                      </ul>
                      <ul className="dropdown-section col-xs-7">
                        <li className="section-head">
                          <span className="product-type">Test your mobile apps</span>
                        </li>
                        <li>
                          <a
                            className="header-dropdown-item"
                            data-product="App Live"
                            href="https://local.bsstag.com/app-live"
                          >
                            <svg width="45" height="40" className="product-icon">
                              {/* <use xlink:href="#app-live-icon"></use> */}
                            </svg>
                            <div className="dropdown-link-heading">App Live</div>
                            <div className="dropdown-link-text">Interactive native &amp; hybrid app testing</div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="header-dropdown-item"
                            data-product="App Automate"
                            href="https://local.bsstag.com/app-automate"
                          >
                            <svg width="45" height="40" className="product-icon">
                              {/* <use xlink:href="#app-automate-icon"></use> */}
                            </svg>
                            <div className="dropdown-link-heading">App Automate</div>
                            <div className="dropdown-link-text">
                              Test automation for native &amp; hybrid mobile apps
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="row product-menu-footer">
                        <div className="col-xs-12">
                          <p>
                            Use BrowserStack with your favourite products. See our{' '}
                            <a href="https://local.bsstag.com/integrations">
                              <b>Integrations</b> ⟶
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-2">
                      <ul className="dropdown-section tools">
                        <li className="section-head section-head-new enterprise-section-head">
                          <span className="product-type">For Teams</span>
                        </li>
                        <li>
                          <a className="tools" href="https://local.bsstag.com/enterprise">
                            Enterprise
                          </a>
                        </li>
                        <li className="section-head section-head-new tools-section-head">
                          <span className="product-type">Tools</span>
                        </li>
                        <li>
                          <a className="tools" href="https://local.bsstag.com/screenshots">
                            Screenshots
                          </a>
                        </li>
                        <li>
                          <a className="tools" href="https://local.bsstag.com/responsive">
                            Responsive
                          </a>
                        </li>
                        <li>
                          <a className="tools" href="https://local.bsstag.com/speedlab">
                            SpeedLab
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown-holder hide-sm hide-xs">
                <a
                  href="#"
                  className="dev-dropdown-toggle dropdown-toggle"
                  data-target="dev-menu-dropdown"
                  id="dev-menu-toggle"
                >
                  <span className="nav_item_name">
                    Developers <span className="dev-down-caret"></span>
                  </span>
                </a>

                <ul className="dropdown-menu dev-dropdown-menu" id="dev-menu-dropdown">
                  <li>
                    <a href="https://local.bsstag.com/docs">Documentation</a>
                  </li>
                  <li>
                    <a data-href="https://local.bsstag.com/support" href="https://local.bsstag.com/support">
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
                    <a href="https://local.bsstag.com/open-source">Open Source</a>
                  </li>
                  <li>
                    <a href="https://local.bsstag.com/events">Events</a>
                  </li>
                </ul>
              </li>
              <li className="hide-sm hide-xs">
                <a href="https://local.bsstag.com/live-for-teams">Live for Teams</a>
              </li>
              <li className="hide-sm hide-xs">
                <a href="https://local.bsstag.com/pricing?product=live">Pricing</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/users/sign_in">Sign in</a>
              </li>

              <li className="free-trial-link">
                <a className="btn-secondary-white btn-md" href="https://local.bsstag.com/users/sign_up">
                  Free Trial
                </a>
              </li>
              <li className="no-btn icon-only">
                <a className="doc-search-cta doc-search-menu-icon" id="doc-menu-toggle"></a>
              </li>
            </ul>

            <ul
              className="product-menu-dropdown-responsive mobile-dropdown-menu dropdown-section col-xs-12 no-pad hide clear primary hide-md hide-lg hide-xl"
              data-target="product-responsive"
            >
              <li className="section-title back" data-target="primary">
                <span className="account-behind-caret"></span>Products
              </li>
              <li className="section-head">
                <span className="product-type">Test your websites</span>
              </li>
              <li>
                <a className="header-dropdown-item" href="https://local.bsstag.com/live">
                  <div className="dropdown-link-heading">Live</div>
                  <div className="dropdown-link-text">Interactive cross browser testing</div>
                </a>
              </li>
              <li>
                <a className="header-dropdown-item" href="https://local.bsstag.com/automate">
                  <div className="dropdown-link-heading">Automate</div>
                  <div className="dropdown-link-text">Selenium testing at scale</div>
                </a>
              </li>
              <li>
                <a className="header-dropdown-item" href="/percy">
                  <div className="dropdown-link-heading">Percy</div>
                  <div className="dropdown-link-text">Visual testing &amp; review</div>
                </a>
              </li>
              <li className="section-head">
                <span className="product-type">Test your mobile apps</span>
              </li>
              <li>
                <a className="header-dropdown-item" href="https://local.bsstag.com/app-live">
                  <div className="dropdown-link-heading">App Live</div>
                  <div className="dropdown-link-text">Interactive native &amp; hybrid app testing</div>
                </a>
              </li>
              <li>
                <a className="header-dropdown-item" href="https://local.bsstag.com/app-automate">
                  <div className="dropdown-link-heading">App Automate</div>
                  <div className="dropdown-link-text">Test automation for native &amp; hybrid mobile apps</div>
                </a>
              </li>
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
              <li>
                <a className="tools" href="https://local.bsstag.com/screenshots">
                  Screenshots
                </a>
              </li>
              <li>
                <a className="tools" href="https://local.bsstag.com/responsive">
                  Responsive
                </a>
              </li>
              <li>
                <a className="tools" href="https://local.bsstag.com/speedlab">
                  SpeedLab
                </a>
              </li>
            </ul>

            <ul
              className="developers-menu-dropdown-responsive mobile-dropdown-menu dropdown-section col-xs-12 no-pad hide clear primary hide-md hide-lg hide-xl"
              data-target="developers-responsive"
            >
              <li className="section-title back" data-target="primary">
                <span className="account-behind-caret"></span>Developers
              </li>
              <li>
                <a href="https://local.bsstag.com/docs">Documentation</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/support">Support</a>
              </li>
              <li>
                <a href="https://status.browserstack.com">Status</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/release-notes">Release Notes</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/open-source">Open Source</a>
              </li>
              <li>
                <a href="https://local.bsstag.com/events">Events</a>
              </li>
            </ul>

            <ul
              className="help-menu-dropdown-responsive mobile-dropdown-menu dropdown-section col-xs-12 no-pad hide clear primary hide-md hide-lg hide-xl"
              data-target="help-responsive"
            >
              <li className="section-title back" data-target="primary">
                <span className="account-behind-caret"></span>Get help
              </li>
              <li className="section-head">
                <span className="product-type">Documentation</span>
              </li>
              <li>
                <a className="" href="https://local.bsstag.com/speedlab/guide">
                  SpeedLab
                </a>
              </li>
              <li className="section-head">
                <span className="product-type">References</span>
              </li>
              <li>
                <a className="" href="https://www.w3.org/TR/navigation-timing-2/">
                  Navigation Timing API
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
