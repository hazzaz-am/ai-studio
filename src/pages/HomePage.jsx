import { useState } from "react";
import GlowEffect from "../components/GlowEffect";
import Header from "../components/Header";
import CreatePage from "./CreatePage";
import DownloadPage from "./DownloadPage";


export default function HomePage() {
  const [route, setRoute] = useState("create");

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header onRouteChange={handleRouteChange} route={route} />
      <GlowEffect />
      {route === "create" && <CreatePage />}
      {route === "download" && <DownloadPage />}
    </div>
  );
}