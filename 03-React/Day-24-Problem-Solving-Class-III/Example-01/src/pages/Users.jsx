import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchUsers() {
    setLoading(true);
    try {
      let resp = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=1",
      });
      const respData = resp?.data?.data;
      setUsers(respData);
      setError(false);
      setLoading(false);
      console.log(respData);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users?.map((user) => {
          const { first_name, last_name, id } = user;
          return (
            <div
              style={{
                border: "1px dashed black",
                padding: "5px",
                margin: "5px",
              }}
              key={user.id}
            >
              <h3>
                {first_name} {last_name}
              </h3>
              <Link to={`/users/${id}`}>Click here for more details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
