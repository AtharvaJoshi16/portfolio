import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: ReactNode;
    description: ReactNode;
    link?: string;
    footer: ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const Animator = ({
    item,
    hovIndex,
    idx,
  }: {
    item: {
      title: ReactNode;
      description: ReactNode;
      link?: string;
      footer: ReactNode;
    };
    hovIndex: number | null;
    idx: number;
  }) => {
    return (
      <>
        <AnimatePresence>
          {hovIndex === idx && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-indigo-400 bg-opacity-50 block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <Card className="relative">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
          <CardFooter>{item.footer}</CardFooter>
        </Card>
      </>
    );
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-5 md:py-10",
        className
      )}
    >
      {items.map((item, idx) =>
        item.link ? (
          <Link
            href={item?.link}
            key={item?.link}
            target="_blank"
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Animator hovIndex={hoveredIndex} idx={idx} item={item} />
          </Link>
        ) : (
          <div
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Animator hovIndex={hoveredIndex} idx={idx} item={item} />
          </div>
        )
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 md:p-4 overflow-hidden bg-slate-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4 h-full">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "min-h-[200px] md:min-h-[250px] mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardFooter = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("relative lg:absolute mt-4 lg:mt-0 lg:bottom-4", className)}
    >
      {children}
    </div>
  );
};
