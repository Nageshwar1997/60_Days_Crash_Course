/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { user_id } = useParams();
  // console.log(user_id);

  async function fetchUser() {
    setLoading(true);
    try {
      let resp = await axios({
        method: "get",
        url: `https://reqres.in/api/users/${user_id}`,
      });
      const respData = resp?.data?.data;
      setUser(respData);
      setError(false);
      setLoading(false);
      // console.log(respData);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser(user_id);
  }, [user_id]);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  return (
    <div>
      <h1>User Details</h1>
      <div>
        <img src={user?.avatar} alt={user?.first_name} />
        <h3>
          {user?.first_name} {user?.last_name}
        </h3>
        <h4>{user?.email}</h4>
      </div>
    </div>
  );
};

export default UserDetails;
