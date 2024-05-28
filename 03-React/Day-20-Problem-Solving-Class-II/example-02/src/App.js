import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorIndicator from "./components/ErrorIndicator";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      // complete code
      let res = await axios({
        method: "get",
        url: `https://reqres.in/api/users?page=${page}`,
      });

      setUsers(res?.data?.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      // complete code
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  function handlePageIncrease() {
    if (page < 2) {
      setPage(page + 1);
    }
  }
  function handlePageDecrease() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(
    function () {
      // complete code
      fetchAndUpdateData();
    },
    [page]
  );

  return (
    <div className="App">
      <div>
        {loading ? (
          <LoadingIndicator />
        ) : error ? (
          <ErrorIndicator />
        ) : (
          <>
            <h1>List of users</h1>
            <div className="pagination">
              <button onClick={handlePageDecrease}>Prev</button>
              <span>{page}</span>
              <button onClick={handlePageIncrease}>Next</button>
            </div>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {users?.map((user) => (
                <UserCard key={user?.id} user={user} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
