import PresetImage from "../components/PresetImage";
import WelcomeMessage from "../components/WelcomeMessage";

export default function DownloadPage() {

  return (
    <main class="relative z-10">
      <WelcomeMessage title="Downloaded" emoji="👋" />

      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <PresetImage />
          <PresetImage />
        </div>
      </div>
    </main>
  );
}