import React, { useState } from "react";
import { useGalleryPlayer } from "@context/useGalleryPlayer";
import { galleries } from "../utils/galleries";
import CrossIcon2 from "@components/icons/CrossIcon2";

import { Container, Overlay, Wrapper } from "./galleryPlayer.style";

import Picture from "../Picture";
import Navigation from "./components/navigation/Navigation";
import { Button } from "@styles/Global";
import useScreenSize from "@hooks/useScreenSize";

export default function GalleryPlayer() {
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

  // De la merde, fonctionne pas
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <Container>
      <Overlay
        onClick={() => setGalleryPlayer(null)}
        width={`${width}px`}
        height={`${height}px`}
      />
      <Wrapper>
        <Button>
          <CrossIcon2
            style={{ position: "absolute", top: "20px", right: "20px" }}
            onClick={() => {
              setGalleryPlayer(null);
            }}
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
