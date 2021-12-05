import React from "react";
import Meta from "@components/core/meta/Meta";

const AgencementInterieurData = { meta: "interior-layout" };

export default function AgencementInterieur() {
  const { meta } = AgencementInterieurData;

  return (
    <div>
      <Meta typeMeta={meta} />
      <h1>Création</h1>
    </div>
  );
}
