export function loadImageWithTimeout (url) {
	return new Promise((resolve, reject) => {
		const img = new Image();

		const timer = setTimeout(() => {
			img.src = ""; 
			reject(new Error("Timeout"));
		}, 15000);

		img.onload = () => {
			clearTimeout(timer);
			resolve();
		};

		img.onerror = () => {
			clearTimeout(timer);
			reject(new Error("Image failed to load"));
		};

		img.src = url;
	});
}
