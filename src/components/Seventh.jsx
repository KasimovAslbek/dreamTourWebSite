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
      img : "./img/day7.png",
      title : "Паратунка",
      desc : "Какой-то вспомогательный текст, в котором кратко описывается что на картинке.",
    },
    {
      id : 2,
      img : "./img/day8.png",
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
      img : "./img/day7.png",
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
      img : "./img/day8.png",
      title : "Название слайда",
      desc : "Какой-то вспомогательный текст, в котором кратко описывается что на картинке.",
    }
  ]

  SwiperCore.use([Navigation]);

export default function Seventh() {
  return (
    <div className='relative'>
        <div className='lg:flex'>
            <div className=' lg:w-1/2'>
                <img className=' pl-8 pt-12 absolute  hidden xl:block z-30' src="img/point.png" alt="" />
                <div className='px-4 sm:pl-10 lg:pl-14 xl:pl-20 pt-11 font-lato text-[#313131] '>
                    <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 sm:mb-12 '><span className='text-[#F47648]'>День 7. </span>Вертолетная экскурсия в Долину Гейзеров и кальдеру вулкана Узон / свободный день</h2>
                    <p>Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ», крупнейшим оператором вертолётных туров на Камчатке. Выезд в аэропорт «Витязь –Аэро». К вашим услугам –современный аэропортовый комплекс, включающий в себя удобный зал ожидания, кафетерий, сувенирный магазин.</p>
                    <p className='my-2 sm:my-6'>Перелёт до Долины гейзеров занимает 1 час 10 минут. По пути, при благоприятных условиях, вы осмотрите два действующих вулкана – Карымский и Малый Семячик из окон вертолёта.</p>
                    <p>Перелёт и посадка в кальдере Узон. Кальдера образовалась в результате обрушения стенок древнего вулкана около 40 тысяч лет назад, на её дне очень ярко проявляется гидротермальная деятельность.Сотни столбов пара вырываются здесь из жёлтых фумарольных полей. Осмотр термальных полей.</p>
                </div>
               
            </div>
            
            <div className=' lg:w-1/2 lg:mt-40'>
                <img className='w-full ' src="/img/volcano.png" alt="" />
            </div>
        </div>


    


    <div className='mt-14  relative z-50  flex flex-col-reverse lg:flex-row'>
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
                        
                        <SwiperSlide  >
                        <div className=' relative  w-fit' >
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
                    <div className='flex gap-4 mt-8 pr-4 justify-end ml-10 mb-16 lg:mb-0'>
                      <button className="swiper-button-prev rounded-full border border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/left-mini-black.png" alt="" /></button>
                      <button className="swiper-button-next rounded-full border border-[#212121] w-10 h-10 flex justify-center items-center"><img src="./img/right-mini-black.png" alt="" /></button>
                    </div>
        </div>
        <div className='text-[#313131]  mt-auto mr-4 sm:mr-0 mb-8 lg:mb-24 pl-4 lg:pl-8 sm:pl-10 lg:px-4'>
            <p>Перелёт и посадка в Налычевской долине. Купание в горячих источниках. Здесь же вам предложат обед - горячее, чай и камчатский морс. Трансфер в гостиницу. </p>
            <div className='pt-8'>
                <h2 className='font-montserrat font-bold text-xl text-[#212121]'>Дополнительные услуги</h2>
                <div className='sm:grid grid-cols-2 items-center font-lato my-4'>
                    <p className='font-bold  '>Серфинг</p>
                    <p className='text-[#BABABA] text-sm'>Прыжки с высоты над водопадом.<br/> Записываться заранее. </p>
                </div>
                <div className='h-0.5 w-full bg-gray-500 '></div>
                <div className='sm:grid grid-cols-2 items-center font-lato my-4'>
                    <p className='font-bold  '>SUP борды</p>
                    <p className='text-[#BABABA] text-sm'>Прыжки с высоты над водопадом.<br/> Записываться заранее. </p>
                    </div>
                <div className='h-0.5 w-full bg-gray-500 '></div>
                </div>
        </div>
    </div>
    
  
</div>
  )
}
