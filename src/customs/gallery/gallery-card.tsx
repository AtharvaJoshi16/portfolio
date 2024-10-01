import { Card } from "@/components/ui/card-hover-effect";
import { Lens } from "@/components/ui/lens";
import Image from "next/image";

export const GalleryCard = ({
  caption,
  link,
  alt,
}: {
  caption: string;
  link: string;
  alt: string;
}) => {
  return (
    <Card className="w-fit">
      <Lens>
        <div className="bg-transparent w-full flex justify-center items-center">
          <Image
            className="rounded-xl w-fit h-[200px] lg:h-[400px]"
            src={link}
            alt={alt}
            width={1200}
            height={1200}
          />
        </div>
      </Lens>
      <h3 className="text-slate-300 max-w-[80vw] md:max-w-[50vw] text-wrap text-sm mt-4 md:mt-8 px-5 text-center">
        {caption}
      </h3>
    </Card>
  );
};
