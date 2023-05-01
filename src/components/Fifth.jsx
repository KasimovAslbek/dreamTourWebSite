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


export default function Fifth() {
    const rock = '/img/rock.png';
  return (
    <div style={{ backgroundImage: `url(${rock})` }} className='  bg-no-repeat bg-cover bg-center relative'>
        <div className='ml-4  sm:ml-10 lg:ml-14 xl:ml-[5%] w-full flex flex-col-reverse lg:flex-row'>
            <div className='lg:w-1/4 lg:mt-32 mt-4 sm:mt-12 '>
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
                              slidesOffsetBefore : 4,
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
                          className="mySwiper !z-40"
                        >
                          {data.map(d=> (
                            
                            <SwiperSlide  >
                            <div className=' relative w-fit' >
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
                        <div className='flex lg:justify-end gap-4  mt-8 relative !z-40'>
                            <button className="swiper-button-prev rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/left-mini.png" alt="" /></button>
                            <button className="swiper-button-next rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/right-mini.png" alt="" /></button>
                        </div>
            </div>
            <div className=' lg:w-3/4 sm:pr-8  mr-4 sm:mr-0 relative z-30'>
                
                <div className='xl:w-9/12  xl:mx-auto lg:pl-12 pt-8 md:pt-20'>
                    <div className='xl:flex xl:gap-4'>
                        <img className='hidden w-fit h-fit xl:block z-30' src="img/point.png" alt="" />
                        <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 md:mb-12 text-white'><span className='text-[#F47648]'>День 5. </span>Морская прогулка к острову Старичков</h2>
                    </div>

                    <div className='text-white font-lato md:w-4/5  sm:mr-0 xl:pl-12'>
                      <p>Инструктаж по поведению группы при передвижении на плавсредствах, приему таблеток от морской болезни.</p>
                      <p className='my-2 sm:my-6'>Выезд на причал.  Морская прогулка по Авачинской бухте. Осмотр панорамы города Петропавловска-Камчатского, Авачинской губы и Авачинского залива. Маршрут пролегает мимо бухты Тихая, острова Бабушкин камень, мыса Станицкого, камней «Три брата». Увлекательная возможность донной рыбалки на терпуга, ленка, камбалу у «Трех братьев», мыса Безымянный, у острова Старичков.</p>
                      <p>Осмотр птичьих базаров - смешанных колонии кайр, моевок и бакланов. Трансфер в гостиницу.</p>
                      <p className='my-2 sm:my-6'>Продолжительность 6 часов.</p>
                    </div>
                </div>

            </div>

        </div>
        <div className='mt-8 sm:mt-20 lg:mt-40 xl:mt-52'>
        <img className='absolute pl-10 pt-1 hidden xl:block z-30' src="img/point.png" alt="" />
        <div className='ml-4   sm:ml-10 lg:ml-14 xl:ml-[5%]    z-20 lg:flex '>
            <div className='text-white xl:pl-8 lg:w-1/2 lg:pb-8 xl:pb-16  mr-4 sm:mr-0 '>
                <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 sm:mb-12 mr-4 sm:mr-0 '><span className='text-[#F47648]'>День 6. </span>Берег Тихого океана, экскурсия по городу</h2>
                <div className='text-[#ACACAC] font-lato sm:w-4/5 mr-4 sm:mr-0'>
                    <p>Поездка на берег Тихого океана, в район Халактырского пляжа. Прогулка. Обед в городе. Обзорная экскурсия по г. Петропавловску-Камчатскому с посещением смотровых площадок. Рыбный рынок.</p>
                    <p className='my-2 sm:my-6'>Продолжительность -5 часов.  Трансфер в гостиницу.</p>
                    <div className='pt-8'>
                      <h2 className='font-montserrat font-bold text-xl text-white'>Дополнительные услуги</h2>
                      <div className='sm:grid grid-cols-2 items-center font-lato my-4'>
                        <p className='font-bold  text-white'>Серфинг</p>
                        <p className='text-[#BABABA] text-sm'>Прыжки с высоты над водопадом.<br/> Записываться заранее. </p>
                      </div>
                      <div className='h-0.5 w-full bg-gray-500 '></div>
                      <div className='sm:grid grid-cols-2 items-center font-lato my-4'>
                        <p className='font-bold  text-white'>SUP борды</p>
                        <p className='text-[#BABABA] text-sm'>Прыжки с высоты над водопадом.<br/> Записываться заранее. </p>
                      </div>
                      <div className='h-0.5 w-full bg-gray-500 '></div>
                    </div>
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
                            <div className=' relative  z-50 w-fit' >
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
                        <div className='flex gap-4 mt-8 z-50 pb-8'>
                          <button className="swiper-button-prev rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/left-mini.png" alt="" /></button>
                          <button className="swiper-button-next rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/right-mini.png" alt="" /></button>
                        </div>
                        
            </div>
        </div>

        </div>
        <img className='w-full' src="/img/half-cloud.png" alt="" />
    </div>
  )
}
