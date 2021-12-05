import React from "react";
import Gallery from "./gallery/Gallery";
import { galleries } from "./utils/galleries";

export default function Galleries() {
  const gallery = galleries.map((gallery) => {
    const { content } = gallery;

    return <Gallery gallery={content} />;
  });
  return <>{gallery}</>;
}
