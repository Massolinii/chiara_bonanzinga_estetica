import { Link } from "react-router-dom";
import "../css/ScopriTrattamenti.css";

export default function ScopriTrattamenti() {
  return (
    <div className="scopri-servizi">
      <Link className="scopri-link" to={"/trattamenti"}>
        <h5 className="scopri-button">SCOPRI I TRATTAMENTI</h5>
      </Link>
      <br />
      <br />
      <Link className="scopri-link">
        <h5 className="scopri-button">CERTIFICAZIONI</h5>
      </Link>
      <br />
      <br />
    </div>
  );
}
