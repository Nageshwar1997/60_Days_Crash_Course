import React from "react";


function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <img width={200} src={user?.avatar} alt={user?.first_name} />
      <h3>
        Name: {user?.first_name} {user?.last_name}
      </h3>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default UserCard;
