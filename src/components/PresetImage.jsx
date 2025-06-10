import { useImageDownloads } from "../hooks/useImageDownloads";
import DownloadIcon from "../svg-icons/DownloadIcon";
import ErrorIcon from "../svg-icons/ErrorIcon";
import LoadingIcon from "../svg-icons/LoadingIcon";
import { toastMessage } from "../utils/toast-message";

export default function PresetImage({ image }) {
  const { addDownloadedImage } = useImageDownloads()


  const handleDownload = async () => {
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const fileName = `${image.id}.jpg`;

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      addDownloadedImage({ id: image.id, url: image.url, status: "success" });
    } catch (err) {
      if (err instanceof Error) {
        toastMessage(err.message, "error")
      } else {
        toastMessage("Something Wrong", "error")
      }
    }
  };

  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      {
        image.status === "success" && (
          <button className="absolute bottom-2 right-2 p-1 cursor-pointer" onClick={handleDownload} title="Download image">
            <DownloadIcon />
          </button>
        )
      }

      {
        image.status === "loading" && (
          <div className="w-full h-48 flex flex-col items-center justify-center bg-zinc-800 text-white rounded-lg">
            <LoadingIcon />
            <p className="text-sm text-zinc-300">Generating image… please wait</p>
          </div>
        )
      }


      {
        image.status === "error" && (
          <div className="w-full h-48 flex flex-col items-center justify-center bg-zinc-900 text-red-400 px-4 text-center">
            <ErrorIcon />
            <p className="font-semibold text-sm">Oops! This image couldn't load.</p>
            <p className="text-xs text-zinc-400 mt-1">
              It may have timed out or something went wrong.
            </p>
          </div>
        )
      }

      {
        image.status === "success" && (
          <img
            src={image.url}
            alt="Generated"
            className="w-full h-48 object-cover"
          />
        )
      }
    </div>
  );
}