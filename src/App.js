import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/NavBar";
import PerInfo from "./components/PerInfo";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trattamenti from "./components/Trattamenti";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <PerInfo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trattamenti" element={<Trattamenti />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
