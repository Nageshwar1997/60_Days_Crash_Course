import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <img width={200} height={200} src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Category : {product.category}</p>
      <p>Price : {product.price}</p>
      <p>Rating : {product.rating.rate}</p>
      <p>Rating Count : {product.rating.count}</p>
    </div>
  );
};

export default ProductCard;
