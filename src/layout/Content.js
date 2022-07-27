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
    await axios.get(`http://127.0.0.1:8000/api/products`).then((res) => {
      this.setState(() => ({ phones: res.data }));
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header></Header>
        <br></br>
        <div className="Content">
          <h2 className="titleType">SỬA ĐIỆN THOẠI</h2>
          <br></br>
          <div className="container">
            {this.state.phones.map((product, index) => {
              var cate = "";
              switch (product.service_id) {
                case 1: cate = "ThayvoDetail"; break;
                case 2: cate = "ThaykinhDetail"; break;
                case 3: cate = "ThaypinDetail"; break;
                case 4: cate = "ThayphancungDetail"; break;
              }
              return (
                <div className="prd" key={index}>
                  <Link to={`/${cate}/${index}`}>
                    <img
                      className="image-wrapper"
                      style={{ width: "200px", height: "200px" }}
                      src={product.img}
                      alt="file"
                    ></img>
                    <p className="name-wrapper">{product.product_name}</p>
                    <div>
                      <span className="price-wrapper">{product.price}VND</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <br></br>
          <h2 className="titleType">SỬA TABLET</h2>
          <br></br>
          <div className="container">
          {this.state.phones.map((product, index) => {
              var cate = "";
              switch (product.service_id) {
                case 1: cate = "ThayvoDetail"; break;
                case 2: cate = "ThaykinhDetail"; break;
                case 3: cate = "ThaypinDetail"; break;
                case 4: cate = "ThayphancungDetail"; break;
              }
              return (
                <div className="prd" key={index}>
                  <Link to={`/${cate}/${index}`}>
                    <img
                      className="image-wrapper"
                      style={{ width: "200px", height: "200px" }}
                      src={product.img}
                      alt="file"
                    ></img>
                    <p className="name-wrapper">{product.product_name}</p>
                    <div>
                      <span className="price-wrapper">{product.price}VND</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <br></br>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
