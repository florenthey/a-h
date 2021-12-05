import React from "react";
import Meta from "@components/core/meta/Meta";
import GlobalLink from "@components/button/GlobalLink";
import { useForm } from "react-hook-form";

const contactData = {
  meta: "contact",
  title: "Contact",
  text: " Vous avez des questions, des besoins ou des envies? Faites nous confiance, demandez à des artisans passionnés et professionnels. Remplissez le formulaire ou contactez nous soit via notre adresse email, soit directement par téléphone. Nous vous répondrons dans les plus brefs délais.",
};
export default function Contact() {
  const { meta, title, text } = contactData;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Meta typeMeta={meta} />
      <GlobalLink typeLink="return" />
      <h1>{title}</h1>
      <p>{text}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select name="client-type" {...register("client-type")}>
          <option value="">Vous êtes:</option>
          <option value="particular">Particulié</option>
          <option value="professional">Professionel</option>
        </select>
        <input
          type="text"
          name="firstname"
          placeholder="Nom"
          {...register("firstname")}
        ></input>
        <input
          type="text"
          name="lastname"
          placeholder="Prénom"
          {...register("lastname")}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        ></input>
        <textArea
          name="message"
          placeholder="Message"
          {...register("message")}
        ></textArea>
        <button type="submit">Envoyer</button>
      </form>
      <GlobalLink typeLink="services" />
      <GlobalLink typeLink="creations" />
    </div>
  );
}
