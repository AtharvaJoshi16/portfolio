import { Card } from "@/components/ui/card-hover-effect";
import { Lens } from "@/components/ui/lens";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export const GalleryCard = ({
  caption,
  link,
  alt,
}: {
  caption: string;
  link: string;
  alt: string;
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Card className="w-fit max-w-[90vw] flex flex-col items-center gap-2">
      <Lens>
        <div className="bg-transparent w-full flex justify-center items-center">
          <Image
            onLoad={() => setLoading(false)}
            className={classNames(
              { "animate-pulse bg-slate-500/50": loading },
              "rounded-xl w-fit h-[180px] sm:h-[200px] lg:h-[400px]"
            )}
            src={link}
            alt={alt}
            width={1200}
            height={1200}
          />
        </div>
      </Lens>
      <h3 className="text-slate-400 mx-auto md:max-w-[50vw] text-wrap text-xs md:text-sm mt-4 md:mt-8 text-center">
        {caption}
      </h3>
    </Card>
  );
};
