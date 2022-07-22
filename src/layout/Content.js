import React, { Component } from "react";
import Categories from "../Mockdata/Categories.json";
// import showHomepage from "../Mockdata/showHomepage.json";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../page/Header";
import Footer from "../page/Footer";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
    };
  }
  async componentDidMount() {
    await axios
      .get(`https://6290b07827f4ba1c65bf4562.mockapi.io/service/1/products`)
      .then((res) => {
        this.setState(() => ({ phones: res.data }));
      });
  }
  render() {
    return (
  <div>
<Header></Header>
      <div className="Content">
        <div className="viewallcat">
          <div className="viewallcat">
            <a className="titel">Sửa Điện Thoại</a>
            <br />
            <a className="link_a" href="#">
              Thay ép mặt kính
            </a>
            <br />
            <a className="link_a" href="#">
              Thay cảm ứng
            </a>
            <br />
            <a className="link_a" href="#">
              Thay màn hình
            </a>
            <br />
            <a className="link_a" href="#">
              Thay kính lưng
            </a>
            <br />
           
            <a className="link_a" href="#">
              Thay pin
            </a>
            <br />
            <a className="link_a" href="#">
              Thay camera
            </a>
            <br />
            <a className="link_a" href="#">
              Thay chân sạc
            </a>
            <br />
            <a className="link_a" href="#">
              Xem tất cả;
            </a>
          </div>
        </div>
        <br></br>
        <div className="container">
          {this.state.phones.map((products, index) => (
            <div className="prd" key={index}>
              <img
                className="image-wrapper"
                style={{ width: "200px", height: "200px" }}
                src={products.image}
                alt="file"
              ></img>
              <p className="name-wrapper">{products.proName}</p>
              <p>{products.description}</p>
              <div>
                <span className="price-wrapper">
                  Price: {products.price}VND
                </span>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div className="viewallcat-tabled">
          <a className="titel">Sửa Laptop</a>
          <br />
          <a className="link_a" href="#">
            Thay ép mặt kính
          </a>
          <br />
          <a className="link_a" href="#">
            Thay cảm ứng
          </a>
          <br />
          <a className="link_a" href="#">
            Thay màn hình
          </a>
          <br />
          <a className="link_a" href="#">
            Thay kính lưng
          </a>
          <br />
          <a className="link_a" href="#">
            Thay pin
          </a>
          <br />
          <a className="link_a" href="#">
            Thay camera
          </a>
          <br />
          <a className="link_a" href="#">
            Thay chân sạc
          </a>
          <br />
          <a className="link_a" href="#">
            Xem tất cả;
          </a>
        </div>
        <br></br>
        <div className="container">
          {this.state.phones.map((products, index) => (
            <div className="prd" key={index}>
              <img
                className="image-wrapper"
                style={{ width: "200px", height: "200px" }}
                src={products.image}
                alt="file"
              ></img>
              <p className="name-wrapper">{products.proName}</p>

              <div>
                <span className="price-wrapper">{products.price}VND</span>
              </div>
              <p className="des-wrapper">{products.description}</p>
            </div>
          ))}
        </div>
        <br></br>
      </div>
      <Footer></Footer>
      </div>
    );
  }
}
