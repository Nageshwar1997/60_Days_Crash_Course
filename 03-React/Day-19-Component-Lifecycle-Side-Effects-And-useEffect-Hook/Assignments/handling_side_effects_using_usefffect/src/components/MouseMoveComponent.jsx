import React, { useEffect, useState } from "react";

const MouseMoveComponent = () => {
  const [mousePosition, setMousePosition] = useState({
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        screenX: event.screenX,
        screenY: event.screenY,
        clientX: event.clientX,
        clientY: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Mouse Move</h1>
      <p>Mouse Position:</p>
      <ul>
        <li>
          <p>
            Screen : X - <strong>{mousePosition.screenX}</strong>, Y -{" "}
            <strong>{mousePosition.screenY}</strong>
          </p>
        </li>
        <li>
          <p>
            client : X - <strong>{mousePosition.clientX}</strong>, Y -{" "}
            <strong>{mousePosition.clientY}</strong>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MouseMoveComponent;
