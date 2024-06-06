import "./App.css";
import Counter1 from "./components/Counter1";
import ProfileUpdater from "./components/ProfileUpdater";
import ScoreKeeper from "./components/ScoreKeeper";
import ShowHideText from "./components/ShowHideText";
import TaskManager from "./components/TaskManager";
import TextInput1 from "./components/TextInput1";
import ToggleMessage1 from "./components/ToggleMessage1";
import UserInfo1 from "./components/UserInfo1";
import UsernameInput from "./components/UsernameInput";
import ItemList1 from "./components/ItemList1";

function App() {
  return (
    <>
      Uncomment to get particular component
      <div>
        <p className="heading">Problem 1: Number State</p>
        <Counter1 />
        <ScoreKeeper />
      </div>
      <div>
        <p className="heading">Problem 2: String State</p>
        <TextInput1 />
        <hr />
        <UsernameInput />
      </div>
      <div>
        <p className="heading">Problem 3: Boolean State</p>
        <span className="flex" style={{ gap: "10px" }}>
          <ToggleMessage1 />
          <hr />
          <ShowHideText />
        </span>
      </div>
      <div>
        <p className="heading">Problem 4: Object State</p>
        <UserInfo1 />
        <hr />
        <ProfileUpdater />
      </div>
      <div>
        <p className="heading">Problem 5: Array State</p>
        <ItemList1 />
        <TaskManager />
      </div>
    </>
  );
}

export default App;
