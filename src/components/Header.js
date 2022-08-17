import React,{ Component} from "react";

import { Link } from 'react-router-dom';

export default class Header extends Component {
  
    render() {
      return (
        <div className="header">
          <div className="header_top">
            <div className="header_top_left">
              <h6>399 Tây Thạch, Phường Tây Thạch, Quận Tân Phú, TP.HCM</h6>
            </div>
            <div className="header_top_right">
              <h6>Thời gian làm việc: 08:00 - 18:00</h6>
            </div>
          </div>
          <div className="header_center">
            <div className="topnav">
              <div className="image_logo">
                <img
                  src="https://ndcmobile.com/uploads/source//logo-moi-trong.png"
                  alt="logo"
                />
              </div>
              <div className="centerDiv">
                <div className="all">
                  <div className="dropdown">
                    <button type="submit" className="dropbtn">
                      All <i className="fa fa-caret-down" />
                    </button>
                    <div className="dropdown-content">
                      <Link to="/ScreenReplace" className="link_a">
                        Thay Màn Hình-Ép Kính{" "}
                      </Link>
  
                      <Link to="/BatteryReplace" className="link_a">
                        Thay Pin{" "}
                      </Link>
  
                      <Link to="/CaseReplace" className="link_a">
                        Thay Vỏ{" "}
                      </Link>
  
                      <Link to="/HardwareReplace" className="link_a">
                        Thay Phần Cứng{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="search">
                    <form>
                      <input
                        id="h_inputSearch"
                        type="text"
                        placeholder="Tìm kiếm.."
                        name="search"
                      />
                      <button type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="menu_center">
                <a href="AboutUs">Giới thiệu</a>{" "}|{" "}<a href="#">Hỏi Đáp</a>
              </div>
            </div>
          </div>
  
          <div id="menu_bottom">
            <ul>
              <div className="suachua">
                <li>
                  <h3>Dịch vụ sửa chữa:</h3>
                </li>
              </div>
              <div className="dichvu">
                <li className="h_navItem ">
                  <div className="h_nav_navLink" href="#">
                    <div className="h_navImage">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/phone-2513365-2104689.png"
                        alt=""
                      />
                      <Link to="/ScreenReplace" className="link_a">
                        Thay Màn Hình-Ép Kính{" "}
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="h_navItem ">
                  <div className="h_nav_navLink" href="#">
                    <div className="h_navImage">
                      <img
                        src="https://phatlocmobile.vn/image/cache/catalog/a-iphone/thay-vo-iphone-6-lay-ngay-800x800.png"
                        alt=""
                      />
                      <Link to="/CaseReplace" className="link_a">
                        Thay Vỏ{" "}
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="h_navItem ">
                  <div className="h_nav_navLink" href="#">
                    <div className="h_navImage">
                      <img
                        src="https://www.9mobile.vn/sites/default/files/2019-01/bang_gia-thay-pin.png"
                        alt=""
                      />
                      <Link to="/BatteryReplace" className="link_a">
                        Thay Pin{" "}
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="h_navItem ">
                  <div className="h_nav_navLink" href="#">
                    <div className="h_navImage">
                      <img
                        src="https://phatlocmobile.vn/image/cache/catalog/a-iphone/thay-vo-iphone-6-lay-ngay-800x800.png"
                        alt=""
                      />
                      <Link to="/HardwareReplace" className="link_a">
                        Thay Phần Cứng{" "}
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      );
    }
  }