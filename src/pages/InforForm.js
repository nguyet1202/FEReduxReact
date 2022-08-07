import React from "react";

export default function InforForm() {
  return (
    <div className="bg">
      <form>
        <h2 className="info_form_title">Thông Tin Sửa Chữa</h2>

        <div className="enter">
          <label>Nhập tên thiết bị:</label>
          <input type={"text"} placeholder="Nhập tên thiết bị..."></input>
        </div>
        <div className="enter">
          <label>Số IMEI:</label>
          <input type={"text"} placeholder="Nhập số IMEI..."></input>
        </div>

        <div className="enter">
          <label>Model:</label>
          <input type={"text"} placeholder="Nhập số Model..."></input>
        </div>

        <div className="enter">
          <label>Số lượng:</label>
          <input type={"text"} placeholder="Nhập số lượng..."></input>
        </div>

        <div className="enter">
          <label>Ghi chú:</label>
          <input type={"text"} placeholder="Ghi chú..."></input>
        </div>

        <div className="enter">
          <label>Tên khách hàng:</label>
          <input type={"text"} placeholder="Nhập tên khách hàng..."></input>
        </div>

        <div className="enter">
          <label>
            Số điện thoại:
          </label>
          <input type={"text"} placeholder="Nhập số điện thoại..."></input>
        </div>

        <div className="enter">
          <label>Ngày bạn gửi máy:</label>
          <input type={"date"}></input>
        </div>

        <div className="enter">
          <label>Ngày bạn muốn nhận máy:</label>
          <input type={"date"} placeholder="Ngày bạn muốn nhận..."></input>
        </div>
        <button className="btn_submit" type="submit">Gửi</button>
      </form>
    </div>
  );
}