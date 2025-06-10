
import { useGenerateImage } from "../../hooks/useProvider";
import PresetImage from "../PresetImage";


export default function ImagePresets() {

  const { images } = useGenerateImage()



  return (
    <div>
      {
        images.length === 0 ? (
          <p className="text-center mt-10">Generate Your Favorite Images with just One Prompt</p>
        ) : (
          <>
            <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <PresetImage
                  key={image.id}
                  image={image}
                />
              ))}
            </div>
          </>
        )
      }
    </div >
  );
}