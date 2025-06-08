import { useGenerateImage } from "../../hooks/useProvider";
import { getWidthHeight, presetsRatio } from "../../utils/image-ratio";
import RatioButton from "./RatioButton";

export default function RatioPresets() {
  const {handleWidth, handleHeight} = useGenerateImage()

  const renderRatioButtons = presetsRatio.map(preset => (
    <RatioButton key={preset} value={preset} onClick={() => handleRatioSize(preset)} />
  ))

  const handleRatioSize = (value) => {
    const ratio = getWidthHeight(value)
    handleHeight(ratio.height)
    handleWidth(ratio.width)
  }

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