import React, { useEffect } from "react";
import { NavigationWrapper, ImageNumber } from "./navigation.style";
import ArrowLeft from "../../../../../icons/ArrowLeft";
import ArrowRight from "../../../../../icons/ArrowRight";
import { Button } from "@styles/Global";

export default function Navigation({
  startIndex,
  currentIndex,
  setCurrentIndex,
  gallery,
}) {
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
  return (
    <NavigationWrapper>
      <Button value="previous" onClick={(event) => navigation(event)}>
        <ArrowLeft style={{ margin: "20px" }} />
      </Button>
      <ImageNumber>
        image {currentIndex + 1}/{gallery.length}
      </ImageNumber>
      <Button value="next" onClick={(event) => navigation(event)}>
        <ArrowRight style={{ margin: "20px" }} />
      </Button>
    </NavigationWrapper>
  );
}
