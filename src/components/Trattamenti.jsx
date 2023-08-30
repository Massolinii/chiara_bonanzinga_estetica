import "../css/Trattamenti.css";

export default function Trattamenti() {
  {/* WIP on text-formatting for the price section*/}
  const formatPrice = (price) => (
    <>
      € {price}
      <span className="small-text">,00</span>
    </>
  );

  return (
    <div className="container mt-5">
      <h4 className="mt-4 mb-3 text-center trattamenti-title">
        Trattamenti CIGLIA
      </h4>
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

      <h4 className="mt-4 mb-3 text-center trattamenti-title">
        Trattamenti CERETTE
      </h4>
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
      <br />
    </div>
  );
}
