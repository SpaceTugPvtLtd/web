import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhoAreWe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animateVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const delayVariants = {
    delay: 0.5,
  };


  return (
    <section id="about-us">
      <div className="p-10" ref={ref}>
        <h1 className="text-3xl lg:text-5xl font-black text-center">
          Who We Are
        </h1>
        <h1 className="font-semibold w-11/12 lg:w-3/4 text-center mx-auto mt-5">
          At SpaceTug, our coolest minds work together to innovate and design
          efficient solutions to mitigate space junk which can be a hindrance to
          human advancement. We aim to create a sustainable and collision free
          space.
        </h1>
      </div>
      <div>
        <motion.div
          variants={animateVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{
            delay: inView ? delayVariants.delay : 0,
            duration:1,
          }}
        className="flex flex-col lg:flex-row bg-cover relative bg-no-repeat bg-[#36322d] hover:bg-gradient-to-br from-[#4f483e] via-[#504843] to-[#898989] hover:cursor-pointer p-7 lg:p-14">
          <div className="basis-[50%] px-0 lg:px-10">
            <h1 className="text-white font-bold text-2xl">Plan</h1>
          </div>
          <div className="basis-[50%]">
            <h1 className="text-white font-semibold">
              We make even Orbital Mechanics and Machine Learning Simpler,
              Thanks to the papers and pencil for initial prototyping.
            </h1>
          </div>
        </motion.div>
        <motion.div 
          variants={animateVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{
            delay: inView ? delayVariants.delay+1 : 0,
            duration:1,
          }}
        className="flex flex-col lg:flex-row bg-cover relative bg-no-repeat bg-[#63431c] hover:bg-gradient-to-br from-[#332b14] via-[#a56f31] to-[#846843] hover:cursor-pointer p-7 lg:p-14">
          <div className="basis-[50%] px-0 lg:px-10">
            <h1 className="text-white font-bold text-2xl">Develop</h1>
          </div>
          <div className="basis-[50%]">
            <h1 className="text-white font-semibold">
              We don't just love Development, we are crazy on it. Whatever it
              may be either a Aurdino for satellite or Modeling a Neural
              Network, we are mad at these.
            </h1>
          </div>
        </motion.div>
        <motion.div 
          variants={animateVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{
            delay: inView ? delayVariants.delay+2 : 0,
            duration:1,
          }}
        className="flex flex-col lg:flex-row bg-cover relative bg-no-repeat bg-[#2b3144] hover:bg-gradient-to-br from-[#8da1de] via-[#91a0c9] to-[#c4d7eb] hover:cursor-pointer p-7 lg:p-14">
          <div className="basis-[50%] px-0 lg:px-10">
            <h1 className="text-white font-bold text-2xl">Launch</h1>
          </div>
          <div className="basis-[50%]">
            <h1 className="text-white font-semibold">
              Our team consists of more Enthusiastic people, sometimes
              over-enthusiastic. So all they need is just a start and they will
              go home after launching it.
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhoAreWe;
