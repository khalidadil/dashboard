import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        {/* BEGIN PAGE HEADER*/}
        <div>
          <h3 className="page-title"> Blank Page Layout
            <small className="padding-left-5px">blank page layout</small>
          </h3>
          <div className="page-bar">
            <ul className="page-breadcrumb">
              <li>
                <i className="icon-home" />
                <a href="index.html">Home</a>
                <i className="fa fa-angle-right" />
              </li>
              <li>
                <a href="#">Blank Page</a>
                <i className="fa fa-angle-right" />
              </li>
              <li>
                <span>Page Layouts</span>
              </li>
            </ul>
            <div className="page-toolbar">
              <div className="btn-group pull-right">
                <button type="button" className="btn btn-fit-height grey-salt dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay={1000} data-close-others="true"> Actions
                  <i className="fa fa-angle-down" />
                </button>
                <ul className="dropdown-menu pull-right" role="menu">
                  <li><a href="#"><i className="icon-bell" /> Action</a></li>
                  <li><a href="#"><i className="icon-shield" /> Another action</a></li>
                  <li><a href="#"><i className="icon-user" /> Something else here</a></li>
                  <li className="divider"> </li>
                  <li><a href="#"><i className="icon-bag" /> Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* END PAGE HEADER*/}
        <div className="note note-info">
          <p> A blank page template with a minimal dependency assets to use as a base for any custom page you create </p>
        </div>
      </div>
    );
  },
});
