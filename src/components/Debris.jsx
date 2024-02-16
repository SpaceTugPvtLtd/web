import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Envisat from "./Envisat";

function Debris() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animateVariantsleft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const animateVariantsright = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const animateVariantsmiddle = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const delayVariants = {
    delayLeft: 0.5,
    delayMiddle: 0.5,
    delayRight: 0.5,
  };

  return (
    <section>
      <div
        className="h-full flex flex-col md:flex-row gap-1 lg:gap-10 p-5 md:p-32"
        ref={ref}
      >
        <div className="lg:basis-[33%] text-center lg:text-end text-white">
          <motion.h2
            className="font-extrabold text-3xl"
            variants={animateVariantsleft}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayLeft : 0,
              duration: 1,
            }}
          >
            13,630
          </motion.h2>
          <motion.p
            className="text-xl font-medium"
            variants={animateVariantsleft}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayLeft : 0,
              duration: 1,
            }}
          >
            Number of Satellites launched till date
          </motion.p>
          <motion.h2
            className="font-extrabold text-3xl mt-10"
            variants={animateVariantsleft}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayLeft + 0.5 : 0,
              duration: 1,
            }}
          >
            8850
          </motion.h2>
          <motion.p
            className="text-xl font-medium"
            variants={animateVariantsleft}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayLeft + 0.5 : 0,
              duration: 1,
            }}
          >
            Number of operating satellites still in Orbit
          </motion.p>
          <motion.h2
            className="font-extrabold text-3xl mt-10"
            variants={animateVariantsleft}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayLeft + 1 : 0,
              duration: 1,
            }}
          >
            32,250
          </motion.h2>
          <motion.p
            className="text-xl font-medium"
            variants={animateVariantsleft}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayLeft + 1 : 0,
              duration: 1,
            }}
          >
            Number of Debris regularly tracked
          </motion.p>
        </div>
        <div className="lg:basis-[34%] text-center text-white">
          <motion.h1
            variants={animateVariantsmiddle}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayMiddle : 0,
              duration: 1,
            }}
            className="font-extrabold text-3xl mb-7"
          >
            {" "}
            Space Debris
          </motion.h1>
          <motion.span
            variants={animateVariantsmiddle}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayMiddle + 0.5 : 0,
              duration: 1,
            }}
            className="text-xl font-medium mt-7"
          >
            We depend on Satellite Data like Navigation, Internet,
            Communication, Weather Forecasting. A tiny piece can damage
            satellite and disrupts the satellite services.
          </motion.span>
        </div>
        <div
          className="lg:basis-[33%] text-center lg:text-start text-white"
          ref={ref}
        >
          <motion.h2
            className="font-extrabold text-3xl"
            variants={animateVariantsright}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayRight : 0,
              duration: 1,
            }}
          >
            36,500
          </motion.h2>
          <motion.p
            className="text-xl font-medium"
            variants={animateVariantsright}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayRight : 0,
              duration: 1,
            }}
          >
            Objects greater than 10cm
          </motion.p>
          <motion.h2
            className="font-extrabold text-3xl mt-10"
            variants={animateVariantsright}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayRight + 0.5 : 0,
              duration: 1,
            }}
          >
            130 Million
          </motion.h2>
          <motion.p
            className="text-xl font-medium"
            variants={animateVariantsright}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayRight + 0.5 : 0,
              duration: 1,
            }}
          >
            Space Debris smaller than 1cm
          </motion.p>
          <motion.h2
            className="font-extrabold text-3xl mt-10"
            variants={animateVariantsright}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayRight + 1 : 0,
              duration: 1,
            }}
          >
            10,100 Tonnes
          </motion.h2>
          <motion.p
            className="text-xl font-medium"
            variants={animateVariantsright}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
              delay: inView ? delayVariants.delayRight + 1 : 0,
              duration: 1,
            }}
          >
            Total mass of space objects in Earth's orbit
          </motion.p>
        </div>
      </div>
      <div className="h-[500px]">
        <Envisat />
      </div>
    </section>
  );
}

export default Debris;
