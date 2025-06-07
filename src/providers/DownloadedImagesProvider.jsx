import { useContext, useState } from "react";
import { DownloadImageContext } from "../contexts";

export function DownloadedImagesProvider({ children }) {
  const [downloadedImages, setDownloadedImages] = useState(() => {
    const stored = localStorage.getItem('downloadedImages');
    return stored ? JSON.parse(stored) : [];
  });

  const addDownloadedImage = (url) => {
    setDownloadedImages((prev) => {
      if (!prev.includes(url)) {
        const updated = [...prev, url];
        localStorage.setItem('downloadedImages', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  const removeDownloadedImage = (url) => {
    setDownloadedImages((prev) => {
      const updated = prev.filter((item) => item !== url);
      localStorage.setItem('downloadedImages', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <DownloadImageContext.Provider
      value={{ downloadedImages, addDownloadedImage, removeDownloadedImage }}
    >
      {children}
    </DownloadImageContext.Provider>
  );
}

export const useDownloadedImages = () => useContext(DownloadImageContext);