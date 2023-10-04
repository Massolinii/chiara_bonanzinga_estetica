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
      <h5 className="my-5 border-left">
        <span className="titolo-trattamento">LAMINAZIONE</span>,{" "}
        <span className="catchphrase">
          La soluzione più semplice per ciglia da urlo.
        </span>
        <br /> <br />
        Rivela la bellezza naturale delle tue ciglia con la laminazione: una
        svolta lussuosa per uno sguardo luminoso e impeccabile.
      </h5>
      <h5 className="my-5 border-left">
        <span className="titolo-trattamento">ONE TO ONE</span>,{" "}
        <span className="catchphrase">
          Adatto ad un look naturale ma ben definito.
        </span>
        <br /> <br />
        Con il trattamento One To One, ogni ciglia riceve l'attenzione che
        merita, per uno sguardo straordinario.
      </h5>
      <h5 className="my-5 border-left">
        <span className="titolo-trattamento">WET</span>,{" "}
        <span className="catchphrase">
          La scelta più semplice per occasioni da urlo.
        </span>
        <br /> <br />
        Per ciglia dall'effetto bagnato e seducente, scegli il trattamento Wet:
        un'esplosione di sensualità per i tuoi occhi.
      </h5>
      <h5 className="my-5 border-left">
        <span className="titolo-trattamento">VOLUME</span>,{" "}
        <span className="catchphrase">
          Dona uno sguardo che non passa inosservato.
        </span>
        <br /> <br />
        Aggiungi profondità e volume magnetico al tuo sguardo con il trattamento
        volume per ciglia.
      </h5>
      <h5 className="my-5 border-left">
        <span className="titolo-trattamento">MEGAVOLUME</span>,{" "}
        <span className="catchphrase">
          Per chi vuole ciglia che catturano l'attenzione.
        </span>
        <br /> <br />
        Ciglia da passerella con il trattamento Megavolume: effetto spettacolare
        garantito.
      </h5>
      <br />
    </div>
  );
}
