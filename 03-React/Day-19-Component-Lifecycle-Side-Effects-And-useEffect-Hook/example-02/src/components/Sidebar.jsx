import React from "react";
import FruitsList from "./FruitsList";
import Sample from "./Sample";

const Sidebar = () => {
  const [showSampleComponent, setShowSampleComponent] = React.useState(false);
  return (
    <div id="sidebar">
      <strong>FruitsList</strong>
      <FruitsList />
      {showSampleComponent ? <Sample /> : null}
      <button onClick={() => setShowSampleComponent(!showSampleComponent)}>
        {showSampleComponent
          ? "Hide Sample Component"
          : "Show Sample Component"}
      </button>
    </div>
  );
};

export default Sidebar;
