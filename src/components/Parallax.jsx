import React, { useRef } from "react";
import parallaxImage from "../assets/parallax-1.png";
import maskImage from "../assets/mask.png";
import { motion, useScroll, useTransform } from "framer-motion";
function Parallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const h1variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      x: "10vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.25,
        duration: 1,
      },
    },
  };
  const h2variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      x: "-10vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.75,
        duration: 1,
      },
    },
  };

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative">
      <motion.div
        style={{ y: textY }}
        className="font-bold text-white text-center text-2xl md:text-5xl relative z-10 mt-20 w-full md:w-3/4 mx-auto"
      >
        <motion.p
          variants={h1variants}
          initial="hidden"
          animate="visible"
          className=""
        >
          We leave junk everywhere and Space is no exception!
        </motion.p>
        <motion.p
          variants={h2variants}
          initial="hidden"
          animate="visible"
          className="mt-4"
        >
          While everyday activities are becoming more dependent on Space
          technology, the junk orbiting earth is becoming a vulnerable threat
          for the future space technology development
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${maskImage})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}

export default Parallax;
