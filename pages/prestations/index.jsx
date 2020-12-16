import React from "react";
import GlobalLink from "../../components/button/GlobalLink";
import Meta from "../../components/core/meta/Meta";

export default function Prestation() {
  return (
    <div>
      <Meta typeMeta={"services"} />
      <GlobalLink typeLink={"return"} />
      <h1>Prestations</h1>
      <p>
        Une nouvelle cuisine? Un dressing et des rangements? Nous sommes à votre
        écoute. Nous nous déplaçons dans toute la France.
      </p>
      <p>
        Vous êtes un particulier ou un professionnel et vous êtes à la recherche
        d’artisans sérieux pour vous aidez dans vos projets? À l’ Atelier
        Heyraud, nous sommes spécialistes en menuiserie, aménagement et
        peinture. Nous nous adaptons et créons selon vos envies. – Menuiserie
        intérieur: portes, parquets, escaliers, lambris – Menuiserie extérieure:
        portes d’entrées, fenêtres, baies coulissantes, volets – Aménagement
        intérieur: cuisines équipées, bibliothèques, dressings, meubles de
        rangements, verrières d’intérieur – Aménagement extérieur: portails,
        terrasses, bacs pour fleurs, bancs, locaux techniques de collectivités –
        Divers: aménagements de boutiques, peintures intérieurs, peintures
        extérieures, peintures naturelles, placos …
      </p>
      <GlobalLink typeLink={"contact"} />
    </div>
  );
}
