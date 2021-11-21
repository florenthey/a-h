import React from "react";
import Meta from "@components/core/meta/Meta";

const agencementBoutiqueData = { meta: "store-layout" };

export default function AgencementBoutique() {
  const { meta } = agencementBoutiqueData;
  return (
    <div>
      <Meta typeMeta={meta} />
    </div>
  );
}
