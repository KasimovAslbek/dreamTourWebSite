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

export default function Fourthday() {
    
  return (
    <div className='bg-black relative -mt-8'>
        <img className='hidden sm:block sm:absolute z-40 top-0 right-8 -mt-56 lg:-mt-48' src="/img/eagle.png" alt="" />
        <img className='absolute pl-10 pt-1 hidden xl:block z-30' src="img/point.png" alt="" />
        <div className='ml-4   sm:ml-10 lg:ml-14 xl:ml-[5%]    z-20 lg:flex '>
            <div className='text-white xl:pl-8 lg:w-1/2 lg:pb-8 xl:pb-16  mr-4 sm:mr-0 '>
                <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 sm:mb-12 mr-4 sm:mr-0 '><span className='text-[#F47648]'>День 4. </span>Экскурсия к подножию Авачинского вулкана</h2>
                <div className='text-[#ACACAC] font-lato sm:w-4/5 mr-4 sm:mr-0'>
                    <p>Инструктаж по поведению группы в горах. Проверка снаряжения.Выезд на автомашине на вулканическое плато (высота 900 м) к подножию Авачинского вулкана (2 часа).</p>
                    <p className='my-2 sm:my-6'>Пешеходная экскурсия к горе Верблюд, представляющую собой вулканическую экструзию. Находится в седловине между Корякским и Авачинским вулканами, относительная высота 100-150 м, ширина - около 100 м и по длине она протягивается на 500 м., состоит из трех сросшихся блоков.</p>
                    <p>Обед.  Поездка в Паратунку с купанием.</p>
                    <p className='mt-2 sm:mt-6'>Продолжительность – 8 часов. Трансфер в гостиницу.</p>
                </div>
            </div>
            <div className='lg:w-1/2  mt-4 sm:mt-12 relative '>
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
                              slidesOffsetBefore : 5,
                              slidesPerView:1,
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
                          className="mySwiper !z-50"
                        >
                          {data.map(d=> (
                            
                            <SwiperSlide  >
                            <div className=' relative  z-50 w-fit ' >
                            <img className='w-64 sm:w-72 m:w-80 lg:w-[335px]  xl:w-72 2xl:w-80 h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 2xl:h-80' src={d.img} />
                            <div className='font-lato text-white text-sm absolute bottom-5 left-5 p-2 z-30'>
                                <a href="" className='font-bold mb-1'>{d.title}</a>
                                <p className='text-sm text-[#BDBDBD]'>{d.desc}</p>
                            </div>

                            <img className='absolute w-fit h-fit bottom-0 left-0 ' src="/img/day-black.png" alt="" />
                            </div>
                            </SwiperSlide>
                            
                       
                          ))}

                        </Swiper>
                        <div className='flex gap-4 mt-8 relative z-50 pb-8'>
                          <button className="swiper-button-prev rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/left-mini.png" alt="" /></button>
                          <button className="swiper-button-next rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/right-mini.png" alt="" /></button>
                        </div>
                        <img className='absolute z-40 bottom-0 sm:left-20 lg:left-0  xl:left-20 -mb-20 sm:-mb-32 lg:-mb-40 xl:-mb-32 2xl:-mb-40' src="/img/gull.png" alt="" />
            </div>
        </div>

    </div>
  )
}
