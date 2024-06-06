// src/components/UsernameInput.jsx

import { useState } from "react";

function UsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          /* complete the missing code */
        }}
      />
      <p>Username: {username.toLowerCase()}</p>
    </div>
  );
}

export default UsernameInput;
