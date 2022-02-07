import React, { useEffect, useState } from "react";
import { useGalleryPlayer } from "@context/useGalleryPlayer";
import { galleries } from "../utils/galleries";
import CrossIcon from "@components/icons/Cross";

import {
  Container,
  Overlay,
  Wrapper,
  Navigation,
  ImageNumber,
} from "./galleryPlayer.style";
import Picture from "../Picture";

export default function GalleryPlayer() {
  const { galleryPlayer, setGalleryPlayer } = useGalleryPlayer();
  const [currentIndex, setCurrentIndex] = useState(null);

  const gallery = galleries.find(
    (gallerie) => gallerie.type === galleryPlayer.type
  ).content;

  const startIndex = gallery.findIndex(
    (picture) => picture.path === galleryPlayer.path
  );

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  const navigation = (event) => {
    if (event.currentTarget.value === "previous") {
      if (currentIndex === 0) {
        setCurrentIndex(gallery.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
    if (event.currentTarget.value === "next") {
      if (currentIndex === gallery.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const displayPicture = () => {
    const { path, description } = gallery[currentIndex];
    return <Picture path={path} description={description} />;
  };
  return (
    <Container>
      <Overlay onClick={() => setGalleryPlayer(null)} />
      <Wrapper>
        <CrossIcon
          width={18}
          height={18}
          strokeColor="whiteSmoke"
          fillColor="whiteSmoke"
          strokeWidth={2.5}
          onClick={() => {
            setGalleryPlayer(null);
          }}
        />
        {currentIndex !== null && displayPicture()}
        <Navigation>
          <button value="previous" onClick={(event) => navigation(event)}>
            prev
          </button>
          <button value="next" onClick={(event) => navigation(event)}>
            next
          </button>
          <ImageNumber>
            image {currentIndex + 1}/{gallery.length}
          </ImageNumber>
        </Navigation>
      </Wrapper>
    </Container>
  );
}
