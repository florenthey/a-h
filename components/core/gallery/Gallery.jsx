import React from "react";
import Picture from "./Picture";

export default function Gallery({ gallery }) {
  const galery = gallery.map((picture) => {
    const { path, description, width, height } = picture;
    return (
      <Picture
        path={path}
        description={description}
        width={width}
        height={height}
      />
    );
  });
  return <div>{galery}</div>;
}
