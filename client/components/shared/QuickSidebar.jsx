import React from 'react';

export default React.createClass({

  displayName: 'QuickSidebar',

  render() {
    return (
        <div>
          {/* BEGIN QUICK SIDEBAR */}
          <a href="javascript:;" className="page-quick-sidebar-toggler">
            <i className="icon-login" />
          </a>
          <div className="page-quick-sidebar-wrapper" data-close-on-body-click="false">
            <div className="page-quick-sidebar">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="javascript:;" data-target="#quick_sidebar_tab_1" data-toggle="tab"> Users
                    <span className="badge badge-danger">2</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;" data-target="#quick_sidebar_tab_2" data-toggle="tab"> Alerts
                    <span className="badge badge-success">7</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown"> More
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu pull-right">
                    <li>
                      <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-bell" /> Alerts </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-info" /> Notifications </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-speech" /> Activities </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-settings" /> Settings </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                  <div className="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-class="page-quick-sidebar-list">
                    <h3 className="list-heading">Staff</h3>
                    <ul className="media-list list-items">
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-success">8</span>
                        </div>
                        <img className="media-object" src="../assets/layouts/layout/img/avatar3.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Bob Nilson</h4>
                          <div className="media-heading-sub"> Project Manager </div>
                        </div>
                      </li>
                      <li className="media">
                        <img className="media-object" src="../assets/layouts/layout/img/avatar1.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Nick Larson</h4>
                          <div className="media-heading-sub"> Art Director </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-danger">3</span>
                        </div>
                        <img className="media-object" src="../assets/layouts/layout/img/avatar4.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Deon Hubert</h4>
                          <div className="media-heading-sub"> CTO </div>
                        </div>
                      </li>
                      <li className="media">
                        <img className="media-object" src="../assets/layouts/layout/img/avatar2.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Ella Wong</h4>
                          <div className="media-heading-sub"> CEO </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="list-heading">Customers</h3>
                    <ul className="media-list list-items">
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-warning">2</span>
                        </div>
                        <img className="media-object" src="../assets/layouts/layout/img/avatar6.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Lara Kunis</h4>
                          <div className="media-heading-sub"> CEO, Loop Inc </div>
                          <div className="media-heading-small"> Last seen 03:10 AM </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="label label-sm label-success">new</span>
                        </div>
                        <img className="media-object" src="../assets/layouts/layout/img/avatar7.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Ernie Kyllonen</h4>
                          <div className="media-heading-sub"> Project Manager,
                            <br /> SmartBizz PTL </div>
                        </div>
                      </li>
                      <li className="media">
                        <img className="media-object" src="../assets/layouts/layout/img/avatar8.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Lisa Stone</h4>
                          <div className="media-heading-sub"> CTO, Keort Inc </div>
                          <div className="media-heading-small"> Last seen 13:10 PM </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-success">7</span>
                        </div>
                        <img className="media-object" src="../assets/layouts/layout/img/avatar9.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Deon Portalatin</h4>
                          <div className="media-heading-sub"> CFO, H&amp;D LTD </div>
                        </div>
                      </li>
                      <li className="media">
                        <img className="media-object" src="../assets/layouts/layout/img/avatar10.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Irina Savikova</h4>
                          <div className="media-heading-sub"> CEO, Tizda Motors Inc </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-danger">4</span>
                        </div>
                        <img className="media-object" src="../assets/layouts/layout/img/avatar11.jpg" alt="..." />
                        <div className="media-body">
                          <h4 className="media-heading">Maria Gomez</h4>
                          <div className="media-heading-sub"> Manager, Infomatic Inc </div>
                          <div className="media-heading-small"> Last seen 03:10 AM </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="page-quick-sidebar-item">
                    <div className="page-quick-sidebar-chat-user">
                      <div className="page-quick-sidebar-nav">
                        <a href="javascript:;" className="page-quick-sidebar-back-to-list">
                          <i className="icon-arrow-left" />Back</a>
                      </div>
                      <div className="page-quick-sidebar-chat-user-messages">
                        <div className="post out">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar3.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Bob Nilson</a>
                            <span className="datetime">20:15</span>
                            <span className="body"> When could you send me the report ? </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar2.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Ella Wong</a>
                            <span className="datetime">20:15</span>
                            <span className="body"> Its almost done. I will be sending it shortly </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar3.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Bob Nilson</a>
                            <span className="datetime">20:15</span>
                            <span className="body"> Alright. Thanks! :) </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar2.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Ella Wong</a>
                            <span className="datetime">20:16</span>
                            <span className="body"> You are most welcome. Sorry for the delay. </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar3.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Bob Nilson</a>
                            <span className="datetime">20:17</span>
                            <span className="body"> No probs. Just take your time :) </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar2.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Ella Wong</a>
                            <span className="datetime">20:40</span>
                            <span className="body"> Alright. I just emailed it to you. </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar3.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Bob Nilson</a>
                            <span className="datetime">20:17</span>
                            <span className="body"> Great! Thanks. Will check it right away. </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar2.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Ella Wong</a>
                            <span className="datetime">20:40</span>
                            <span className="body"> Please let me know if you have any comment. </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img className="avatar" alt src="../assets/layouts/layout/img/avatar3.jpg" />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">Bob Nilson</a>
                            <span className="datetime">20:17</span>
                            <span className="body"> Sure. I will check and buzz you if anything needs to be corrected. </span>
                          </div>
                        </div>
                      </div>
                      <div className="page-quick-sidebar-chat-user-form">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Type a message here..." />
                          <div className="input-group-btn">
                            <button type="button" className="btn green">
                              <i className="icon-paper-clip" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane page-quick-sidebar-alerts" id="quick_sidebar_tab_2">
                  <div className="page-quick-sidebar-alerts-list">
                    <h3 className="list-heading">General</h3>
                    <ul className="feeds list-items">
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-check" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> You have 4 pending tasks.
                                <span className="label label-sm label-warning "> Take action
                                  <i className="fa fa-share" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> Just now </div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-success">
                                  <i className="fa fa-bar-chart-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> Finance Report for year 2013 has been released. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 20 mins </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-danger">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 24 mins </div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-shopping-cart" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> New order received with
                                <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 30 mins </div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-success">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 24 mins </div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-bell-o" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> Web server hardware needs to be upgraded.
                                <span className="label label-sm label-warning"> Overdue </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 2 hours </div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-default">
                                  <i className="fa fa-briefcase" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> IPO Report for year 2013 has been released. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 20 mins </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <h3 className="list-heading">System</h3>
                    <ul className="feeds list-items">
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-check" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> You have 4 pending tasks.
                                <span className="label label-sm label-warning "> Take action
                                  <i className="fa fa-share" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> Just now </div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-danger">
                                  <i className="fa fa-bar-chart-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> Finance Report for year 2013 has been released. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 20 mins </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-default">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 24 mins </div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-shopping-cart" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> New order received with
                                <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 30 mins </div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-success">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 24 mins </div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-warning">
                                <i className="fa fa-bell-o" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc"> Web server hardware needs to be upgraded.
                                <span className="label label-sm label-default "> Overdue </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date"> 2 hours </div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-briefcase" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc"> IPO Report for year 2013 has been released. </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date"> 20 mins </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                  <div className="page-quick-sidebar-settings-list">
                    <h3 className="list-heading">General Settings</h3>
                    <ul className="list-items borderless">
                      <li> Enable Notifications
                        <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                      <li> Allow Tracking
                        <input type="checkbox" className="make-switch" data-size="small" data-on-color="info" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                      <li> Log Errors
                        <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                      <li> Auto Sumbit Issues
                        <input type="checkbox" className="make-switch" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                      <li> Enable SMS Alerts
                        <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                    </ul>
                    <h3 className="list-heading">System Settings</h3>
                    <ul className="list-items borderless">
                      <li> Security Level
                        <select className="form-control input-inline input-sm input-small">
                          <option value={1}>Normal</option>
                          <option value={2} selected>Medium</option>
                          <option value="e">High</option>
                        </select>
                      </li>
                      <li> Failed Email Attempts
                        <input className="form-control input-inline input-sm input-small" defaultValue={5} /> </li>
                      <li> Secondary SMTP Port
                        <input className="form-control input-inline input-sm input-small" defaultValue={3560} /> </li>
                      <li> Notify On System Error
                        <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                      <li> Notify On SMTP Error
                        <input type="checkbox" className="make-switch" defaultChecked data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                    </ul>
                    <div className="inner-content">
                      <button className="btn btn-success">
                        <i className="icon-settings" /> Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END QUICK SIDEBAR */}
        </div>
    );
  }
})
