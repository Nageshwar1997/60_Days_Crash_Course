/* eslint-disable react/prop-types */

const Product = (props) => {
  const {
    id,
    image,
    title,
    category,
    price,
    description,
    rating: { rate, count },
  } = props.product;
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <img width={200} height={200} src={image} alt={title} />
      <h4>Id : {id}</h4>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>Price : ${price}</p>
      <p style={{ fontSize: "10px" }}>{description}</p>
      <p>Rating : {rate}</p>
      <p>Rate Count : {count}</p>
    </div>
  );
};

export default Product;
