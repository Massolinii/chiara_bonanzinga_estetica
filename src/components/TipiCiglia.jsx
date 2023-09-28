import "../css/TipiCiglia.css";
import TitleSection from "./TitleSection";

export default function TipiCiglia() {
  return (
    <div className="mx-5 my-3 py-5 section-tipiciglia">
      <TitleSection label={"I TRATTAMENTI"} />
      <h5 className="my-5">
        <span className="titolo-trattamento">LAMINAZIONE</span>, un trattamento
        rivoluzionario per sopracciglia folte e ben definite. Utilizza una
        formula speciale per lisciare e sollevare i peli, dando alle tue
        sopracciglia un aspetto più pieno e ordinato.
        <span className="catchphrase">
          <br />
          La soluzione più semplice per ciglia da urlo.
        </span>
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">VOLUME</span>, pensato per chi
        desidera sopracciglia più folte e drammatiche. I peli vengono
        posizionati in modo da creare un effetto tridimensionale, aggiungendo
        profondità e volume alle tue sopracciglia.
        <span className="catchphrase">
          <br />
          Dona uno sguardo che non passa inosservato.{" "}
        </span>
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">MEGAVOLUME</span>, porta il
        concetto di volume al livello successivo. Questo trattamento utilizza
        ancor più peli per creare un look ultra-drammatico e audace.
        <span className="catchphrase">
          <br />
          Per chi vuole ciglia che catturano l'attenzione.{" "}
        </span>
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">ONE TO ONE</span>, personalizzato
        per soddisfare le esigenze individuali. Ogni pelo viene posizionato
        singolarmente, permettendo un controllo totale sulla forma e sullo stile
        delle tue sopracciglia.
        <span className="catchphrase">
          <br />
          Adatto ad un look naturale ma ben definito.{" "}
        </span>
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">WET</span>, offre un aspetto
        "appena uscito dalla doccia", con sopracciglia che sembrano naturalmente
        umide e lucenti. Le sopracciglia vengono tenute idratate e brillanti a
        lungo.
        <span className="catchphrase">
          <br />
          La scelta più semplice per occasioni da urlo.{" "}
        </span>
      </h5>
    </div>
  );
}
