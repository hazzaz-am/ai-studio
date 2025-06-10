import { useEffect, useState } from "react";
import { toastMessage } from "../utils/toast-message";

export const useModels = () => {
	const [models, setModels] = useState([]);

	useEffect(() => {
		const getAiModels = async () => {
			try {
				const res = await fetch("https://image.pollinations.ai/models");
				const models = await res.json();
				setModels(models);
			} catch (error) {
				if (error instanceof Error) {
					toastMessage(error.message, "error");
				} else {
					toastMessage("Something went wrong", "error");
				}
			}
		};

		getAiModels();
	}, []);

	return {
		models,
	};
};
