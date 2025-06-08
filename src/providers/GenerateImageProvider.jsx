import { useState } from "react";
import { GenerateImageContext } from "../contexts";

export default function GenerateImageProvider({ children }) {
  const [promptMessage, setPromptMessage] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [model, setModel] = useState("");

  const handlePromptMessage = (value) => {
    setPromptMessage(encodeURIComponent(value))
  }

  const handleWidth = (value) => {
    setWidth(value)
  }

  const handleHeight = (value) => {
    setHeight(value)
  }

  const handleAiModel = (selectedModel) => {
    setModel(selectedModel)
  }

  return (
    <GenerateImageContext.Provider value={{
      promptMessage,
      handlePromptMessage,
      width,
      height,
      handleWidth,
      handleHeight,
      model,
      handleAiModel
    }}>
      {children}
    </GenerateImageContext.Provider>
  );
}