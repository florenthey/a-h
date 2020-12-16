import React from "react";
import Meta from "../../components/core/meta/Meta";
import GlobalLink from "../../components/button/GlobalLink";

export default function Contact() {
  return (
    <div>
      <Meta typeMeta={"contact"} />
      <GlobalLink typeLink={"return"} />
      <h1>Contact</h1>
      <p>
        Vous avez des questions, des besoins ou des envies? Faites nous
        confiance, demandez à des artisans passionnés et professionnels.
        Remplissez le formulaire ou contactez nous soit via notre adresse email,
        soit directement par téléphone. Nous vous répondrons dans les plus brefs
        délais.
      </p>
      <GlobalLink typeLink={"services"} />
      <GlobalLink typeLink={"creations"} />
    </div>
  );
}
