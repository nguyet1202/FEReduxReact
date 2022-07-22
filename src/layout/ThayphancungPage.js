import React, { Component } from "react";
import Categories from "../Mockdata/Categories.json";
// import showHomepage from "../Mockdata/showHomepage.json";
import axios from "axios";
import Header from "../page/Header";
import Footer from "../page/Footer";

export default class ThaypinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: [],
    };
  }
  async componentDidMount() {
    await axios
      .get(`https://6290b07827f4ba1c65bf4562.mockapi.io/service/1/products`)
      .then((res) => {
        this.setState(() => ({ pins: res.data }));
      });
  }
  render() {
    return (
        <div>
            <Header></Header>
                <div className="Content">
                    <br></br>
                    <div className="container">
                    {this.state.pins.map((products, index) => (
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
                
                    <br></br>
                    <div className="container">
                    {this.state.pins.map((products, index) => (
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
