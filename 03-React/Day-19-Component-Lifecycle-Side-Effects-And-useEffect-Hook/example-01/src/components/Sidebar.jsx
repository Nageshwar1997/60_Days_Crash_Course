import React from "react";

const Sidebar = (props) => {
  const { fruitsList } = props;
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <div className="fruits-list">
        <ul>
        <strong>Fruits List</strong>
          {fruitsList.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
