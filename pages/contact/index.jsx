import React from "react";
import Meta from "../../components/core/meta/Meta";
import GlobalLink from "../../components/button/GlobalLink";

const contactData = {
  meta: "contact",
  title: "Contact",
  text: " Vous avez des questions, des besoins ou des envies? Faites nous confiance, demandez à des artisans passionnés et professionnels. Remplissez le formulaire ou contactez nous soit via notre adresse email, soit directement par téléphone. Nous vous répondrons dans les plus brefs délais.",
};
export default function Contact() {
  const { meta, title, text } = contactData;

  return (
    <div>
      <Meta typeMeta={meta} />
      <GlobalLink typeLink="return" />
      <h1>{title}</h1>
      <p>{text}</p>
      <GlobalLink typeLink="services" />
      <GlobalLink typeLink="creations" />
    </div>
  );
}
