import React, { Component } from "react";
import Slide from "./Slide";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Call from "./Call";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Call></Call>
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
              <a href="http://localhost:3000/">
                <img
                  src="https://ndcmobile.com/uploads/source//logo-moi-trong.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="centerDiv">
              <div className="all">
                <div className="dropdown">
                  <button type="submit" className="drop-btn">
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

                    <Link to="/MainReplace" className="link_a">
                      Thay Main{" "}
                    </Link>
                  </div>
                </div>
                {/* <div className="search">
                  <form className="form-search">
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
                </div> */}
              </div>
            </div>
            <div className="menu_center">
              <a href="AboutUs">Giới thiệu</a>
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

            <div className="menu-hide">
              <label htmlFor="nav-tablets-input" className="nav-bars">
                <li className="nav-bars-item">
                  <i className="fa fa-bars" />
                </li>
              </label>
              <input
                hidden
                type="checkbox"
                name
                id="nav-tablets-input"
                className="nav__input"
              />
              <label htmlFor="nav-tablets-input" className="over_lay" />
              <div className="nav_tablets">
                <ul className="nav_tablets__list-nav">
                  <label
                    htmlFor="nav-tablets-input"
                    className="border-before"
                  />
                  <li className="nav_tablets__list-item">
                    <a href="/ScreenReplace">
                      Thay Màn Hình<br></br>
                      <br></br> <br></br>Ép Kính
                    </a>
                  </li>
                  <li className="nav_tablets__list-item">
                    <a href="/CaseReplace">Thay Vỏ</a>
                  </li>
                  <li className="nav_tablets__list-item">
                    <a href="/BatteryReplace">Thay Pin</a>
                  </li>
                  <li className="nav_tablets__list-item">
                    <a href="/HardwareReplace">Thay Phần Cứng</a>
                  </li>
                  <li className="nav_tablets__list-item">
                    <a href="/MainReplace">Thay Main</a>
                  </li>

                  <label
                    htmlFor="nav-tablets-input"
                    className="border-before"
                  />
                </ul>
              </div>
            </div>
            <div className="dichvu">
              <li className="h_navItem ">
                <Link to="/ScreenReplace" className="link_a">
                  Thay Màn Hình-Ép Kính{" "}
                </Link>
              </li>
              <li className="h_navItem ">
                <Link to="/CaseReplace" className="link_a">
                  Thay Vỏ{" "}
                </Link>
              </li>
              <li className="h_navItem ">
                <Link to="/BatteryReplace" className="link_a">
                  Thay Pin{" "}
                </Link>
              </li>
              <li className="h_navItem ">
                <Link to="/HardwareReplace" className="link_a">
                  Thay Phần Cứng{" "}
                </Link>
              </li>
              <li className="h_navItem ">
                <Link to="/MainReplace" className="link_a">
                  Thay Main{" "}
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <Slide />
        <Banner />
      </div>
    );
  }
}
