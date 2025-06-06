import RatioButton from "./RatioButton";

export default function RatioPresets() {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-700 mb-1">Aspect Ratio Presets</label>
      <div className="flex flex-wrap gap-2">
        <RatioButton value={"1:1"} />
        <RatioButton value={"16:9"} />
        <RatioButton value={"4:3"} />
        <RatioButton value={"3:2"} />
      </div>
    </div>
  );
}