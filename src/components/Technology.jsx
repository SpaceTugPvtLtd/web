import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Lottie from "lottie-react";

function Technology({ images, titles }) {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  const cardvariantslg = {
    hidden: (index) => ({
      opacity: 0,
      pathLength: 0,
      y: "10vw",
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.5,
        duration: 1,
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  return (
    <div
      className="p-7 md:p-20 bg-white  my-16"
      id="technology"
    >
      <h1 className="text-center text-3xl lg:text-5xl font-bold text-black">
        Technology
      </h1>
      <section ref={ref} className="flex flex-wrap gap-10 my-10 justify-center items-center">
        {images.map((image, index) => (
          <motion.div
            variants={cardvariantslg}
            initial="hidden"
            animate={animation}
            custom={index}
            className="card w-[300px] lg:w-[420px] bg-transparent shadow-2xl p-1 lg:p-5"
            key={index}
          >
            <figure className="h-[300px]">
              <Lottie animationData={image} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-black font-bold">{titles[index]}</h2>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Technology;


// bg-gradient-to-br from-[#6f6f6f] via-[#5a5852] to-[#6b6868]