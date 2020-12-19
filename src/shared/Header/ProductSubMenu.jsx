import React from 'react';
import AppAutomateProduct from '../Icons/AppAutomateProduct';
import AppLiveProduct from '../Icons/AppLiveProduct';
import AutomateProduct from '../Icons/AutomateProduct';
import LiveProduct from '../Icons/LiveProduct';
import PercyProduct from '../Icons/PercyProduct';

function ProductSubMenu({ subMenu: { website, app, team, tools } }) {
  const renderProductIcon = (product) => {
    let ProductIcon;
    switch (product) {
      case 'live':
        ProductIcon = LiveProduct;
        break;
      case 'automate':
        ProductIcon = AutomateProduct;
        break;
      case 'percy':
        ProductIcon = PercyProduct;
        break;
      case 'app-live':
        ProductIcon = AppLiveProduct;
      case 'app-automate':
        ProductIcon = AppAutomateProduct;
      default:
        return null;
    }
    return <ProductIcon width={45} height={40} className="product-icon" />;
  };

  return (
    <ul className="product-menu-dropdown dropdown-menu text-center live_testing_menu" id="product-menu-dropdown">
      <div className="row">
        <div className="col-xs-10">
          <ul className="dropdown-section col-xs-5">
            <li className="section-head">
              <span className="product-type">{website.label}</span>
            </li>
            {website.menus.map(({ label, subLabel, isNew, product, link }) => (
              <li key={label}>
                <a className="header-dropdown-item" data-product={label} href={link}>
                  {renderProductIcon(product)}
                  <div className="dropdown-link-heading">
                    {label} {isNew && <span className="btn-badge btn-primary">New</span>}
                  </div>
                  <div className="dropdown-link-text">{subLabel}</div>
                </a>
              </li>
            ))}
          </ul>
          <ul className="dropdown-section col-xs-7">
            <li className="section-head">
              <span className="product-type">{app.label}</span>
            </li>
            {app.menus.map(({ label, subLabel, link, product }) => (
              <li key={label}>
                <a className="header-dropdown-item" data-product={label} href={link}>
                  {renderProductIcon(product)}
                  <div className="dropdown-link-heading">{label}</div>
                  <div className="dropdown-link-text">{subLabel}</div>
                </a>
              </li>
            ))}
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
              <span className="product-type">{team.label}</span>
            </li>
            <li>
              <a className="tools" href={team.menus[0].link}>
                {team.menus[0].label}
              </a>
            </li>
            <li className="section-head section-head-new tools-section-head">
              <span className="product-type">Tools</span>
            </li>
            {tools.menus.map(({ label, link }) => (
              <li key={label}>
                <a className="tools" href={link}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ul>
  );
}

export default ProductSubMenu;
