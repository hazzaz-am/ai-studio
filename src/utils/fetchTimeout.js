export const fetchWithTimeout = async (url, timeout = 15000) => {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeout);
	try {
		const response = await fetch(url, { signal: controller.signal });
		clearTimeout(timer);
		return response;
	} catch (error) {
    console.log(error)
		throw new Error("Image load timeout or error");
	}
};
