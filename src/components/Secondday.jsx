import React , { useState, useRef, useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper";
import SwiperCore, { Navigation } from 'swiper/core';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const data = [
    {
      id : 1,
      img : "./img/day1.png",
      title : "Паратунка",
      desc : "Какой-то вспомогательный текст, в котором кратко описывается что на картинке.",
    },
    {
      id : 2,
      img : "./img/day2.png",
      title : "Памятник 'Здесь начинается Россия'",
      desc : "Гости Камчатки по традиции делают фото в начале и в конце путешествий.",
    },
    {
      id : 3,
      img : "./img/day3.png",
      title : "Название слайда",
      desc : "Какой-то вспомогательный текст, в котором кратко описывается что на картинке.",
    },
    {
      id : 4,
      img : "./img/day4.png",
      title : "Паратунка",
      desc : "Какой-то вспомогательный текст, в котором кратко описывается что на картинке.",
    },
    {
      id : 5,
      img : "./img/day5.png",
      title : "Памятник 'Здесь начинается Россия'",
      desc : "Гости Камчатки по традиции делают фото в начале и в конце путешествий.",
    },
    {
      id : 6,
      img : "./img/day6.png",
      title : "Название слайда",
      desc : "Какой-то вспомогательный текст, в котором кратко описывается что на картинке.",
    }
  ]

  SwiperCore.use([Navigation]);


export default function Secondday () {
  return (
    <div className='relative'>
        <img className='-mt-8 sm:-mt-11 md:-mt-14 lg:-mt-24 xl:-mt-32 2xl:-mt-40 relative z-30 w-full' src="/img/cloud.png" alt="" />
        <div >
          <img className='hidden sm:block sm:absolute top-56 lg:top-28 right-0 2xl:w-[1500px] 2xl:h-[1000px]' src="/img/mountain.png" alt="" />
          <div className='absolute top-0 left-0 z-30 mt-8 sm:mt-11 md:mt-14 lg:mt-24 xl:mt-32 2xl:mt-40'> 

          <img className='absolute pl-8 pt-28  hidden xl:block z-30' src="img/point.png" alt="" />
          <div className='lg:w-[55%] mt-6 sm:mt-28 ml-4 sm:ml-10 lg:ml-14 xl:ml-28 font-lato text-[#313131] '>
            <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 sm:mb-12 '><span className='text-[#F47648]'>День 2.</span> Вилючинский водопад, вулкан и Верхне-Паратунские термальные источники</h2>
            <p className='sm:w-1/2 lg:w-3/4 xl:w-2/3'>Инструктаж перед поездкой (передвижение и поведение группы в лесу, общение с медведями, форма одежды, ), снаряжение, (взять тару для воды при заезде на Зайкин ключ, купальные принадлежности).</p>
            <p className='mt-6 xl:mt-8 sm:w-1/2 lg:w-3/4 xl:w-2/3'> Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. Заранее решаем кто прыгает.</p>
          </div>
          <img className=' sm:hidden ' src="/img/mountain.png" alt="" />
        </div>
        </div>
        


        <div className='mt-[650px] sm:mt-[500px] md:mt-[432px] lg:mt-96 xl:mt-[432px] 2xl:mt-96  relative z-50  flex flex-col-reverse lg:flex-row'>
            <div className='lg:w-1/2 lg:mt-auto mt-4 sm:mt-12'>
            <Swiper
                          navigation={{
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                          }}
                          effect={"coverflow"}
                          grabCursor={true}
                          centeredSlides={false}
                          slidesOffsetBefore = {170}
                          slidesPerView={3}
                          spaceBetween = {34}
                          coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                          }}
                          pagination={false}
                          modules={[EffectCoverflow, Pagination]}
                          breakpoints={{
                           250: {
                              slidesOffsetBefore : 50,
                              slidesPerView:1.3,
                              spaceBetween : 26
                            },
                            640: {
                              slidesOffsetBefore : 20,
                              slidesPerView:2.3,
                              spaceBetween : 18
                            },
                            768: {
                              slidesOffsetBefore : 20,
                              slidesPerView:3,
                              spaceBetween : 24
                            },
                            1024: {
                              slidesOffsetBefore : 20,
                              slidesPerView:1.4,
                              spaceBetween : 24
                            },
                            1280: {
                              slidesOffsetBefore : 20,
                              slidesPerView:2.2,
                              spaceBetween : 24
                            },
                            1536: {
                                slidesOffsetBefore : 20,
                                slidesPerView:3,
                                spaceBetween : 34
                              },
                            
                          }}
                          className="mySwiper "
                        >
                          {data.map(d=> (
                            <div className=' relative  ' >
                            <SwiperSlide  >
                            <img className='w-64 sm:w-72 m:w-80 lg:w-[335px]  xl:w-72 2xl:w-80 h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 2xl:h-80' src={d.img} />
                            <div className='font-lato text-white text-sm absolute bottom-5 left-5 p-2 z-30'>
                                <a href="" className='font-bold mb-1'>{d.title}</a>
                                <p className='text-sm text-[#BDBDBD]'>{d.desc}</p>
                            </div>

                            <img className='absolute w-fit h-fit bottom-0 left-0 ' src="/img/day-black.png" alt="" />
                          </SwiperSlide>
                            
                            </div>
                          ))}

                        </Swiper>
                        <div className='flex gap-4 mt-8 lg:justify-end ml-10 mb-16 lg:mb-0'>
                          <button className="swiper-button-prev rounded-full border border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/left-mini-black.png" alt="" /></button>
                          <button className="swiper-button-next rounded-full border border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/right-mini-black.png" alt="" /></button>
                        </div>
            </div>
            <div className='text-[#313131]  mt-auto mr-4 sm:mr-0 mb-8 lg:mb-24 pl-4 sm:pl-10 lg:px-4'>
                <p>Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к подножию вулкана Вилючинский. Обзорная пешеходная экскурсия к водопаду Вилючинский. Термос с чаем, шоколад. Возвращение назад.</p>
                <p className='my-4 lg:my-6 xl:my-8'>Обед. Купание в Верхне-Паратунских термальных источниках, расположенных на склоне сопки Горячая.</p>
                <p>Продолжительность – 6-8 часов. Трансфер в гостиницу.</p>
            </div>
        </div>
        
      
    </div>
  )
}
