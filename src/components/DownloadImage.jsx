import DownloadIcon from "../svg-icons/DownloadIcon";

export default function DownloadImage({ image }) {
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      <button className="absolute bottom-2 right-2 p-1 cursor-pointer">
        <DownloadIcon />
      </button>
      <img
        src={image}
        alt="Downloaded"
        className="w-full h-48 object-cover"
      />
    </div>
  );
}