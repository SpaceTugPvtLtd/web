import HeadSection from "./components/HeadSection";
import Navbar from "./components/Navbar";
import bgVideo from "./assets/space-bg.mp4";
import { useRef } from "react";
import Debris from "./components/Debris";
import WhoAreWe from "./components/WhoAreWe";
import Technology from "./components/Technology";
// import {
//   faRobot,
//   faHurricane,
//   faDisplay,
//   faVideo,
//   faMagnifyingGlass,
//   faShield,
// } from "@fortawesome/free-solid-svg-icons";
import Team from "./components/Team";

import Lottie from "lottie-react";

import robo from "../src/assets/robo.json"
import dragSail from "../src/assets/dragsail.json"
import oos from "../src/assets/oos.json"
import vbns from "../src/assets/vbns.json"
import rpod from "../src/assets/rpod.json"
import collision from "../src/assets/collision.json"

import profile1 from "../src/assets/profile1.jpg";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";

function App() {
  const videoRef = useRef(null);

  const handleVideoLoaded = () => {
    videoRef.current.style.opacity = "1";
  };

  const images = [
   robo,
   dragSail,
   oos,
   vbns,
   rpod,
   collision

  ];

  const titles = [
    "ROBOTIC MANIPULATOR",
    "DRAG SAIL",
    "IN-ORBITING SERVICING",
    "VISION BASED NAVIGATION SYSTEM",
    "RENDEZVOUS PROXIMITY OPERATION AND DOCKING",
    "COLLISION AVOIDANCE SYSTEM",
  ];

  const profiles = [profile1, profile1, profile1, profile1, profile1];

  const names = [
    "Hari Shankar",
    "Sugashini",
    "Swetha Mohanachandran",
    "Harish R",
    "Krithik M",
  ];

  const designations = [
    "FOUNDER & CEO",
    "MANAGING DIRECTOR",
    "CPO",
    "Intern",
    "Intern",
  ];

  const descriptions = [
    "Hari is an as astroprenuer ambitiously working on Debris mitigation Project as a Technical head and igniting the love for Space among enthusiastic young learner. His key area of work is Robotics, he also possesses expertise in tools like Space CAD and System Toolkit.He initially started his career in the Software industry and then his passion for Space Science pulled him into starting his own company to fight Space Junk.He has always been keen to contribute to Research and Development while inculcating the same to the young minds.He possesses a multidimensional and holistic approach towards work and people.",
    "Sugashini hails from a Civil Engineering background with an immense knowledge of Physics and Mathematics. She has been resourceful and very professional in companies she previously interned in. At SpaceTug as an Operation Analyst she aims to create a crisis free environment and contribute to the development of the company both qualitatively and quantitatively.Her education in Engineering has provided her a lens to look at everything from a multidisciplinary, empirical and critical point of view which can help her resolve issues and contribute to an efficient function of the Organisation.",
    "Swetha is a significant member of the technical team with an educational background in Mechatronics and a passion for Space Science. She is efficient in Structural design, Robotics, electronics and Mechanical sphere. As a 22 year old she walked into Defence Avionics Research Establishment (DRDO), Bangalore as Project Trainee and worked with a remarkable team. She admires to strategy and execution of all product-related duties, including the creation of new products and developing existing ones. phases, a product production plan, and increasing brand recognition beginning with the idea phase to liberate.",
    "Harish is a humorous man with an electronics and communication background who specialises in Embedded Software and is fluent in a variety of programming languages including embedded C, C++, Python, and Javascript. At Spacetug, he looks after the satellite's embedded programming. He's also in control of the website you're looking at right now. He is a really enthusiastic person who always manages to keep the crew in a good attitude.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    "Kirthik is pursuing Electronics and Communication Engineering and is strong in the Embedded and IOT streams. He is also familiar with design applications such as Autocad, Solidworks, and ECAD. He is interested in a variety of fields, including IoT and robotics. As a robotic engineer at SpaceTug, he is responsible for the operation of the robotic arm using his past understanding of ROS and Roboguide.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  ];

  return (
    <section className="overflow-x-hidden">
        <Navbar />
        <Parallax />
        <section className="relative flex justify-center items-center">
          <video
            ref={videoRef}
            src={bgVideo}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover absolute inset-0 opacity-100 z-0"
            style={{ minHeight: 300 }}
            onLoadedData={handleVideoLoaded}
          />
          <div className="relative z-10">
            <Debris />
          </div>
        </section>

        <WhoAreWe />
        <Technology images={images} titles={titles} />
        <Team
          profiles={profiles}
          names={names}
          designations={designations}
          descriptions={descriptions}
        />
        <Footer />
    </section>
  );
}

export default App;
