import "./App.css";
import Posts from "./components/Posts";
import Users from "./components/Users";

export default function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "50px" }}>
        <Users />
        <hr />
        <Posts />
      </div>
    </>
  );
}
