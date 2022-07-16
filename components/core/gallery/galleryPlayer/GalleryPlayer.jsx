import React, { useState } from "react";
import { useGalleryPlayer } from "@context/useGalleryPlayer";
import { galleries } from "../utils/galleries";
import CrossIcon2 from "@components/icons/CrossIcon2";

import { Container, Overlay, Wrapper } from "./galleryPlayer.style";

import Picture from "../Picture";
import Navigation from "./components/navigation/Navigation";
import { Button } from "@styles/Global";

export default function GalleryPlayer({ height }) {
  const { galleryPlayer, setGalleryPlayer } = useGalleryPlayer();
  const [currentIndex, setCurrentIndex] = useState(null);

  const gallery = galleries.find(
    (gallerie) => gallerie.type === galleryPlayer.type
  ).content;

  const startIndex = gallery.findIndex(
    (picture) => picture.path === galleryPlayer.path
  );

  const displayPicture = () => {
    const { path, description } = gallery[currentIndex];
    return <Picture path={path} description={description} />;
  };

  return (
    <Container height={height}>
      <Overlay onClick={() => setGalleryPlayer(null)} height={height} />
      <Wrapper>
        <Button>
          <CrossIcon2
            style={{ position: "absolute", top: "20px", right: "20px" }}
            onClick={() => {
              setGalleryPlayer(null);
            }}
            stroke="white"
          />
        </Button>
        {currentIndex !== null && displayPicture()}
        <Navigation
          startIndex={startIndex}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          gallery={gallery}
        />
      </Wrapper>
    </Container>
  );
}
