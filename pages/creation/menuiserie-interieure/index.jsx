import React from "react";
import Meta from "@components/core/meta/Meta";

const menuiserieInterieure = { meta: "interior-carpentry" };

export default function MenuiserieInterieure() {
  const { meta } = menuiserieInterieure;

  return (
    <div>
      <Meta typeMeta={meta} />
    </div>
  );
}
