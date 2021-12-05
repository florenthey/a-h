import React from "react";
import Meta from "@components/core/meta/Meta";
import Gallery from "@components/core/gallery/gallery/Gallery";
import { interiorCarpentry } from "@components/core/gallery/utils/galleries";
import GalleryPlayer from "@components/core/gallery/galleryPlayer/GalleryPlayer";
import { useGalleryPlayer } from "@context/useGalleryPlayer";

const menuiserieInterieure = {
  meta: "interior-carpentry",
  title: "Menuiserie interieure",
};

export default function MenuiserieInterieure() {
  const { meta, title } = menuiserieInterieure;
  const { galleryPlayer } = useGalleryPlayer();

  return (
    <>
      {galleryPlayer !== null && <GalleryPlayer />}
      <div>
        <Meta typeMeta={meta} />
        <h1>Création</h1>
        <h2>{title}</h2>
        <Gallery gallery={interiorCarpentry} />
      </div>
    </>
  );
}
