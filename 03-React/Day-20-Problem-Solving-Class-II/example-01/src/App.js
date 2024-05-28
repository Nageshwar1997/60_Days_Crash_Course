import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   document.title = "Counter Application";
  //   console.log("Callback inside useEffect called");
  // }, [count]);
  // console.log("Rendering.....");

  useEffect(() => {
    async function fetchAndUpdateData() {
      try {
        let res = await axios({
          method: "get",
          url: "http://fakestoreapi.com/products",
        });
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAndUpdateData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
