import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";
import Product from "./Product";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");

  async function fetchProducts() {
    setLoading(true);
    try {
      let resp = await fetch(`https://fakestoreapi.com/products?sort=${sort}`);
      let respData = await resp?.json();
      // console.log(respData);
      setProducts(respData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [sort]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="asc">ASC</option>
          <option value="desc">DSC</option>
        </select>
      </div>
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
