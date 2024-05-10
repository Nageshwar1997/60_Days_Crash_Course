import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


function ProductCard({ product }) {
  return (
    <div>
      <img width={200} src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>

    </div>
  )
}
function App() {
  const [count, setCount] = useState(0);
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
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
