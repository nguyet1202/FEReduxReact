import React, { Component } from "react";
export default class ThayvoDetail extends Component {
  render() {
    return (
      
      <div className="PhoneCaseDetail">
        <div className="PhoneCaseDetail_item">
        <nav className="linking">
                        <a className="Itemlinking" href="http://localhost:3000/">Trang chủ</a>
                        <span className="divider">/</span>
                        <a className="Itemlinking" href="#">Sửa điện thoại SamSung</a>
                        <span className="divider">/</span>
                        <a href="#" className="linItemlinkingking" >Thay pin</a>
                        <span className="divider">/</span>
                        <a href="#" className="Itemlinking" >Chi tiết thay vỏ</a>
                    </nav>
                    <div></div>
          <div className="detail_item">
            <p>
              <img
                className="image"
                src="https://huydungmobile.com/wp-content/uploads/2021/12/do-vo-iphone-xs-max-len-iphone-12-pro-max-460x460.jpg"
              />
            </p>
            <div className="case_color">
              <img
                className="change_case_img"
                src="https://huydungmobile.com/wp-content/uploads/2021/12/do-vo-iphone-xs-max-len-iphone-12-pro-max-den-1-125x125.jpg"
              />
              <img
                className="change_case_img"
                src="https://huydungmobile.com/wp-content/uploads/2021/12/do-vo-iphone-xs-max-len-iphone-12-pro-max-trang-1-125x125.jpg"
              />
              <img
                className="change_case_img"
                src="https://huydungmobile.com/wp-content/uploads/2021/12/do-vo-iphone-xs-max-len-iphone-12-pro-max-xanh-1-125x125.jpg"
              />
            </div>
            <div className="title">
              <p>Độ vỏ iPhone Xs Max lên iPhone 13 Pro Max</p>
            </div>
            <div className="price">
              <h4>2.300.000đ</h4>
            </div>
          </div>
          <hr></hr>
          <p>
            Giá bao gồm công thay và bảo hành, phát sinh thêm chi phí nào khác
          </p>
          <div className="detail_service">
            <b>Chi tiết dịch vụ:</b>
            <br></br>
            <br></br>

            <div className="detail_item1">
              <p>
                <i class="fas fa-check"></i>Thời gian đổi vỏ
              </p>
              <p>
                <i class="star fas fa-star"></i>60 phút
              </p>
            </div>
            <div className="detail_item2">
              <p>
                <i class="fas fa-check"></i>Quy trình thay
              </p>
              <p>
                <i class="star fas fa-star"></i>Thay trực tiếp
              </p>
            </div>
            <div className="detail_item1">
              <p>
                <i class="fas fa-check"></i>Tình trạng vỏ
              </p>
              <p>
                <i class="star fas fa-star"></i>mới 100%
              </p>
            </div>
            <div className="detail_item2">
              <p>
                <i class="fas fa-check"></i>Quy trình thay
              </p>
              <p>
                <i class="star fas fa-star"></i>12 tháng
              </p>
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="detail_contact">
            <a href="InforForm" className="detail_contact_a">
              {" "}
              Liên hệ trực tiếp
            </a>
          </div>
        </div>
      </div>
    );
  }
}