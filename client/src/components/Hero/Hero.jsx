import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
// import images
import img1 from "../../assets/images/headphone-carousel.png";
import img2 from "../../assets/images/watch-carousel.png";
import img3 from "../../assets/images/air-carousel.png";
import img4 from "../../assets/images/hair-carousel.png";

const Hero = () => {
  return (
    <Fragment>
      {/* Swiper js react slider with 1 slide view */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed ">
              <div className="container mx-auto px-3 sm:px-32 py-4 ">
                {/* swiper content */}
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  className=""
                >
                  <SwiperSlide>
                    {/* slide 1 with image 1 */}
                    <div className="flex flex-row items-center justify-center gap-x-20 bg-teal-100">
                      <div className="">
                        <div className="text-normal font-Roboto font-bold text-white">
                          <span className="text-red-500">For Your Comport</span>
                        </div>
                        <div className="text-[80px] font-Roboto font-medium leading-tight mt-4">
                          Portable <br />
                          <span className="text-red-500">Headphone</span>
                        </div>

                        {/* button */}
                        <div className="mt-4">
                          <button className="bg-red-500 text-white px-12 py-3 rounded-md text-normal">
                            Shop Now
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <img
                          src={img1}
                          alt=""
                          className="w-[650px] h-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* slide 1 with image 1 */}
                    <div className="flex flex-row items-center justify-center gap-x-20 bg-teal-100">
                      <div className="">
                        <div className="text-normal font-Roboto font-bold text-white">
                          <span className="text-red-500">Wear the better</span>
                        </div>
                        <div className="text-[80px] font-Roboto font-medium leading-tight mt-4">
                          Time is <br />
                          <span className="text-red-500">Precious</span>
                        </div>

                        {/* button */}
                        <div className="mt-4">
                          <button className="bg-red-500 text-white px-12 py-3 rounded-md text-normal">
                            Shop Now
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <img
                          src={img2}
                          alt=""
                          className="w-[650px] h-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* slide 1 with image 1 */}
                    <div className="flex flex-row items-center justify-center gap-x-20 bg-teal-100">
                      <div className="">
                        <div className="text-normal font-Roboto font-bold text-white">
                          <span className="text-red-500">
                            Just fabulous hair
                          </span>
                        </div>
                        <div className="text-[80px] font-Roboto font-medium leading-tight mt-4">
                          Prove it <br />
                          <span className="text-red-500">Yourself</span>
                        </div>

                        {/* button */}
                        <div className="mt-4">
                          <button className="bg-red-500 text-white px-12 py-3 rounded-md text-normal">
                            Shop Now
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <img
                          src={img3}
                          alt=""
                          className="w-[650px] h-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* slide 1 with image 1 */}
                    <div className="flex flex-row items-center justify-center gap-x-20 bg-teal-100">
                      <div className="">
                        <div className="text-normal font-Roboto font-bold text-white">
                          <span className="text-red-500">For Your Comport</span>
                        </div>
                        <div className="text-[80px] font-Roboto font-medium leading-tight mt-4">
                          Portable air
                          <br />
                          <span className="text-red-500">Cooler</span>
                        </div>

                        {/* button */}
                        <div className="mt-4">
                          <button className="bg-red-500 text-white px-12 py-3 rounded-md text-normal">
                            Shop Now
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <img
                          src={img4}
                          alt=""
                          className="w-[650px] h-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
