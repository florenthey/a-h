import React from "react";
import Meta from "@components/core/meta/Meta";
import { exteriorCarpentry } from "@components/core/gallery/utils/galleries";
import { useGalleryPlayer } from "@context/useGalleryPlayer";
import Gallery from "@components/core/gallery/gallery/Gallery";
import GalleryPlayer from "@components/core/gallery/galleryPlayer/GalleryPlayer";

const menuiserieExterieureData = {
  meta: "exterior-carpentry",
  title: "Menuiserie exterieure",
};

export default function MenuiserieExterieure() {
  const { meta, title } = menuiserieExterieureData;
  const { galleryPlayer } = useGalleryPlayer();

  return (
    <>
      {galleryPlayer !== null && <GalleryPlayer />}
      <div>
        <Meta typeMeta={meta} />
        <h1>Création</h1>
        <h2>{title}</h2>
        <Gallery gallery={exteriorCarpentry} />
      </div>
    </>
  );
}
