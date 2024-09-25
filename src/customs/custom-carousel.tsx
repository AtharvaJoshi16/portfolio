import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Next = () => {
  return (
    <CarouselNext
      className="text-slate-50 hover:text-slate-50 active:text-slate-50 hover:bg-slate-400/30 active:bg-slate-400/30 -translate-x-1/4"
      variant="ghost"
    />
  );
};

export const Previous = () => {
  return (
    <CarouselPrevious
      className="text-slate-50 hover:text-slate-50 active:text-slate-50 hover:bg-slate-400/30 active:bg-slate-400/30 translate-x-1/4"
      variant="ghost"
    />
  );
};

export const CustomCarousel = ({ items }: { items: any[] }) => {
  return (
    <Carousel
      className="bg-transparent z-50"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="p-4">
        {items.map((item) => (
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex justify-center items-center">
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="bg-gradient-to-r from-white to-transparent h-full w-10" />
      <Previous />
      <Next />
    </Carousel>
  );
};
