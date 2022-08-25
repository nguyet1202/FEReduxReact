import React from "react";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div id="banner">
      <div>
        <p className="question">Thiết bị nào của bạn đang gặp vấn đề?</p>
      </div>
      <div className="banner-bottom">
        <a className="banner_item" href="/ShowIphone">
          <img src="https://huydungmobile.com/wp-content/uploads/2021/03/iphone.jpg"></img>
        </a>
        <a className="banner_item" href="/ShowSamsung">
          <img src="https://huydungmobile.com/wp-content/uploads/2021/03/samsung.jpg"></img>
        </a>
        <a className="banner_item" href="/ShowXiaomi">
          <img src="https://huydungmobile.com/wp-content/uploads/2021/03/xiaomi.jpg"></img>
        </a>
        <a className="banner_item" href="/ShowLG">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWnwuyMb5_75sVS8BRPabtxmh2w5IpHD74Ezgxnau5m0XYQ9aGBcJ-vNQWJLL83gZLpw&usqp=CAU"></img>
        </a>
      </div>
    </div>
  );
}
