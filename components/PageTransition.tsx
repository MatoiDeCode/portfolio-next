"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PropsTransition = {
  children: ReactNode;
};

const PageTransition = (props: PropsTransition) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div className="" key={pathName}>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
        />
        {props.children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
