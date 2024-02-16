import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Navbar() {
  const animateVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const delayVariants = {
    delay: 0.5,
  };

  const imgVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <div className="navbar bg-[#ffffffac]">
      <div className="navbar-start">
        <a className="hover:cursor-pointer">
          <motion.img
            variants={imgVariants}
            initial="initial"
            animate="visible"
            src={logo}
            alt=""
            className="w-full lg:w-[400px]"
          />
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  absolute top-12 right-0 lg:right-auto"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Mission</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Technology</a>
            </li>
            <li>
              <a>Career</a>
            </li>
          </ul>
        </div>
        <div className=" hidden lg:flex">
          <ul className="flex gap-4 px-1">
            <li>
              <motion.p
                variants={animateVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: delayVariants.delay,
                  duration: 1,
                }}
                className="hover:cursor-pointer hover:scale-105 font-bold"
              >
                About Us
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={animateVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: delayVariants.delay + 0.5,
                  duration: 1,
                }}
                className="hover:cursor-pointer hover:scale-105 font-bold"
              >
                Mission
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={animateVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: delayVariants.delay + 1,
                  duration: 1,
                }}
                className="hover:cursor-pointer hover:scale-105 font-bold"
              >
                Team
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={animateVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: delayVariants.delay + 1.5,
                  duration: 1,
                }}
                className="hover:cursor-pointer hover:scale-105 font-bold"
              >
                Technology
              </motion.p>
            </li>
            <li>
              <motion.p
                variants={animateVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: delayVariants.delay + 2,
                  duration: 1,
                }}
                className="hover:cursor-pointer hover:scale-105 font-bold"
              >
                Career
              </motion.p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
}

export default Navbar;
