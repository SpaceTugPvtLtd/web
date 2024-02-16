import React from "react";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Team({ profiles, names, designations, descriptions }) {
  return (
    <div className="bg-[#7b7986] p-2 md:p-20" id="team">
      <h1 className="text-center text-3xl lg:text-5xl font-bold text-white">
        Team
      </h1>
      <h1 className="text-center text-lg font-medium text-black mt-7 w-11/12 lg:w-2/3 mx-auto">
        It is difficult for humanity to unlearn the ease of using Technology
        dependent on Space Science, so we as a team desire to make our Space
        sustainable, so that we can enjoy the fruits of Space Science without
        disruptions.
      </h1>

      <Swiper
        className="mt-10 hidden lg:block"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
      >
        {profiles.map((profile, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center bg-white border rounded-2xl"
          >
            <div className="card w-96 bg-white">
              <figure className="mt-3">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={profile} alt={`Profile of ${names[index]}`} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h1 className="card-title font-black">{names[index]}</h1>
                <h1 className="font-bold">{designations[index]}</h1>
                <p>{descriptions[index]}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center items-center mt-10">
          <div className="swiper-button-prev text-black"></div>
          <div className="swiper-button-next text-black"></div>
        </div>
      </Swiper>

      <Swiper
        className="block lg:hidden"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
      >
        {profiles.map((profile, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center bg-white border rounded-2xl"
          >
            <div className="card w-96 bg-white">
              <figure className="mt-3">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={profile} alt={`Profile of ${names[index]}`} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h1 className="card-title">
                  {names[index]}, {designations[index]}
                </h1>
                <p>{descriptions[index]}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center items-center mt-10">
          <div className="swiper-button-prev text-black"></div>
          <div className="swiper-button-next text-black"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Team;
