import PresetImage from "../components/PresetImage";
import WelcomeMessage from "../components/WelcomeMessage";
import { useImageDownloads } from "../hooks/useImageDownloads";

export default function DownloadPage() {
  const { downloadedImages } = useImageDownloads()

  return (
    <main className="relative z-10">
      <WelcomeMessage title="Downloaded" emoji="👋" />

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {downloadedImages.map((img) => (
            <PresetImage key={img.id} image={img} />
          ))}
        </div>
      </div>
    </main>
  );
}