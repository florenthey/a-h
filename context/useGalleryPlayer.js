import { createContext, useContext, useState } from "react";

const galleryPlayerContext = createContext();
galleryPlayerContext.displayName = "GalleryPlayerContext";

export const GalleryPlayerProvider = ({ children }) => {
  const [galleryPlayer, setGalleryPlayer] = useState(null);

  return (
    <galleryPlayerContext.Provider
      value={{
        galleryPlayer,
        setGalleryPlayer,
      }}
    >
      {children}
    </galleryPlayerContext.Provider>
  );
};

export const useGalleryPlayer = () => useContext(galleryPlayerContext);
