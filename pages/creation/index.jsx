import React from "react";
import GlobalLink from "@components/button/GlobalLink";
import Meta from "@components/core/meta/Meta";
import Galleries from "@components/core/gallery/Galleries";

const creationData = {
  meta: "creation",
  title: "Créations",
  text: "Découvrez ici ce qui fait le bonheur de nos clients.",
};

export default function Creation() {
  const { meta, title, text } = creationData;
  return (
    <div>
      <Meta typeMeta={meta} />
      <GlobalLink typeLink="return" />
      <h1>{title}</h1>
      <p>{text}</p>
      <Galleries />
      <GlobalLink typeLink="contact" />
    </div>
  );
}
