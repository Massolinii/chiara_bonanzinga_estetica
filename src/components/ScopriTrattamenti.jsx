import { Link } from "react-router-dom";
import "../css/ScopriTrattamenti.css";

export default function ScopriTrattamenti() {
  return (
    <div className="scopri-servizi">
      <h5 className="scopri-button">
        <Link className="scopri-link" to={"/trattamenti"}>
          SCOPRI I TRATTAMENTI{" "}
        </Link>
      </h5>

      <br />
      <br />
      <Link className="scopri-link" to={"/certificati"}>
        <h5 className="scopri-button">CERTIFICAZIONI</h5>
      </Link>
      <br />
      <br />
    </div>
  );
}
