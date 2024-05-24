import React, { useEffect, useState } from "react";

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Scroll Position: {scrollPosition.toFixed(0)}px</h1>
      <p>Scroll down to see the effect.</p>
    </div>
  );
};

export default ScrollComponent;
