import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS for the carousel styles

function Carousel1() {
  const images = [
    "image/1.jpg",
    "image/2.png",
    "image/3.jpg",
    "image/4.jpg",
    // "image/5.avif",
  ];

  return (
    <div className="w-full relative z-10"> {/* Set z-index for the carousel container */}
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={true}
        showThumbs={false}
        dynamicHeight={false}
        className="w-full h-auto max-h-[80vh] mx-auto relative" // No need to set z-index here unless layering is needed
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-full relative" // Removed unnecessary z-index here
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" // Adjusted classes for responsive height
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousel1;
