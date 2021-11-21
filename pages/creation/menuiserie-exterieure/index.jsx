import React from "react";
import Meta from "@components/core/meta/Meta";

const menuiserieExterieureData = { meta: "exterior-carpentry" };

export default function MenuiserieExterieure() {
  const { meta } = menuiserieExterieureData;

  return (
    <div>
      <Meta typeMeta={meta} />
    </div>
  );
}
