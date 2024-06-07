/* eslint-disable react/prop-types */
function Post({ title, body }) {
  return (
    <div style={{border: "1px solid black", padding:"5px", marginTop:"10px"}}>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
