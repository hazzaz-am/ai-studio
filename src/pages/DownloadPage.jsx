import PresetImage from "../components/PresetImage";
import WelcomeMessage from "../components/WelcomeMessage";
import { useImageDownloads } from "../hooks/useImageDownloads";

export default function DownloadPage() {
  const { downloadedImages, clearDownloads } = useImageDownloads()

  return (
    <main className="relative z-10">
      <WelcomeMessage title="Downloaded" emoji="👋" />
      <div className="text-right">
        {downloadedImages.length > 0 && (
          <button
            onClick={clearDownloads}
            className="text-sm font-bold bg-white px-3 py-1 rounded text-[#1a0b2e] cursor-pointer my-4"
          >
            Clear All Images
          </button>
        )}
      </div>
      <div>
        {downloadedImages.length === 0 ? (
          <p className="text-zinc-400">No images downloaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {downloadedImages.map((img) => (
              <PresetImage key={img.id} image={img} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}