/* eslint-disable react/prop-types */
function Post({ title, body }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
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
}

export default Post;
