import React from 'react';

export default React.createClass({

  displayName: 'ThemePanel',

  render() {
    return (
        <div className="theme-panel">
        {/* BEGIN THEME PANEL */}
          <div className="toggler tooltips" data-container="body" data-placement="left" data-html="true" data-original-title="Click to open advance theme customizer panel">
            <i className="icon-settings" />
          </div>
          <div className="toggler-close">
            <i className="icon-close" />
          </div>
          <div className="theme-options">
            <div className="theme-option theme-colors clearfix">
              <span> THEME COLOR </span>
              <ul>
                <li className="color-default current tooltips" data-style="default" data-container="body" data-original-title="Default"> </li>
                <li className="color-grey tooltips" data-style="grey" data-container="body" data-original-title="Grey"> </li>
                <li className="color-blue tooltips" data-style="blue" data-container="body" data-original-title="Blue"> </li>
                <li className="color-dark tooltips" data-style="dark" data-container="body" data-original-title="Dark"> </li>
                <li className="color-light tooltips" data-style="light" data-container="body" data-original-title="Light"> </li>
              </ul>
            </div>
            <div className="theme-option">
              <span> Theme Style </span>
              <select value="square" className="layout-style-option form-control input-small">
                <option value="square">Square corners</option>
                <option value="rounded">Rounded corners</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Layout </span>
              <select value="fluid" className="layout-option form-control input-small">
                <option value="fluid">Fluid</option>
                <option value="boxed">Boxed</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Header </span>
              <select value="fixed" className="page-header-option form-control input-small">
                <option value="fixed">Fixed</option>
                <option value="default">Default</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Top Dropdown</span>
              <select value="light" className="page-header-top-dropdown-style-option form-control input-small">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Sidebar Mode</span>
              <select value="default" className="sidebar-option form-control input-small">
                <option value="fixed">Fixed</option>
                <option value="default">Default</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Sidebar Style</span>
              <select value="default" className="sidebar-style-option form-control input-small">
                <option value="default">Default</option>
                <option value="compact">Compact</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Sidebar Menu </span>
              <select value="accordion" className="sidebar-menu-option form-control input-small">
                <option value="accordion">Accordion</option>
                <option value="hover">Hover</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Sidebar Position </span>
              <select value="left" className="sidebar-pos-option form-control input-small">
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div className="theme-option">
              <span> Footer </span>
              <select value="default" className="page-footer-option form-control input-small">
                <option value="fixed">Fixed</option>
                <option value="default">Default</option>
              </select>
            </div>
          </div>
          {/* END THEME PANEL */}
        </div>
    );
  },
});
