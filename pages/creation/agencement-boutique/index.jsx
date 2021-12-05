import React from "react";
import Meta from "@components/core/meta/Meta";
import Gallery from "@components/core/gallery/gallery/Gallery";
import { storeLayout } from "@components/core/gallery/utils/galleries";

const agencementBoutiqueData = {
  meta: "store-layout",
  title: "Agencement boutique",
};

export default function AgencementBoutique() {
  const { meta, title } = agencementBoutiqueData;
  return (
    <div>
      <Meta typeMeta={meta} />
      <h1>Création</h1>
      <h2>{title}</h2>
      <Gallery gallery={storeLayout} />
    </div>
  );
}
