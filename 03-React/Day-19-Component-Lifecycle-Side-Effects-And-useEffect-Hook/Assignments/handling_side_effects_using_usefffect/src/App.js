import "./App.css";

import FetchDataComponent from "./components/FetchDataComponent";
import MouseMoveComponent from "./components/MouseMoveComponent";
import DocumentTitleComponent from "./components/DocumentTitleComponent";

function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid black",
          width: "80%",
          marginLeft: "10%",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <MouseMoveComponent />
        <DocumentTitleComponent />
      </div>
      <FetchDataComponent />
    </div>
  );
}

export default App;
