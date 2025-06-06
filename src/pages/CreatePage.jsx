import ImagePresets from "../components/create-images/ImagePresets";
import PromptInput from "../components/create-images/PromptInput";
import SettingsPanel from "../components/create-images/SettingsPanel";
import WelcomeMessage from "../components/WelcomeMessage";

export default function CreatePage() {
  return (
    <main className="relative z-10">
      <WelcomeMessage title="Let's create a masterpiece, Alvian!" emoji="👋" />

      <PromptInput />

      <SettingsPanel />

      <ImagePresets />
    </main>

  );
}