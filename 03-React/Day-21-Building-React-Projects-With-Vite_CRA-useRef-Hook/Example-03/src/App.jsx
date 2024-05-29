import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let name = "Nageshwar";
  let age = 26;
  let hobbies = ["Singing", "Dancing", "Cooking"];
  let address = {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  };
  let isMarried = false;
  let foo = () => {
    alert("Function Called");
  };

  return (
    <>
      <Header
        name={name}
        age={age}
        hobbies={hobbies}
        address={address}
        isMarried={isMarried}
        foo={foo}
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
