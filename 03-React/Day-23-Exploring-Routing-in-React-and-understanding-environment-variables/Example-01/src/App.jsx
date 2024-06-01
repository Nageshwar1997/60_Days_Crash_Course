import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
