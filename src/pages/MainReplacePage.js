import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class CaseReplacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: [],
    };
  }
  async componentDidMount() {
    await axios.get(`http://127.0.0.1:8000/api/service/5`).then((res) => {
      this.setState(() => ({ case: res.data }));
    });
    console.log("test");
  }
  render() {
    return (
      <div>
        
        <div className="prd-list">
          <nav className="linking">
            <a className="Itemlinking" href="http://localhost:3000/">
              Trang chủ
            </a>
            <span className="divider">/</span>
            <a className="Itemlinking" href="#">
              Thay Main
            </a>
          </nav>
          <div></div>
          <br></br>
          <div className="prd-container">
            {this.state.case.map((products, index) => (
              <div className="prd" key={index}>
                <img
                  className="prd-img"
                  style={{ width: "200px", height: "200px" }}
                  src={products.img}
                  alt="file"
                ></img>
                <p className="prd-name">{products.product_name}</p>

                <div>
                  <span className="prd-price">{products.price}VND</span>
                </div>
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
