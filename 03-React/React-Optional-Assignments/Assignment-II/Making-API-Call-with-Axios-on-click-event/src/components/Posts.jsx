import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      {
        let response = await axios({
          method: "get",
          url: "https://jsonplaceholder.typicode.com/posts",
        });
        setPosts(response.data);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  console.log(posts);

  return (
    <div style={{marginTop:"20px"}}>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"10px"}}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
