import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div className="relative h-2/3">

    <div className="absolute w-full h-32  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>

      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      stopOnHover={true}
      dynamicHeight={false}
    //   showArrows={false}
      swipeable={true}
      interval={2000}
      >
        <div>
            <img loading="lazy" src="https://links.papareact.com/gi1" alt="bannerImage"/>
        </div>
        <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="bannerImage"/>
        </div>
        <div>
            <img loading="lazy" src="https://links.papareact.com/7ma" alt="bannerImage"/>
        </div>

      </Carousel>
    </div>
  );
}
