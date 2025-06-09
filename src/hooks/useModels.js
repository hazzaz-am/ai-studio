import { useEffect, useState } from "react";

export const useModels = () => {
	const [models, setModels] = useState([]);

	useEffect(() => {
		const getAiModels = async () => {
			const res = await fetch("https://image.pollinations.ai/models");
			const models = await res.json();
			setModels(models);
		};

		getAiModels();
	}, []);

	return {
		models,
	};
};
