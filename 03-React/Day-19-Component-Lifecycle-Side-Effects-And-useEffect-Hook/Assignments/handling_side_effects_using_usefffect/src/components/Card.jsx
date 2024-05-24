const Card = (post) => {
  const { id, title, body } = post;
  return (
    <div
      style={{
        border: "1px solid black",
        width: "80%",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <p>
        <strong>Id : </strong>
        {id}
      </p>
      <p>
        <strong>Title : </strong>
        {title}
      </p>
      <p>
        <strong>Body : </strong>
        {body}
      </p>
    </div>
  );
};

export default Card;
