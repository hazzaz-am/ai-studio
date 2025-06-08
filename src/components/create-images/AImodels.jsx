import { useGenerateImage } from "../../hooks/useProvider";

export default function AImodels() {
  const { model, handleAiModel } = useGenerateImage()
  return (
    <div>
      <label htmlFor="model" className="block text-sm font-medium text-zinc-700 mb-1">Model</label>
      <select id="model"
        className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        value={model}
        onChange={(e) => handleAiModel(e.target.value)}
      >
        <option className="bg-zinc-900" defaultValue="flux">Flux</option>
        <option className="bg-zinc-900" value="turbo">Turbo</option>
      </select>
    </div>
  );
}