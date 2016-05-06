import React from 'react';
import Header from '/client/components/shared/Header.jsx';
import LeftSidebar from '/client/components/shared/LeftSidebar.jsx';
import QuickSidebar from '/client/components/shared/QuickSidebar.jsx';
import ThemePanel from '/client/components/shared/ThemePanel.jsx';
import Footer from '/client/components/shared/Footer.jsx';

export default React.createClass({
  displayName: 'MainLayout',

  propTypes: {
    children: React.PropTypes.object,
  },

  getInitialState() {
    return {
      title: 'Dashboard',
      rightSidebar: false,
      leftSidebar: false,
    };
  },

  toggleRightSidebar() {
    this.setState({ rightSidebar: !this.state.rightSidebar });
  },

  toggleLeftSidebar() {
    this.setState({ leftSidebar: !this.state.leftSidebar });
  },

  render() {
    const rightSidebarState = this.state.rightSidebar ? 'page-quick-sidebar-open' : '';
    const leftSidebarState = this.state.leftSidebar ? 'page-sidebar-closed' : '';
    return (
      <div className={'page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid ' + rightSidebarState + ' ' + leftSidebarState}>
        <Header 
          toggleRightSidebar={this.toggleRightSidebar}
          toggleLeftSidebar={this.toggleLeftSidebar}
        />
        {/* BEGIN HEADER & CONTENT DIVIDER */}
        <div className="clearfix"> </div>
        {/* END HEADER & CONTENT DIVIDER */}
        {/* BEGIN CONTAINER */}
        <div className="page-container">
          <LeftSidebar leftSidebarState={this.state.leftSidebar} />
          {/* BEGIN CONTENT */}
          <div className="page-content-wrapper">
            {/* BEGIN CONTENT BODY */}
            <div className="page-content" style={{ minHeight: 1434 }}>
              {/* <ThemePanel /> */}
              {this.props.children}
            </div>
            {/* END CONTENT BODY */}
          </div>
          {/* END CONTENT */}
          <QuickSidebar toggleRightSidebar={this.toggleRightSidebar} />
        </div>
        {/* END CONTAINER */}
        <Footer />
      </div>
    );
  },
});
