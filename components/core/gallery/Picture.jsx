import React from "react";

export default function Picture({ path, description, width, height }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        margin: "10px 5px",
      }}
    >
      <img
        src={path}
        alt={description}
        style={{ width: "100%", height: "auto", maxHeight: "700px" }}
      />
    </div>
  );
}
