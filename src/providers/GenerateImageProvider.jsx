import { useState } from "react";
import { GenerateImageContext } from "../contexts";
import { detectRatio, getWidthHeight } from "../utils/image-ratio";
import { generateSeed } from "../utils/generateSeed";
import { toastMessage } from "../utils/toast-message";

export default function GenerateImageProvider({ children }) {
  const [images, setImages] = useState([]);
  const [promptMessage, setPromptMessage] = useState("");
  const [model, setModel] = useState("flux");
  const [aspectRatio, setAspectRatio] = useState({
    width: "1024",
    height: "1024",
    ratio: "1:1"
  })

  const handlePromptMessage = (value) => {
    setPromptMessage(value)
  }

  const handleAspectRatioPreset = (preset) => {
    const ratio = getWidthHeight(preset)
    setAspectRatio({ width: ratio.width, height: ratio.height, ratio: preset });
  };

  const handleCustomWidth = (value) => {
    setAspectRatio((prev) => {
      const updated = { ...prev, width: value }
      updated.ratio = detectRatio(updated.width, updated.height)
      return updated
    })
  };

  const handleCustomHeight = (value) => {
    setAspectRatio((prev) => {
      const updated = { ...prev, height: value }
      updated.ratio = detectRatio(updated.width, updated.height)
      return updated
    });
  };

  const handleAiModel = (selectedModel) => {
    setModel(selectedModel)
  }

  const generateImages = async () => {
    if (!promptMessage?.trim()) {
      toastMessage("Please enter a prompt to generate an image", "error");
      return;
    }

    if (!aspectRatio.ratio?.trim()) {
      toastMessage("Please select a ratio to generate an image", "error");
      return;
    }

    const initialImages = Array.from({ length: 9 }).map(() => ({
      id: crypto.randomUUID(),
      url: "",
      status: "loading",
    }));
    setImages(initialImages);

    for (let i = 0; i < 9; i++) {
      const seed = generateSeed();
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(promptMessage)}?seed=${seed}&model=${model}&width=${aspectRatio.width}&height=${aspectRatio.height}&nologo=true`;


      if (i !== 0) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }

      try {
        await new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });

        setImages((prev) =>
          prev.map((img, index) =>
            index === i
              ? { id: seed, url, status: "success" }
              : img
          )
        );
      } catch {
        setImages((prev) =>
          prev.map((img, index) =>
            index === i
              ? { id: seed, url: "", status: "error" }
              : img
          )
        );
      }
    }
  };


  return (
    <GenerateImageContext.Provider value={{
      promptMessage,
      model,
      aspectRatio,
      images,
      setImages,
      handlePromptMessage,
      handleCustomWidth,
      handleCustomHeight,
      handleAiModel,
      handleAspectRatioPreset,
      generateImages,
    }}>
      {children}
    </GenerateImageContext.Provider>
  );
}