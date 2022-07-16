import React from "react";
import Meta from "@components/core/meta/Meta";
import Gallery from "@components/core/gallery/gallery/Gallery";
import { interiorCarpentry } from "@components/core/gallery/utils/galleries";
import GalleryPlayer from "@components/core/gallery/galleryPlayer/GalleryPlayer";
import { useGalleryPlayer } from "@context/useGalleryPlayer";
import { Wrapper } from "@styles/Global";

const menuiserieInterieure = {
  meta: "interior-carpentry",
  title: "Menuiserie interieure",
};
export default function MenuiserieInterieure() {
  const { meta, title } = menuiserieInterieure;
  const { galleryPlayer } = useGalleryPlayer();
  const isWindow = typeof window !== "undefined";
  const height = isWindow && window.innerHeight;

  return (
    <>
      {galleryPlayer !== null && <GalleryPlayer height={height} />}
      <Meta typeMeta={meta} />
      {galleryPlayer === null && (
        <>
          <h1>Création</h1>
          <h2>{title}</h2>
          <Gallery gallery={interiorCarpentry} />
        </>
      )}
    </>
  );
}
