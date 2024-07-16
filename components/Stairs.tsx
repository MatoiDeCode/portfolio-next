import { motion, Variants } from "framer-motion";

const stairAnimation: Variants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: "0%",
  },
};

type PropsIndex = {
  index: number;
};

const reverseIndex = (props: PropsIndex) => {
  const totalSteps = 6;
  return totalSteps - props.index - 1;
};

const Stairs = () => {
  const totalSteps = 6;
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          custom={reverseIndex({ index })}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex({ index }) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
