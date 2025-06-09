import SearchIcon from "../../svg-icons/SearchIcon";
import SendIcon from "../../svg-icons/SendIcon";
import { useGenerateImage } from "../../hooks/useProvider";

export default function PromptInput() {
  const { promptMessage, handlePromptMessage, generateImages } = useGenerateImage()

  return (
    <div
      className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="pl-5 pr-2">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Create with Prompts"
          className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
          value={promptMessage}
          onChange={(e) => handlePromptMessage(e.target.value)}
        />
        <button onClick={generateImages} className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full cursor-pointer">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}