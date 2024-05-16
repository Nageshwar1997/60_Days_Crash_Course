import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  return (
    <>
      App
      <Navbar />
      <Main userLoggedIn={userLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
