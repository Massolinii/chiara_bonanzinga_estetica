import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PerInfo from "./components/PerInfo";
import ChiaraLashmaker from "./components/ChiaraLashmaker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PerInfo />
      </header>
      <body className="App-body">
        <ChiaraLashmaker />
      </body>
    </div>
  );
}

export default App;
