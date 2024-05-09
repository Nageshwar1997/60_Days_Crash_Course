import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="body">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
