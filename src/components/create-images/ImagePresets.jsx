import PresetImage from "../PresetImage";

export default function ImagePresets() {
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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