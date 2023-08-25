import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PerInfo from "./components/PerInfo";
import ChiaraLashmaker from "./components/ChiaraLashmaker";
import ServiziCiglia from "./components/ServiziCiglia";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PerInfo />
      </header>

      <div className="App-body">
        <div className="introduction">
          <ChiaraLashmaker />
        </div>
        <div>
          <ServiziCiglia />
        </div>
      </div>
    </div>
  );
}

export default App;
