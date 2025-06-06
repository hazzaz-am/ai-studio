import { useState } from "react";
import AImodels from "./AImodels";
import FormControl from "./FormControl";
import RatioPresets from "./RatioPresets";

export default function SettingsPanel() {
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);

  return (
    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Advanced Settings</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <AImodels />

        <FormControl type="number" id="seed" label="Seed (for reproducible results)" disabled={true} placeholder="Random" />

        <FormControl type="number" id="width" label="Width" value={width} onChange={(e) => setWidth(e.target.value)} />

        <FormControl type="number" id="height" label="Height" value={height} onChange={(e) => setHeight(e.target.value)} />

        <RatioPresets />

      </div>
    </div>
  );
}