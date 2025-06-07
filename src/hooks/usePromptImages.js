import { useEffect, useState } from "react";


export default function usePromptImages() {
	const [promptImageUrl, setPromptImageUrl] = useState("");
	const promptMessage = "ghost";
	const encodePrompt = encodeURIComponent(promptMessage);

	useEffect(() => {
		const imageUrl = `https://image.pollinations.ai/prompt/${encodePrompt}?nologo=true&enhance=true`;
		setPromptImageUrl(imageUrl);
	}, [encodePrompt]);

	return {
		promptImageUrl,
	};
}
