import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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

export const CustomCarousel = ({
  items,
  className,
}: {
  items: any[];
  className?: string;
}) => {
  return (
    <Carousel className="bg-transparent z-50 -mx-12 md:mx-0">
      <CarouselContent className="p-4">
        {items.map((item, idx) => (
          <CarouselItem
            key={idx}
            className={cn(
              "basis-1/3 sm:basis-1/4 xl:basis-1/5 flex justify-center items-center",
              className
            )}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <Previous />
      <Next />
    </Carousel>
  );
};
