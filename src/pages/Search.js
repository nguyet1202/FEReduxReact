import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(response.data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <div className="searchTitle">
      <h3>Search Filter</h3>
      <div className="search">
        <form action>
          <input
            id="h_inputSearch"
            type="text"
            placeholder="Tìm kiếm.."
            name="search"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        products
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.product_name
                .toLowerCase()
                .includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}>{item.product_name}</h5>)
          
      )}
    </div>
  );
}
