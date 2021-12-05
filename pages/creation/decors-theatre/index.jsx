import React from "react";
import Meta from "@components/core/meta/Meta";

const decorsTheatreData = { meta: "theater-sets" };

export default function DecorsTheatre() {
  const { meta } = decorsTheatreData;

  return (
    <div>
      <Meta typeMeta={meta} />
      <h1>Création</h1>
    </div>
  );
}
