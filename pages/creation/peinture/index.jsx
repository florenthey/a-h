import React from "react";
import Meta from "@components/core/meta/Meta";

const peintureData = { meta: "paint" };

export default function Peinture() {
  const { meta } = peintureData;
  return (
    <div>
      <Meta typeMeta={meta} />
    </div>
  );
}
