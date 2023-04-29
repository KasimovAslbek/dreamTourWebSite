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

export default function Thirdday() {
    const lists = '/img/bg-mountain.png';
  return (
    <div style={{ backgroundImage: `url(${lists})` }} className=' h-[1032px] sm:h-[950px] md:h-[1032px] lg:h-[932px]   bg-no-repeat bg-cover bg-center relative'>

        <div className='ml-4  sm:ml-10 lg:ml-14 xl:ml-[5%] w-full absolute  z-50 flex flex-col-reverse lg:flex-row'>
            <div className='lg:w-1/4 lg:mt-32 mt-4 sm:mt-12'>
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
                              slidesOffsetBefore : 16,
                              slidesPerView:1,
                              spaceBetween :0
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
                              slidesPerView:1.2,
                              spaceBetween : 24
                            },
                            1280: {
                              slidesOffsetBefore : 20,
                              slidesPerView:1.2,
                              spaceBetween : 24
                            },
                            1536: {
                                slidesOffsetBefore : 4,
                                slidesPerView:1.4,
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
                        <div className='flex lg:justify-end gap-4 ml-4 sm:ml-0 mt-8'>
                            <button className="swiper-button-prev rounded-full border bg-white lg:bg-inherit lg:border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/left-mini-black.png" alt="" /></button>
                            <button className="swiper-button-next rounded-full border bg-white lg:bg-inherit  border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/right-mini-black.png" alt="" /></button>
                        </div>
            </div>
            <div className=' lg:w-3/4 sm:pr-8  mx-4 sm:mr-0 relative z-30'>
                
                <div className='xl:w-9/12  xl:mx-auto lg:pl-12 pt-8 md:pt-20'>
                    <div className='xl:flex xl:gap-4'>
                        <img className='hidden w-fit h-fit xl:block z-30' src="img/point.png" alt="" />
                        <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 md:mb-12'><span className='text-[#F47648]'>День 3. </span>Горные цирки и водопады вулкана Вачкажец</h2>
                    </div>

                    <div className='text-[#212121] font-lato md:w-4/5  sm:mr-0 xl:pl-12'>
                        <p>Вачкажец–горный массив и его окрестности, одно из красивейших мест первозданной камчатской природы. Небольшой пеший переход не успеет Вас утомить. А в награду за труд в конце пути открывается великолепный вид на горное озеро в чаше кратера старого потухшего вулкана, обрамленное пиками старых, невысоких гор.</p>
                        <p className='my-2 sm:my-6'>Выезд из гостиницы и переезд около 2 часов. Пеший переход около 5 км.в одну сторону к горным циркам вулкана Вачкажец, осмотр водопада. Обед.  Отдых. По прибытию в машину чай с шоколадом! Обратный переход по тому же пути.</p>
                        <p className='my-2 sm:mb-6'>Продолжительность: 8 часов. Трансфер в гостиницу.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}