import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    {
      /*Complete the missing code*/
    }
    try {
      {
        /*Complete the missing code*/
      }
    } catch (error) {
      {
        /*Complete the missing code*/
      }
    }
  }

  useEffect(/*Complete the missing code*/);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>

      {/*Complete the missing code*/}
    </div>
  );
}

export default Posts;
