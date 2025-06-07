import usePromptImages from "../../hooks/usePromptImages";
import PresetImage from "../PresetImage";

export default function ImagePresets() {
  const { promptImageUrl } = usePromptImages()
  console.log(promptImageUrl)
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {
          promptImageUrl ? <img src={promptImageUrl} alt="Generated Image" /> : <p>Loading...</p>
        }
        <PresetImage />
        <PresetImage />
        <PresetImage />
        <PresetImage />
        <PresetImage />
        <PresetImage />
        <PresetImage />
        <PresetImage />
        <PresetImage />
      </div>
    </div>
  );
}