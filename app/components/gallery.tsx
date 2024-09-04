import userData from "../../public/data/data.json";
import ProjectCards from "./cards";
const Gallery = () => {
  return (
    <div className="pt-4">
      <div className="px-40">
      <div className="text-xl mb-2">
          <span className="text-customGreen self-start">Creative Gallery</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {userData.creativeGallery.map((gallery) => (
              <div className="m-2 w-full" key={gallery.id}>
                <ProjectCards
                  name={gallery.name}
                  pid={gallery.id}
                  src="https://nextui.org/images/album-cover.png"
                  type="Gallery"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
