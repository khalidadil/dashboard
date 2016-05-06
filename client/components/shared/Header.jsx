import React from 'react';

export default React.createClass({

  displayName: 'Header',

  propTypes: {
    toggleRightSidebar: React.PropTypes.func,
    toggleLeftSidebar: React.PropTypes.func,
  },

  getInitialState() {
    return {
      expandSearch: false,
    };
  },

  expandSearch() {
    this.setState({ expandSearch: !this.state.expandSearch });
  },

  renderNewMenu() {
    return (
      <ul className="dropdown-menu" role="menu">
        <li>
          <a href="javascript:;">
            <i className="icon-docs" /> New Post </a>
        </li>
        <li>
          <a href="javascript:;">
            <i className="icon-tag" /> New Comment </a>
        </li>
        <li>
          <a href="javascript:;">
            <i className="icon-share" /> Share </a>
        </li>
        <li className="divider"> </li>
        <li>
          <a href="javascript:;">
            <i className="icon-flag" /> Comments
            <span className="badge badge-success">4</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i className="icon-users" /> Feedbacks
            <span className="badge badge-danger">2</span>
          </a>
        </li>
      </ul>
    );
  },

  renderNotificationsMenu() {
    return (
      <ul className="dropdown-menu">
        <li className="external">
          <h3>
            <span className="bold">12 pending</span> notifications</h3>
          <a href="page_user_profile_1.html">view all</a>
        </li>
        <li>
          <div className="slimScrollDiv" style={{ overflow: 'auto', width: 'auto', height: 250 }}>
            <ul className="dropdown-menu-list scroller" style={{ overflow: 'auto', height: 250 }} data-handle-color="#637283">
              <li>
                <a href="javascript:;">
                  <span className="time">just now</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-success">
                      <i className="fa fa-plus" />
                    </span> New user registered. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">3 mins</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span> Server #12 overloaded. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">10 mins</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-warning">
                      <i className="fa fa-bell-o" />
                    </span> Server #2 not responding. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">14 hrs</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-info">
                      <i className="fa fa-bullhorn" />
                    </span> Application error. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">2 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span> Database overloaded 68%. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">3 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span> A user IP blocked. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">4 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-warning">
                      <i className="fa fa-bell-o" />
                    </span> Storage Server #4 not responding dfdfdfd. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">5 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-info">
                      <i className="fa fa-bullhorn" />
                    </span> System Error. </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">9 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span> Storage server failed. </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    );
  },

  renderInboxMenu() {
    return (
      <ul className="dropdown-menu">
        <li className="external">
          <h3>You have
            <span className="bold padding-left-5px">7 New</span> Messages</h3>
          <a href="app_inbox.html">view all</a>
        </li>
        <li>
          <div className="slimScrollDiv" style={{ overflow: 'auto' }}>
            <ul className="dropdown-menu-list scroller" style={{ overflow: 'auto', height: 275 }} data-handle-color="#637283">
              <li>
                <a href="#">
                  <span className="photo">
                    <img src="assets/layouts/layout2/img/avatar2.jpg" className="img-circle" alt /> </span>
                  <span className="subject">
                    <span className="from"> Lisa Wong </span>
                    <span className="time">Just Now </span>
                  </span>
                  <span className="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img src="assets/layouts/layout2/img/avatar3.jpg" className="img-circle" alt /> </span>
                  <span className="subject">
                    <span className="from"> Richard Doe </span>
                    <span className="time">16 mins </span>
                  </span>
                  <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img src="assets/layouts/layout2/img/avatar1.jpg" className="img-circle" alt /> </span>
                  <span className="subject">
                    <span className="from"> Bob Nilson </span>
                    <span className="time">2 hrs </span>
                  </span>
                  <span className="message"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img src="assets/layouts/layout2/img/avatar2.jpg" className="img-circle" alt /> </span>
                  <span className="subject">
                    <span className="from"> Lisa Wong </span>
                    <span className="time">40 mins </span>
                  </span>
                  <span className="message"> Vivamus sed auctor 40% nibh congue nibh... </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="photo">
                    <img src="assets/layouts/layout2/img/avatar3.jpg" className="img-circle" alt /> </span>
                  <span className="subject">
                    <span className="from"> Richard Doe </span>
                    <span className="time">46 mins </span>
                  </span>
                  <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    );
  },

  renderTasksMenu() {
    return (
      <ul className="dropdown-menu extended tasks">
        <li className="external">
          <h3>You have
            <span className="bold padding-left-5px">12 pending</span> tasks</h3>
          <a href="app_todo.html">view all</a>
        </li>
        <li>
          <div className="slimScrollDiv" style={{ overflow: 'auto' }}>
            <ul className="dropdown-menu-list scroller" style={{ overflow: 'auto', height: 275 }} data-handle-color="#637283">
              <li>
                <a href="javascript:;">
                  <span className="task">
                    <span className="desc">New release v1.2 </span>
                    <span className="percent">30%</span>
                  </span>
                  <span className="progress">
                    <span style={{width: '40%'}} className="progress-bar progress-bar-success" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                      <span className="sr-only">40% Complete</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="task">
                    <span className="desc">Application deployment</span>
                    <span className="percent">65%</span>
                  </span>
                  <span className="progress">
                    <span style={{width: '65%'}} className="progress-bar progress-bar-danger" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                      <span className="sr-only">65% Complete</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="task">
                    <span className="desc">Mobile app release</span>
                    <span className="percent">98%</span>
                  </span>
                  <span className="progress">
                    <span style={{width: '98%'}} className="progress-bar progress-bar-success" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}>
                      <span className="sr-only">98% Complete</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="task">
                    <span className="desc">Database migration</span>
                    <span className="percent">10%</span>
                  </span>
                  <span className="progress">
                    <span style={{width: '10%'}} className="progress-bar progress-bar-warning" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                      <span className="sr-only">10% Complete</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="task">
                    <span className="desc">Web server upgrade</span>
                    <span className="percent">58%</span>
                  </span>
                  <span className="progress">
                    <span style={{width: '58%'}} className="progress-bar progress-bar-info" aria-valuenow={58} aria-valuemin={0} aria-valuemax={100}>
                      <span className="sr-only">58% Complete</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="task">
                    <span className="desc">Mobile development</span>
                    <span className="percent">85%</span>
                  </span>
                  <span className="progress">
                    <span style={{width: '85%'}} className="progress-bar progress-bar-success" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                      <span className="sr-only">85% Complete</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="task">
                    <span className="desc">New UI release</span>
                    <span className="percent">38%</span>
                  </span>
                  <span className="progress progress-striped">
                    <span style={{width: '38%'}} className="progress-bar progress-bar-important" aria-valuenow={18} aria-valuemin={0} aria-valuemax={100}>
                      <span className="sr-only">38% Complete</span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    );
  },

  renderUserMenu() {
    return (
      <ul className="dropdown-menu dropdown-menu-default">
        <li>
          <a href="page_user_profile_1.html">
            <i className="icon-user" /> My Profile </a>
        </li>
        <li>
          <a href="app_calendar.html">
            <i className="icon-calendar" /> My Calendar </a>
        </li>
        <li>
          <a href="app_inbox.html">
            <i className="icon-envelope-open" /> My Inbox
            <span className="badge badge-danger"> 3 </span>
          </a>
        </li>
        <li>
          <a href="app_todo_2.html">
            <i className="icon-rocket" /> My Tasks
            <span className="badge badge-success"> 7 </span>
          </a>
        </li>
        <li className="divider"> </li>
        <li>
          <a href="page_user_lock_1.html">
            <i className="icon-lock" /> Lock Screen </a>
        </li>
        <li>
          <a href="page_user_login_1.html">
            <i className="icon-key" /> Log Out </a>
        </li>
      </ul>
    );
  },

  render() {
    const expandSearchClass = this.state.expandSearch ? 'open' : '';
    return (
        <div className="page-header navbar navbar-fixed-top">
          {/* BEGIN HEADER */}
          {/* BEGIN HEADER INNER */}
          <div className="page-header-inner ">
            {/* BEGIN LOGO */}
            <div className="page-logo">
              <a href="index.html">
                <img src="assets/layouts/layout2/img/logo-default.png" alt="logo" className="logo-default" /> </a>
              <div className="menu-toggler sidebar-toggler"  onClick={this.props.toggleLeftSidebar.bind(null, this)}>
                {/* DOC: Remove the above "hide" to enable the sidebar toggler button on header */}
              </div>
            </div>
            {/* END LOGO */}
            {/* BEGIN RESPONSIVE MENU TOGGLER */}
            <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
            {/* END RESPONSIVE MENU TOGGLER */}
            {/* BEGIN PAGE ACTIONS */}
            {/* DOC: Remove "hide" class to enable the page header actions */}
            <div className="page-actions">
              <div className="btn-group">
                <button type="button" className="btn btn-circle btn-outline red dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-plus" />&nbsp;
                  <span className="hidden-sm hidden-xs">New&nbsp;</span>&nbsp;
                  <i className="fa fa-angle-down" />
                </button>
                {this.renderNewMenu()}
              </div>
            </div>
            {/* END PAGE ACTIONS */}
            {/* BEGIN PAGE TOP */}
            <div className="page-top">
              {/* BEGIN HEADER SEARCH BOX */}
              {/* DOC: Apply "search-form-expanded" right after the "search-form" class to have half expanded search box */}
              <form className={`search-form search-form-expanded ${expandSearchClass}`} action="page_general_search_3.html" method="GET" onChange={this.doSomething}>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." name="query" onClick={this.expandSearch} onBlur={this.expandSearch} />
                  <span className="input-group-btn">
                    <a href="javascript:;" className="btn submit">
                      <i className="icon-magnifier" />
                    </a>
                  </span>
                </div>
              </form>
              {/* END HEADER SEARCH BOX */}
              {/* BEGIN TOP NAVIGATION MENU */}
              <div className="top-menu">
                <ul className="nav navbar-nav pull-right">
                  {/* BEGIN NOTIFICATION DROPDOWN */}
                  {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                  <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                      <i className="icon-bell" />
                      <span className="badge badge-default"> 7 </span>
                    </a>
                    {this.renderNotificationsMenu()}
                  </li>
                  {/* END NOTIFICATION DROPDOWN */}
                  {/* BEGIN INBOX DROPDOWN */}
                  {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                  <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                      <i className="icon-envelope-open" />
                      <span className="badge badge-default"> 4 </span>
                    </a>
                    {this.renderInboxMenu()}
                  </li>
                  {/* END INBOX DROPDOWN */}
                  {/* BEGIN TODO DROPDOWN */}
                  {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                  <li className="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                      <i className="icon-calendar" />
                      <span className="badge badge-default"> 3 </span>
                    </a>
                    {this.renderTasksMenu()}
                  </li>
                  {/* END TODO DROPDOWN */}
                  {/* BEGIN USER LOGIN DROPDOWN */}
                  {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                  <li className="dropdown dropdown-user">
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                      <img alt className="img-circle" src="assets/layouts/layout2/img/avatar3_small.jpg" />
                      <span className="username username-hide-on-mobile"> Nick </span>
                      <i className="fa fa-angle-down" />
                    </a>
                    {this.renderUserMenu()}
                  </li>
                  {/* END USER LOGIN DROPDOWN */}
                  {/* BEGIN QUICK SIDEBAR TOGGLER */}
                  {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
                  <li className="dropdown dropdown-extended quick-sidebar-toggler" onClick={this.props.toggleRightSidebar.bind(null, this)}>
                    <span className="sr-only">Toggle Quick Sidebar</span>
                    <i className="icon-logout" />
                  </li>
                  {/* END QUICK SIDEBAR TOGGLER */}
                </ul>
              </div>
              {/* END TOP NAVIGATION MENU */}
            </div>
            {/* END PAGE TOP */}
          </div>
          {/* END HEADER INNER */}
          {/* END HEADER */}
        </div>
    );
  },
});
