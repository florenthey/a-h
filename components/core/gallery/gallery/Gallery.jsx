import React from "react";
import Picture from "../Picture";
import { useGalleryPlayer } from "@context/useGalleryPlayer";
import { Wrapper } from "./gallery.style";

export default function Gallery({ gallery }) {
  const { setGalleryPlayer } = useGalleryPlayer();

  const galery = gallery.map((picture, index) => {
    const { path, description, width, height } = picture;
    return (
      <Wrapper
        key={index}
        onClick={() => {
          setGalleryPlayer(picture);
        }}
      >
        <Picture
          path={path}
          description={description}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  });
  return <div>{galery}</div>;
}
