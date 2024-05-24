import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";
import Card from "./Card";

const FetchDataComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const respData = await resp.json();

      const someData = respData.slice(0, 10);
      console.log(someData);

      setPosts(someData);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ position: "relative", top: "220px" }}>
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorIndicator />
      ) : (
        posts?.map((post, index) => {
          return <Card key={index} {...post} />;
        })
      )}
    </div>
  );
};

export default FetchDataComponent;
