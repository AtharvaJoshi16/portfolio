import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryData } from "@/constants/gallery-data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryCard } from "./gallery-card";

export const GalleryCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      next={<ChevronRight className="md:h-10 md:w-10" />}
      previous={<ChevronLeft className="md:h-10 md:w-10" />}
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
      <CarouselPrevious
        variant="ghost"
        className="text-white w-10 h-10 md:h-15 md:w-15 lg:w-20 md:h-15 md:w-15 lg:h-20 hover:bg-slate-500/30 hover:text-white top-[-39px]"
      />
      <CarouselNext
        variant="ghost"
        className="text-white w-10 h-10 md:h-15 md:w-15 lg:w-20 md:h-15 md:w-15 lg:h-20 hover:bg-slate-500/30 hover:text-white top-[-39px]"
      />
    </Carousel>
  );
};
