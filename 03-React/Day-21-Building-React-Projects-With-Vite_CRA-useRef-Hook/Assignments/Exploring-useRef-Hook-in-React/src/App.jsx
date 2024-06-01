import "./App.css";
import ChangeBackgroundColor from "./components/ChangeBackgroundColor";
import FocusableInput from "./components/FocusableInput";
import UncontrolledInput from "./components/UncontrolledInput";

function App() {
  return (
    <>
      <FocusableInput />
      <UncontrolledInput />
      <ChangeBackgroundColor />
    </>
  );
}

export default App;
