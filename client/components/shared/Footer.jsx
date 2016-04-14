import React from 'react';

export default React.createClass({
  displayName: 'Footer',

  render() {
    return (
        <div className="page-footer">
        {/* BEGIN FOOTER */}
          <div className="page-footer-inner"> 2015 © Metronic by keenthemes.
            <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
          </div>
          <div className="scroll-to-top">
            <i className="icon-arrow-up" />
          </div>
        {/* END FOOTER */}
        </div>
    );
  },
});
