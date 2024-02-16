import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function HeadSection() {
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
        delay: 1,
        duration: 1,
      },
    },
  };
  const btnvariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };
  return (
    <div className="w-11/12 lg:w-2/3 mx-auto my-20  lg:my-28">
      <motion.h1
        variants={h1variants}
        initial="hidden"
        animate="visible"
        className="text-[28px] lg:text-5xl font-extrabold text-white text-center my-5 leading-tight"
      >
        We leave junk everywhere and Space is no exception!
      </motion.h1>
      <motion.h1
        variants={h2variants}
        initial="hidden"
        animate="visible"
        className="text-[28px] lg:text-5xl font-extrabold text-white text-center my-5 leading-tight"
      >
        While everyday activities are becoming more dependent on Space
        technology, the junk orbiting earth is becoming a vulnerable threat for
        the future space technology development
      </motion.h1>
      <section className="flex justify-center items-center">
        <motion.a
          variants={btnvariants}
          initial="hidden"
          animate="visible"
          className="btn btn-ghost text-white border-[#ffffff3d] hover:border-white"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Space_debris#:~:text=Space%20debris%20(also%20known%20as,longer%20serve%20a%20useful%20function."
        >
          Know More
        </motion.a>
      </section>
    </div>
  );
}

export default HeadSection;
