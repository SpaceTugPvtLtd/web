import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import envisat from "../assets/envisat.png";

function Envisat() {
  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const thresholdStart = 700;
      const thresholdEnd = 1750;
      const duration = 1.5;

      if (scrollY >= thresholdStart && scrollY <= thresholdEnd) {
        imageControls.start({ x: 0, transition: { duration } });
        textControls.start({ x: 0, transition: { duration } });
      } else {
        imageControls.start({ x: -800, transition: { duration } });
        textControls.start({ x: 800, transition: { duration } });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageControls, textControls]);

  return (
    <section className="flex flex-col md:flex-row md:justify-between flex-wrap">
      <div className="basis-[45%]">
        <motion.img
          src={envisat}
          alt="Envisat"
          initial={{ x: -800 }}
          animate={imageControls}
        />
      </div>
      <div className="basis-[45%]">
        <motion.h1
          initial={{ x: 800 }}
          animate={textControls}
          className="text-white font-bold text-2xl md:text-5xl text-center md:text-start"
        >
          Envisat
        </motion.h1>
        <motion.p
          initial={{ x: 800 }}
          animate={textControls}
          className="text-white font-semibold text-xl lg:text-3xl mt-8 text-center md:text-start px-1"
        >
          A large Earth-observing satellite which has been inactive since 2012.
          It is still in orbit and considered space debris. Operated by the
          European Space Agency (ESA), it was the world's largest civilian Earth
          observation satellite.
        </motion.p>
      </div>
    </section>
  );
}

export default Envisat;
