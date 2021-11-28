import React from "react";
import Meta from "@components/core/meta/Meta";
import Gallery from "@components/core/gallery/Gallery";
import { interiorCarpentry } from "@components/core/gallery/utils/galleries";

const menuiserieInterieure = {
  meta: "interior-carpentry",
  title: "Menuiserie interieure",
};

export default function MenuiserieInterieure() {
  const { meta, title } = menuiserieInterieure;

  return (
    <div>
      <Meta typeMeta={meta} />
      <h2>{title}</h2>
      <Gallery gallery={interiorCarpentry} />
    </div>
  );
}
