import React from "react";
import Meta from "@components/core/meta/Meta";

const agencementExterieurData = { meta: "exterior-layout" };

export default function AgencementExterieur() {
  const { meta } = agencementExterieurData;

  return (
    <div>
      <Meta typeMeta={meta} />
    </div>
  );
}
