import React from "react";

export default function Picture({ path, description, width, height }) {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
    >
      <img
        src={path}
        alt={description}
        style={{ width: "100%", height: "auto", maxHeight: "700px" }}
      />
    </div>
  );
}
