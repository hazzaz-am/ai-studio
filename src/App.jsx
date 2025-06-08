import HomePage from "./pages/HomePage";
import GenerateImageProvider from "./providers/GenerateImageProvider";


export default function App() {
  return (
    <GenerateImageProvider>
      <HomePage />
    </GenerateImageProvider>
  );
}