
import image from "../assets/images/ai-image-1.jpeg";
import DownloadIcon from "../svg-icons/DownloadIcon";

export default function PresetImage() {
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <div className="absolute bottom-2 right-2  p-1 ">
        <DownloadIcon />
      </div>
      <img src={image} alt="Anime character in kimono"
        className="w-full h-48 object-cover" />
    </div>
  );
}