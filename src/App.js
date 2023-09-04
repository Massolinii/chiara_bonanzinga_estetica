import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trattamenti from "./components/Trattamenti";
import ScrollToTop from "./components/ScrollToTop";
import Galleria from "./components/Galleria";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <MyNavbar />
        {/* <PerInfo /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trattamenti" element={<Trattamenti />} />
          <Route path="/galleria" element={<Galleria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
