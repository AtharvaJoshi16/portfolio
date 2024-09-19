import classNames from "classnames";
import { motion } from "framer-motion";
export const Tooltip = ({
  className,
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 2, x: "-50%" }}
      className={classNames(
        className,
        "absolute px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 left-1/2 -translate-x-1/2 -top-8 w-fit text-xs z-50"
      )}
    >
      {title}
    </motion.div>
  );
};
