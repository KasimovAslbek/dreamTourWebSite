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

export default function Firstday() {
    const lists = '/img/lists.png';
  return (
    <div style={{ backgroundImage: `url(${lists})` }} className=' h-[1032px] sm:h-[950px] md:h-[1032px] lg:h-[932px]   bg-no-repeat bg-cover bg-center relative'>
        <img className='absolute pl-10 pt-12 hidden xl:block z-30' src="img/point.png" alt="" />
        <img className='w-full h-full absolute' src="/img/black-lists.png" alt="" />
        <div className='ml-4  sm:ml-10 lg:ml-14 xl:ml-[5%] w-full absolute  z-30 lg:flex '>
            <div className='text-white lg:w-1/2 xl:pb-28 2xl:pb-40 mr-4 sm:mr-0'>
                <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 sm:mb-12'><span className='text-[#F47648]'>День 1. </span>Прибытие. Встреча в аэропорту и размещение</h2>
                <div className='text-[#ACACAC] sm:w-4/5 mr-4 sm:mr-0'>
                    <p>С высоты птичьего полета вы увидите знаменитые «домашние»  вулканы – Корякский, Авачинский и Козельский. У выхода в аэропорту <span className='font-semibold text-white'>вас встретят с табличкой «ДРИМ ТУР».</span></p>
                    <p className='my-2 sm:my-6'><span className='font-semibold text-white'>По пути в гостиницу сбор средств </span> с членов группы, инструктаж по программе этого дня (бассейн с термальной водой, шашлык, знакомство с группой, алкоголь, фейерверк не раньше 20:00).</p>
                    <p className='my-2 sm:mb-6'>После выезд (вид транспорта зависит от величины группы) на базу отдыха в курортный <span className='underline'>поселок Паратунка.</span></p>
                    <p><span className='font-semibold text-white'>Вечером</span>, после прибытия на Камчатку всех участников (если рейсы разные),  <span className='font-semibold text-white'>общая встреча</span>, проверка снаряжения,  обсуждение программы завтрашнего дня.</p>
                </div>
            </div>
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
                        <div className='flex gap-4 mt-8'>
                          <button className="swiper-button-prev rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/left-mini.png" alt="" /></button>
                          <button className="swiper-button-next rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/right-mini.png" alt="" /></button>
                        </div>
            </div>
        </div>

    </div>
  )
}
