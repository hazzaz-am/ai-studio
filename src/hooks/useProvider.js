import { useContext } from "react";
import { GenerateImageContext } from "../contexts";

export const useGenerateImage = () => {
	return useContext(GenerateImageContext);
};
