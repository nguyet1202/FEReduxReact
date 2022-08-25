import React, { Component } from "react";
import axios from "axios";
export default class ShowBrandXiaomi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xiaomi: [],
    };
  }
  async componentDidMount() {
    await axios
      .get(`http://127.0.0.1:8000/api/brand/3/products`)
      .then((res) => {
        this.setState(() => ({ xiaomi: res.data }));
      });
    console.log("test");
  }

  render() {
    return (
      <div>
        {/* <Header></Header> */}
        <div className="prd-list">
          <nav className="linking">
            <a className="Itemlinking" href="http://localhost:3000/">
              Trang chủ
            </a>
            <span className="divider">/</span>
            <a className="Itemlinking" href="#">
              Xiaomi
            </a>
          </nav>
          <div></div>
          <br></br>
          <div className="prd-container">
            {this.state.xiaomi.map((products, index) => (
              <a href={`/ShowBrandXiaomi/${products.id}`}>
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
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
