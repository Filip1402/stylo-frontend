import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { FC } from "react";
import { CarouselProps } from "../../common/types";

const Carousel: FC<CarouselProps> = ({ images }) => {
  return (
    <div>
      <ReactCarousel>
        {images.map((el, index) => (
          <div key={index}>
            <img src={el} alt={`image-${index}`} />
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
