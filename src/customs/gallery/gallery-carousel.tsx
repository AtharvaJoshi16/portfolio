import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryData } from "@/constants/gallery-data";
import { GalleryCard } from "./gallery-card";

export const GalleryCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="z-10 my-5 -mx-4 md:-mx-20 rounded-lg"
    >
      <CarouselContent>
        {galleryData.map((item, idx) => (
          <CarouselItem
            key={idx}
            className="basis-1/1 flex justify-center items-center h-fit"
          >
            <GalleryCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
