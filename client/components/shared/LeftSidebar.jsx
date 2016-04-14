import React from 'react';

export default React.createClass({

  displayName: 'LeftSidebar',

  propTypes: {

  },

  render() {
    return (
          <div className="page-sidebar-wrapper">
            {/* BEGIN SIDEBAR */}
            {/* END SIDEBAR */}
            {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
            {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
            <div className="page-sidebar navbar-collapse collapse">
              {/* BEGIN SIDEBAR MENU */}
              {/* DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
              {/* DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
              {/* DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode */}
              {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
              {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
              {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
              <ul className="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200}>
                <li className="nav-item start ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-home" />
                    <span className="title">Dashboard</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item start ">
                      <a href="index.html" className="nav-link ">
                        <i className="icon-bar-chart" />
                        <span className="title">Dashboard 1</span>
                      </a>
                    </li>
                    <li className="nav-item start ">
                      <a href="dashboard_2.html" className="nav-link ">
                        <i className="icon-bulb" />
                        <span className="title">Dashboard 2</span>
                        <span className="badge badge-success">1</span>
                      </a>
                    </li>
                    <li className="nav-item start ">
                      <a href="dashboard_3.html" className="nav-link ">
                        <i className="icon-graph" />
                        <span className="title">Dashboard 3</span>
                        <span className="badge badge-danger">5</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-diamond" />
                    <span className="title">UI Features</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="ui_colors.html" className="nav-link ">
                        <span className="title">Color Library</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_general.html" className="nav-link ">
                        <span className="title">General Components</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_buttons.html" className="nav-link ">
                        <span className="title">Buttons</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_confirmations.html" className="nav-link ">
                        <span className="title">Popover Confirmations</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_icons.html" className="nav-link ">
                        <span className="title">Font Icons</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_socicons.html" className="nav-link ">
                        <span className="title">Social Icons</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_typography.html" className="nav-link ">
                        <span className="title">Typography</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_tabs_accordions_navs.html" className="nav-link ">
                        <span className="title">Tabs, Accordions &amp; Navs</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_timeline.html" className="nav-link ">
                        <span className="title">Timeline</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_tree.html" className="nav-link ">
                        <span className="title">Tree View</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <span className="title">Page Progress Bar</span>
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item ">
                          <a href="ui_page_progress_style_1.html" className="nav-link "> Flash </a>
                        </li>
                        <li className="nav-item ">
                          <a href="ui_page_progress_style_2.html" className="nav-link "> Big Counter </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_blockui.html" className="nav-link ">
                        <span className="title">Block UI</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_bootstrap_growl.html" className="nav-link ">
                        <span className="title">Bootstrap Growl Notifications</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_notific8.html" className="nav-link ">
                        <span className="title">Notific8 Notifications</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_toastr.html" className="nav-link ">
                        <span className="title">Toastr Notifications</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_bootbox.html" className="nav-link ">
                        <span className="title">Bootbox Dialogs</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_alerts_api.html" className="nav-link ">
                        <span className="title">Metronic Alerts API</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_session_timeout.html" className="nav-link ">
                        <span className="title">Session Timeout</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_idle_timeout.html" className="nav-link ">
                        <span className="title">User Idle Timeout</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_modals.html" className="nav-link ">
                        <span className="title">Modals</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_extended_modals.html" className="nav-link ">
                        <span className="title">Extended Modals</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_tiles.html" className="nav-link ">
                        <span className="title">Tiles</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_datepaginator.html" className="nav-link ">
                        <span className="title">Date Paginator</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ui_nestable.html" className="nav-link ">
                        <span className="title">Nestable List</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-puzzle" />
                    <span className="title">Components</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="components_date_time_pickers.html" className="nav-link ">
                        <span className="title">Date &amp; Time Pickers</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_color_pickers.html" className="nav-link ">
                        <span className="title">Color Pickers</span>
                        <span className="badge badge-danger">2</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_select2.html" className="nav-link ">
                        <span className="title">Select2 Dropdowns</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_bootstrap_select.html" className="nav-link ">
                        <span className="title">Bootstrap Select</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_multi_select.html" className="nav-link ">
                        <span className="title">Multi Select</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_bootstrap_select_splitter.html" className="nav-link ">
                        <span className="title">Select Splitter</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_typeahead.html" className="nav-link ">
                        <span className="title">Typeahead Autocomplete</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_bootstrap_tagsinput.html" className="nav-link ">
                        <span className="title">Bootstrap Tagsinput</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_bootstrap_switch.html" className="nav-link ">
                        <span className="title">Bootstrap Switch</span>
                        <span className="badge badge-success">6</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_bootstrap_maxlength.html" className="nav-link ">
                        <span className="title">Bootstrap Maxlength</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_bootstrap_fileinput.html" className="nav-link ">
                        <span className="title">Bootstrap File Input</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_bootstrap_touchspin.html" className="nav-link ">
                        <span className="title">Bootstrap Touchspin</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_form_tools.html" className="nav-link ">
                        <span className="title">Form Widgets &amp; Tools</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_context_menu.html" className="nav-link ">
                        <span className="title">Context Menu</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_editors.html" className="nav-link ">
                        <span className="title">Markdown &amp; WYSIWYG Editors</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_code_editors.html" className="nav-link ">
                        <span className="title">Code Editors</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_ion_sliders.html" className="nav-link ">
                        <span className="title">Ion Range Sliders</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_noui_sliders.html" className="nav-link ">
                        <span className="title">NoUI Range Sliders</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="components_knob_dials.html" className="nav-link ">
                        <span className="title">Knob Circle Dials</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-settings" />
                    <span className="title">Form Stuff</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="form_controls.html" className="nav-link ">
                        <span className="title">Bootstrap Form
                          <br />Controls</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_controls_md.html" className="nav-link ">
                        <span className="title">Material Design
                          <br />Form Controls</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_validation.html" className="nav-link ">
                        <span className="title">Form Validation</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_validation_states_md.html" className="nav-link ">
                        <span className="title">Material Design
                          <br />Form Validation States</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_validation_md.html" className="nav-link ">
                        <span className="title">Material Design
                          <br />Form Validation</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_layouts.html" className="nav-link ">
                        <span className="title">Form Layouts</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_input_mask.html" className="nav-link ">
                        <span className="title">Form Input Mask</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_editable.html" className="nav-link ">
                        <span className="title">Form X-editable</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_wizard.html" className="nav-link ">
                        <span className="title">Form Wizard</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_icheck.html" className="nav-link ">
                        <span className="title">iCheck Controls</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_image_crop.html" className="nav-link ">
                        <span className="title">Image Cropping</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_fileupload.html" className="nav-link ">
                        <span className="title">Multiple File Upload</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="form_dropzone.html" className="nav-link ">
                        <span className="title">Dropzone File Upload</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-bulb" />
                    <span className="title">Elements</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="elements_steps.html" className="nav-link ">
                        <span className="title">Steps</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="elements_lists.html" className="nav-link ">
                        <span className="title">Lists</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="elements_ribbons.html" className="nav-link ">
                        <span className="title">Ribbons</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="elements_overlay.html" className="nav-link ">
                        <span className="title">Overlays</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="elements_cards.html" className="nav-link ">
                        <span className="title">User Cards</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-briefcase" />
                    <span className="title">Tables</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <span className="title">Static Tables</span>
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item ">
                          <a href="table_static_basic.html" className="nav-link "> Basic Tables </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_static_responsive.html" className="nav-link "> Responsive Tables </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_bootstrap_master.html" className="nav-link "> Bootstrap Table </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item  ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <span className="title">Datatables</span>
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item ">
                          <a href="table_datatables_managed.html" className="nav-link "> Managed Datatables </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_buttons.html" className="nav-link "> Buttons Extension </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_colreorder.html" className="nav-link "> Colreorder Extension </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_rowreorder.html" className="nav-link "> Rowreorder Extension </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_scroller.html" className="nav-link "> Scroller Extension </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_fixedheader.html" className="nav-link "> FixedHeader Extension </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_responsive.html" className="nav-link "> Responsive Extension </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_editable.html" className="nav-link "> Editable Datatables </a>
                        </li>
                        <li className="nav-item ">
                          <a href="table_datatables_ajax.html" className="nav-link "> Ajax Datatables </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="?p=" className="nav-link nav-toggle">
                    <i className="icon-wallet" />
                    <span className="title">Portlets</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="portlet_boxed.html" className="nav-link ">
                        <span className="title">Boxed Portlets</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="portlet_light.html" className="nav-link ">
                        <span className="title">Light Portlets</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="portlet_solid.html" className="nav-link ">
                        <span className="title">Solid Portlets</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="portlet_ajax.html" className="nav-link ">
                        <span className="title">Ajax Portlets</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="portlet_draggable.html" className="nav-link ">
                        <span className="title">Draggable Portlets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-bar-chart" />
                    <span className="title">Charts</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="charts_amcharts.html" className="nav-link ">
                        <span className="title">amChart</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="charts_flotcharts.html" className="nav-link ">
                        <span className="title">Flot Charts</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="charts_flowchart.html" className="nav-link ">
                        <span className="title">Flow Charts</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="charts_google.html" className="nav-link ">
                        <span className="title">Google Charts</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="charts_echarts.html" className="nav-link ">
                        <span className="title">eCharts</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="charts_morris.html" className="nav-link ">
                        <span className="title">Morris Charts</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <span className="title">HighCharts</span>
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item ">
                          <a href="charts_highcharts.html" className="nav-link "> HighCharts </a>
                        </li>
                        <li className="nav-item ">
                          <a href="charts_highstock.html" className="nav-link "> HighStock </a>
                        </li>
                        <li className="nav-item ">
                          <a href="charts_highmaps.html" className="nav-link "> HighMaps </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-pointer" />
                    <span className="title">Maps</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="maps_google.html" className="nav-link ">
                        <span className="title">Google Maps</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="maps_vector.html" className="nav-link ">
                        <span className="title">Vector Maps</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  active open">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-layers" />
                    <span className="title">Page Layouts</span>
                    <span className="selected" />
                    <span className="arrow open" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  active open">
                      <a href="layout_blank_page.html" className="nav-link ">
                        <span className="title">Blank Page</span>
                        <span className="selected" />
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_language_bar.html" className="nav-link ">
                        <span className="title">Header Language Bar</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_footer_fixed.html" className="nav-link ">
                        <span className="title">Fixed Footer</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_boxed_page.html" className="nav-link ">
                        <span className="title">Boxed Page</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-feed" />
                    <span className="title">Sidebar Layouts</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="layout_sidebar_menu_accordion.html" className="nav-link ">
                        <span className="title">Sidebar Accordion Menu</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_sidebar_menu_compact.html" className="nav-link ">
                        <span className="title">Sidebar Compact Menu</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_sidebar_reversed.html" className="nav-link ">
                        <span className="title">Reversed Sidebar Page</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_sidebar_fixed.html" className="nav-link ">
                        <span className="title">Fixed Sidebar Layout</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_sidebar_closed.html" className="nav-link ">
                        <span className="title">Closed Sidebar Layout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className=" icon-wrench" />
                    <span className="title">Custom Layouts</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="layout_disabled_menu.html" className="nav-link ">
                        <span className="title">Disabled Menu Links</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_full_height_portlet.html" className="nav-link ">
                        <span className="title">Full Height Portlet</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="layout_full_height_content.html" className="nav-link ">
                        <span className="title">Full Height Content</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-basket" />
                    <span className="title">eCommerce</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="ecommerce_index.html" className="nav-link ">
                        <i className="icon-home" />
                        <span className="title">Dashboard</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ecommerce_orders.html" className="nav-link ">
                        <i className="icon-basket" />
                        <span className="title">Orders</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ecommerce_orders_view.html" className="nav-link ">
                        <i className="icon-tag" />
                        <span className="title">Order View</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ecommerce_products.html" className="nav-link ">
                        <i className="icon-graph" />
                        <span className="title">Products</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="ecommerce_products_edit.html" className="nav-link ">
                        <i className="icon-graph" />
                        <span className="title">Product Edit</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-docs" />
                    <span className="title">Apps</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="app_todo.html" className="nav-link ">
                        <i className="icon-clock" />
                        <span className="title">Todo 1</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="app_todo_2.html" className="nav-link ">
                        <i className="icon-check" />
                        <span className="title">Todo 2</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="app_inbox.html" className="nav-link ">
                        <i className="icon-envelope" />
                        <span className="title">Inbox</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="app_calendar.html" className="nav-link ">
                        <i className="icon-calendar" />
                        <span className="title">Calendar</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="app_ticket.html" className="nav-link ">
                        <i className="icon-notebook" />
                        <span className="title">Support</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-user" />
                    <span className="title">User</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="page_user_profile_1.html" className="nav-link ">
                        <i className="icon-user" />
                        <span className="title">Profile 1</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_user_profile_1_account.html" className="nav-link ">
                        <i className="icon-user-female" />
                        <span className="title">Profile 1 Account</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_user_profile_1_help.html" className="nav-link ">
                        <i className="icon-user-following" />
                        <span className="title">Profile 1 Help</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_user_profile_2.html" className="nav-link ">
                        <i className="icon-users" />
                        <span className="title">Profile 2</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <i className="icon-notebook" />
                        <span className="title">Login</span>
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item ">
                          <a href="page_user_login_1.html" className="nav-link " target="_blank"> Login Page 1 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_user_login_2.html" className="nav-link " target="_blank"> Login Page 2 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_user_login_3.html" className="nav-link " target="_blank"> Login Page 3 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_user_login_4.html" className="nav-link " target="_blank"> Login Page 4 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_user_login_5.html" className="nav-link " target="_blank"> Login Page 5 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_user_login_6.html" className="nav-link " target="_blank"> Login Page 6 </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_user_lock_1.html" className="nav-link " target="_blank">
                        <i className="icon-lock" />
                        <span className="title">Lock Screen 1</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_user_lock_2.html" className="nav-link " target="_blank">
                        <i className="icon-lock-open" />
                        <span className="title">Lock Screen 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-social-dribbble" />
                    <span className="title">General</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="page_general_about.html" className="nav-link ">
                        <i className="icon-info" />
                        <span className="title">About</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_general_contact.html" className="nav-link ">
                        <i className="icon-call-end" />
                        <span className="title">Contact</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <i className="icon-notebook" />
                        <span className="title">Portfolio</span>
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item ">
                          <a href="page_general_portfolio_1.html" className="nav-link "> Portfolio 1 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_general_portfolio_2.html" className="nav-link "> Portfolio 2 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_general_portfolio_3.html" className="nav-link "> Portfolio 3 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_general_portfolio_4.html" className="nav-link "> Portfolio 4 </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item  ">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <i className="icon-magnifier" />
                        <span className="title">Search</span>
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item ">
                          <a href="page_general_search.html" className="nav-link "> Search 1 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_general_search_2.html" className="nav-link "> Search 2 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_general_search_3.html" className="nav-link "> Search 3 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_general_search_4.html" className="nav-link "> Search 4 </a>
                        </li>
                        <li className="nav-item ">
                          <a href="page_general_search_5.html" className="nav-link "> Search 5 </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_general_pricing.html" className="nav-link ">
                        <i className="icon-tag" />
                        <span className="title">Pricing</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_general_faq.html" className="nav-link ">
                        <i className="icon-wrench" />
                        <span className="title">FAQ</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_general_blog.html" className="nav-link ">
                        <i className="icon-pencil" />
                        <span className="title">Blog</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_general_blog_post.html" className="nav-link ">
                        <i className="icon-note" />
                        <span className="title">Blog Post</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_general_invoice.html" className="nav-link ">
                        <i className="icon-envelope" />
                        <span className="title">Invoice</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_general_invoice_2.html" className="nav-link ">
                        <i className="icon-envelope" />
                        <span className="title">Invoice 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  ">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-settings" />
                    <span className="title">System</span>
                    <span className="arrow" />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item  ">
                      <a href="page_system_coming_soon.html" className="nav-link " target="_blank">
                        <span className="title">Coming Soon</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_system_404_1.html" className="nav-link ">
                        <span className="title">404 Page 1</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_system_404_2.html" className="nav-link " target="_blank">
                        <span className="title">404 Page 2</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_system_404_3.html" className="nav-link " target="_blank">
                        <span className="title">404 Page 3</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_system_500_1.html" className="nav-link ">
                        <span className="title">500 Page 1</span>
                      </a>
                    </li>
                    <li className="nav-item  ">
                      <a href="page_system_500_2.html" className="nav-link " target="_blank">
                        <span className="title">500 Page 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link nav-toggle">
                    <i className="icon-folder" />
                    <span className="title">Multi Level Menu</span>
                    <span className="arrow " />
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item">
                      <a href="javascript:;" className="nav-link nav-toggle">
                        <i className="icon-settings" /> Item 1
                        <span className="arrow" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <a href="?p=dashboard-2" target="_blank" className="nav-link">
                            <i className="icon-user" /> Arrow Toggle
                            <span className="arrow nav-toggle" />
                          </a>
                          <ul className="sub-menu">
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                <i className="icon-power" /> Sample Link 1</a>
                            </li>
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                <i className="icon-paper-plane" /> Sample Link 1</a>
                            </li>
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                <i className="icon-star" /> Sample Link 1</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-camera" /> Sample Link 1</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-link" /> Sample Link 2</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-pointer" /> Sample Link 3</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="?p=dashboard-2" target="_blank" className="nav-link">
                        <i className="icon-globe" /> Arrow Toggle
                        <span className="arrow nav-toggle" />
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-tag" /> Sample Link 1</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-pencil" /> Sample Link 1</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="icon-graph" /> Sample Link 1</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="icon-bar-chart" /> Item 3 </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* END SIDEBAR MENU */}
            </div>
            {/* END SIDEBAR */}
            {/* END SIDEBAR */}
          </div>
    );
  }
});