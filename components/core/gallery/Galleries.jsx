import React from "react";
import Gallery from "./Gallery";
import { galleries } from "./utils/galleries";

export default function Galleries() {
  const gallery = galleries.map((gallery) => {
    return <Gallery gallery={gallery} />;
  });
  return <div>{gallery}</div>;
}
