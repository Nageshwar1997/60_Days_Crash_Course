// src/components/UserInfo1.jsx

import { useState } from "react";

function UserInfo1() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <span className="flex" style={{ gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
        />
      </span>
    </div>
  );
}

export default UserInfo1;
