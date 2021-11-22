import React from "react";
import Image from "next/image";

export default function Picture({ path, description, width, height }) {
  return <Image src={path} alt={description} width={width} height={height} />;
}
