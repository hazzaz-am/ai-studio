import { useEffect, useState } from "react";

const STORAGE_KEY = "downloaded-images";

export const useImageDownloads = () => {
	const [downloadedImages, setDownloadedImages] = useState([]);

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			try {
				setDownloadedImages(JSON.parse(stored));
			} catch {
				setDownloadedImages([]);
			}
		}
	}, []);

	const addDownloadedImage = (image) => {
		setDownloadedImages((prev) => {
			const exists = prev.some((img) => img.id === image.id);
			if (!exists) {
				const updated = [...prev, image];
				localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
				return updated;
			}
			return prev;
		});
	};

    const clearDownloads = () => {
			localStorage.removeItem(STORAGE_KEY);
			setDownloadedImages([]);
		};

	return { downloadedImages, addDownloadedImage, clearDownloads };
};
