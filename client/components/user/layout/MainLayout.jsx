import Header from '/client/components/shared/Header.jsx';
import React from 'react';
import LeftSidebar from '/client/components/shared/LeftSidebar.jsx';
import QuickSidebar from '/client/components/shared/QuickSidebar.jsx';
import ThemePanel from '/client/components/shared/ThemePanel.jsx';
import Footer from '/client/components/shared/Footer.jsx';
// import RightSidebar from './shared/layouts/RightSidebar.jsx';

export default React.createClass({
  displayName: 'MainLayout',

  propTypes: {

  },

  getInitialState() {
    return {
      title: 'Dashboard',
    };
  },

  render() {
    return (
      <div className="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid">
        <Header />
        {/* BEGIN HEADER & CONTENT DIVIDER */}
        <div className="clearfix"> </div>
        {/* END HEADER & CONTENT DIVIDER */}
        {/* BEGIN CONTAINER */}
        <div className="page-container">
          <LeftSidebar />
          {/* BEGIN CONTENT */}
          <div className="page-content-wrapper">
            {/* BEGIN CONTENT BODY */}
            <div className="page-content">
              {/* BEGIN PAGE HEADER*/}
              <ThemePanel />
              <h3 className="page-title"> Blank Page Layout
                <small>  blank page layout</small>
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
                      <li>
                        <a href="#">
                          <i className="icon-bell" /> Action</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shield" /> Another action</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-user" /> Something else here</a>
                      </li>
                      <li className="divider"> </li>
                      <li>
                        <a href="#">
                          <i className="icon-bag" /> Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END PAGE HEADER*/}
              <div className="note note-info">
                <p> A blank page template with a minimal dependency assets to use as a base for any custom page you create </p>
              </div>
            </div>
            {/* END CONTENT BODY */}
          </div>
          {/* END CONTENT */}
          <QuickSidebar />
        </div>
        {/* END CONTAINER */}
        <Footer />
      </div>
    );
  },
});
