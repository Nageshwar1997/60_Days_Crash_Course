// src/components/UsernameInput.jsx

import { useState } from "react";

function UsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <p>Username: {username.toLowerCase()}</p>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
}

export default UsernameInput;
