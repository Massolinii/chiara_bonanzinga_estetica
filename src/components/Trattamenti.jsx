import { Link } from "react-router-dom";
import "../css/Trattamenti.css";
import { Container } from "react-bootstrap";

export default function Trattamenti() {
  const formatPrice = (price) => (
    <>
      € {price}
      <span className="small-text">,00</span>
    </>
  );

  return (
    <Container fluid className="container-page">
      <h4 className="mt-4 mb-3 text-center trattamenti-title">CIGLIA</h4>
      <table className="table table-custom table-responsive table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Trattamento</th>
            <th scope="col">Prezzo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laminazione ciglia</td>
            <td>{formatPrice(30)}</td>
          </tr>
          <tr>
            <td>Laminazione sopracciglia</td>
            <td>{formatPrice(30)}</td>
          </tr>
          <tr>
            <td>Laminazione ciglia + sopracciglia</td>
            <td>{formatPrice(50)}</td>
          </tr>
          <tr>
            <td>One to one</td>
            <td>{formatPrice(30)}</td>
          </tr>
          <tr>
            <td>Wet</td>
            <td>{formatPrice(40)}</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>{formatPrice(60)}</td>
          </tr>
          <tr>
            <td>Megavolume</td>
            <td>{formatPrice(70)}</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-4 mb-3 text-center trattamenti-title">CERE</h4>
      <table className="table table-custom table-responsive table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Trattamento</th>
            <th scope="col">Prezzo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ceretta gambe</td>
            <td>{formatPrice(20)}</td>
          </tr>
          <tr>
            <td>Ceretta gambe + inguine integrale</td>
            <td>{formatPrice(30)}</td>
          </tr>
          <tr>
            <td>Ceretta mezze braccia (entrambe)</td>
            <td>{formatPrice(5)}</td>
          </tr>
          <tr>
            <td>Ceretta braccia intere</td>
            <td>{formatPrice(10)}</td>
          </tr>
          <tr>
            <td>Ceretta ascelle</td>
            <td>{formatPrice(5)}</td>
          </tr>
          <tr>
            <td>Ceretta sopracciglia</td>
            <td>{formatPrice(5)}</td>
          </tr>
          <tr>
            <td>Ceretta baffi</td>
            <td>{formatPrice(1)}</td>
          </tr>
          <tr>
            <td>Ceretta glutei</td>
            <td>{formatPrice(5)}</td>
          </tr>
          <tr>
            <td>Ceretta schiena</td>
            <td>{formatPrice(5)}</td>
          </tr>
          <tr>
            <td>Ceretta total body</td>
            <td>{formatPrice(40)}</td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-4 mb-3 text-center trattamenti-title">UNGHIE</h4>
      <table className="table table-custom table-responsive table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Trattamento</th>
            <th scope="col">Prezzo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semipermanente mani</td>
            <td>{formatPrice(20)}</td>
          </tr>
          <tr>
            <td>Semipermanente piedi</td>
            <td>{formatPrice(20)}</td>
          </tr>
          <tr>
            <td>Manicure</td>
            <td>{formatPrice(10)}</td>
          </tr>
          <tr>
            <td>Smontaggio + Manicure</td>
            <td>{formatPrice(15)}</td>
          </tr>
          <tr>
            <td>Allungamento in gel con cartina</td>
            <td>{formatPrice(25)}</td>
          </tr>
          <tr>
            <td>^ Refill allungamento in gel</td>
            <td>{formatPrice(20)}</td>
          </tr>
          <tr>
            <td>Allungamento in agrigel con dual form</td>
            <td>{formatPrice(30)}</td>
          </tr>
          <tr>
            <td>^ Refill allungamento in agrigel</td>
            <td>{formatPrice(25)}</td>
          </tr>
        </tbody>
      </table>
      <h6 className="return-home">
        <Link className="scopri-link" to={"/"}>
          RITORNA ALLA HOME{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 72 72"
          >
            <path d="M 36 10 C 34.861 10 33.722922 10.386609 32.794922 11.162109 L 11.517578 28.941406 C 10.052578 30.165406 9.5519375 32.270219 10.460938 33.949219 C 11.711938 36.258219 14.661453 36.740437 16.564453 35.148438 L 35.359375 19.445312 C 35.730375 19.135313 36.269625 19.135313 36.640625 19.445312 L 55.435547 35.148438 C 56.183547 35.774437 57.093047 36.078125 57.998047 36.078125 C 59.171047 36.078125 60.333953 35.567219 61.126953 34.574219 C 62.503953 32.850219 62.112922 30.303672 60.419922 28.888672 L 58 26.867188 L 58 16.667969 C 58 15.194969 56.805984 14 55.333984 14 L 52.667969 14 C 51.194969 14 50 15.194969 50 16.667969 L 50 20.181641 L 39.205078 11.162109 C 38.277078 10.386609 37.139 10 36 10 z M 35.996094 22.925781 L 13.996094 41.302734 L 13.996094 50 C 13.996094 54.418 17.578094 58 21.996094 58 L 49.996094 58 C 54.414094 58 57.996094 54.418 57.996094 50 L 57.996094 41.302734 L 35.996094 22.925781 z M 32 38 L 40 38 C 41.105 38 42 38.895 42 40 L 42 50 L 30 50 L 30 40 C 30 38.895 30.895 38 32 38 z"></path>
          </svg>
        </Link>
      </h6>
    </Container>
  );
}
