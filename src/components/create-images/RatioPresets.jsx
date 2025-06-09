import { useGenerateImage } from "../../hooks/useProvider";
import { presetsRatio } from "../../utils/image-ratio";
import RatioButton from "./RatioButton";

export default function RatioPresets() {
  const { handleAspectRatioPreset, aspectRatio } = useGenerateImage()


  const renderRatioButtons = presetsRatio.map(preset => (
    <RatioButton key={preset} value={preset} onClick={() => handleAspectRatioPreset(preset)} active={aspectRatio.ratio === preset} />
  ))

  return (
    <div>
      <label className="block text-sm font-medium text-zinc-700 mb-1">Aspect Ratio Presets</label>
      <div className="flex flex-wrap gap-2">
        {
          renderRatioButtons
        }
      </div>
    </div>
  );
}