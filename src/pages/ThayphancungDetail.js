import React, { Component } from "react";

import axios from "axios";
import {useParams} from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThayMH_EKPage() {

    const screenDetail = {
      img: 'image',
      product_name: 'name',
      price: 'price',
    };

    return (
        <div>
            <Header></Header>
                <div className="Content">
                    <nav className="linking">
                        <a className="Itemlinking" href="http://localhost:3000/">Trang chủ</a>
                        <span className="divider">/</span>
                        <a className="Itemlinking" href="#">Thay màn hình - ép kính</a>
                    </nav>
                    <div></div>
                    <br></br>
                    <div className="container">
                    {this.state.screens.map((products, index) => (
                        <div className="prd" key={index}>
                        <img
                            className="image-wrapper"
                            style={{ width: "200px", height: "200px" }}
                            src={products.img}
                            alt="file"
                        ></img>
                        <p className="name-wrapper">{products.product_name}</p>

                        <div>
                            <span className="price-wrapper">{products.price}VND</span>
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
