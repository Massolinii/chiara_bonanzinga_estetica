import "../css/TipiCiglia.css";
import TitleSection from "./TitleSection";

export default function TipiCiglia() {
  return (
    <div id="tp-tipiciglia">
      <br />
      <br />
      {/* Funziona, stica delle goodpractice */}
      <br />
      <br />

      <TitleSection label={"I TRATTAMENTI"} />
      <h5 className="my-5">
        <span className="titolo-trattamento">LAMINAZIONE</span>,{" "}
        <span className="catchphrase">
          La soluzione più semplice per ciglia da urlo.
        </span>
        <br />
        Un trattamento rivoluzionario per sopracciglia folte e ben definite.
        Utilizza una formula speciale per lisciare e sollevare i peli, dando
        alle tue sopracciglia un aspetto più pieno e ordinato.
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">VOLUME</span>,{" "}
        <span className="catchphrase">
          Dona uno sguardo che non passa inosservato.
        </span>
        <br />
        Pensato per chi desidera sopracciglia più folte e drammatiche. I peli
        vengono posizionati in modo da creare un effetto tridimensionale,
        aggiungendo profondità e volume alle tue sopracciglia.
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">MEGAVOLUME</span>,{" "}
        <span className="catchphrase">
          Per chi vuole ciglia che catturano l'attenzione.
        </span>
        <br />
        Porta il concetto di volume al livello successivo. Questo trattamento
        utilizza ancor più peli per creare un look ultra-drammatico e audace.
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">ONE TO ONE</span>,{" "}
        <span className="catchphrase">
          Adatto ad un look naturale ma ben definito.
        </span>
        <br />
        Personalizzato per soddisfare le esigenze individuali. Ogni pelo viene
        posizionato singolarmente, permettendo un controllo totale sulla forma e
        sullo stile delle tue sopracciglia.
      </h5>
      <h5 className="my-5">
        <span className="titolo-trattamento">WET</span>,{" "}
        <span className="catchphrase">
          La scelta più semplice per occasioni da urlo.
        </span>
        <br />
        Offre un aspetto "appena uscito dalla doccia", con sopracciglia che
        sembrano naturalmente umide e lucenti. Le sopracciglia vengono tenute
        idratate e brillanti a lungo.
      </h5>
      <br />
    </div>
  );
}
