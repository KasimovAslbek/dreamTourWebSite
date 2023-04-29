import React  from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {  Pagination } from "swiper";
import SwiperCore, { Navigation } from 'swiper/core';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";




const data = [
    {
      id : 1,
      img : "./img/team1.png",
      name : "Алина Гончарова",
      email : "@alin_och",
    },
    {
      id : 2,
      img : "./img/team2.png",
      name : "Евгений Барсуков",
      email : "@eugen_eugen",
    },
    {
      id : 3,
      img : "./img/team3.png",
      name : "Дмитрий Осипов",
      email : "@dim_os",
    },
    {
      id : 4,
      img : "./img/team1.png",
      name : "Алина Гончарова",
      email : "@alin_och",
    },
    {
      id : 5,
      img : "./img/team2.png",
      name : "Евгений Барсуков",
      email : "@eugen_eugen",
    },
    {
      id : 6,
      img : "./img/team3.png",
      name : "Дмитрий Осипов",
      email : "@dim_os",
    }
  ]
  SwiperCore.use([Navigation]);
export default function Team() {
  return (
    <div className='max-w-[1440px] mx-auto font-lato mt-12  sm:mt-16  lg:mt-24 px-4 sm:px-8 2xl:pl-24 '>
        <div>
            <h2 className='font-inter font-bold text-3xl sm:text-6xl  xl:w-2/3 mb-6 sm:mb-0'>Про нашу супер крутую команду Dreamkam Tour</h2>
            <p className='hidden sm:block text-[#313131] lg:w-2/3 xl:w-1/2 mt-8 md:mt-14 mb-12 md:mb-20'>Наша команда - это люди влюбленные в свою работу. Каждый из них обладает проффесиональными знаниями, хорошей физической подготовкой. Следят за вашей безпасностью в туре, и тем чтобы каждый из вас получил максимальное колличество эмоций.</p>
        </div>
        <Swiper
                      navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                      }}
                      effect={"coverflow"}
                      grabCursor={true}
                      centeredSlides={false}

  
                      pagination={false}
                      modules={[ Pagination]}
                      breakpoints={{
                       250: {
                          
                          slidesPerView:1,
                          spaceBetween : 10
                        },
                        640: {
                          
                          slidesPerView:1.7,
                          spaceBetween : 70
                        },
                        768: {
                          
                          slidesPerView:1.7,
                          spaceBetween : 96
                        },
                        1024: {
                          
                          slidesPerView: 3,
                          spaceBetween : 70
                        },
                        1280: {
                          
                          slidesPerView:3,
                          spaceBetween :96
                        },
                        1536: {
                            
                            slidesPerView:3,
                            spaceBetween : 96
                          },
                        
                      }}
                      className="mySwiper "
                    >
            {data.map(d=> (
                <div className='' >
                    <SwiperSlide  >
                    <img  className='w-full' src={d.img} alt="images" />
                    <div className=' flex items-center gap-1 text-lg mt-6 '>
                        <p href="" className='mb-1 font-semibold'>{d.name} , </p>
                        <p className='text-sm text-[#F47648] underline'>{d.email}</p>
                    </div>

                    
                      </SwiperSlide>
                    </div>
                            ))}
                    </Swiper>
            <div className='flex gap-4 pr-4 sm:justify-end mt-8 sm:mt-14 mb-12 sm:mb-16 lg:mb-32'>
                      <button className="swiper-button-prev rounded-full border border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/left-mini-black.png" alt="" /></button>
                      <button className="swiper-button-next rounded-full border border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/right-mini-black.png" alt="" /></button>
            </div>
    </div>
  )
}
