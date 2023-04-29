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
    img : "./img/hero-mini1.png"
  },
  {
    id : 2,
    img : "./img/hero-mini2.png"
  },
  {
    id : 3,
    img : "./img/hero-mini3.png"
  },
  {
    id : 4,
    img : "./img/hero-mini4.png"
  },
  {
    id : 5,
    img : "./img/hero-mini5.png"
  },
  {
    id : 6,
    img : "./img/hero-mini6.png"
  }
]
SwiperCore.use([Navigation]);

export default function Topbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const image1 = '/img/hero1.png';
    const image2 = '/img/hero2.png';
    const [backgroundImage, setBackgroundImage] = useState(image1);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setBackgroundImage(backgroundImage === image1 ? image2 : image1);
      }, 10000);
      return () => clearInterval(intervalId);
    }, [backgroundImage]);
  return (
            <div className="h-[1032px] sm:h-[950px] md:h-[1032px] lg:h-[833px] bg-no-repeat bg-cover bg-left " style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='max-w-[1440px] mx-4 sm:mx-14  2xl:mx-auto flex items-center  justify-between py-5 sm:py-9  '>
                  <div className='flex items-center gap-4'>
                        <img src="./img/logo.png" alt="" />
                        <img src="./img/logo-text.png" alt="" />
                  </div>
                  <div className='flex items-center ju xl:gap-16 text-[#275553] font-lato '>
                        <ul className='hidden lg:flex items-center gap-14'>
                            <li><a href="">Расписание тура</a></li>
                            <li><a href="">Как записаться</a></li>
                            <li><a href="">Команда</a></li>
                        </ul>
                        <button className='hidden sm:block py-2.5 px-8  border border-[#275553] rounded lg:ml-16'>Забронировать</button>
                        <button
                        className="block ml-10 lg:hidden text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                        <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="3" rx="1" fill="#275553"/>
                        <rect y="8" width="24" height="3" rx="1" fill="#275553"/>
                        <rect y="16" width="24" height="3" rx="1" fill="#275553"/>
                        </svg>

                      </button>
                  </div>

                    <div className={`flex lg:hidden bg-[#E5E5E5] z-30 absolute top-0 right-0 w-full sm:w-96 items-center gap-14 ${menuOpen ? '' : 'hidden'}`}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='absolute top-5 right-10 ' ><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.646447" y1="17.6464" x2="17.6464" y2="0.646447" stroke="#212121"/>
                    <line y1="-0.5" x2="24.0416" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 18 18)" stroke="#212121"/>
                    </svg>
                    </button>
                    <ul className='text-xl font-lato text-[#212121] mx-auto sm:mx-20 my-20 sm:my-24 flex flex-col gap-14'>
                      <li><a href="">Расписание тура</a></li>
                      <li><a href="">Как записаться</a></li>
                      <li><a href="">Команда</a></li>
                      <li><a href="">Стоимость</a></li>
                      <button onClick={() => setMenuOpen(!menuOpen)} className=' py-2.5 px-8 border border-[#275553] rounded '>Забронировать</button>
                    </ul>
                    
                    </div>

                </div>
                <div className='ml-4 sm:ml-10 lg:ml-[5%] py-9 text-white lg:flex '>
                    <div className='lg:w-1/2 font-lato mt-22'>
                      <h2 className='font-inter font-black text-5xl sm:text-6xl lg:text-5xl xl:text-6xl'>Мечты о далекой Камчатке - близко</h2>
                      <button className='font-montserrat text-lg sm:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#FB8B62] to-[#F47648] px-2 sm:px-6 py-1 rounded-xl mt-6 sm:mt-7 mb-8 sm:mb-10'>23.06 - 04.07  DREAM TOUR</button>
                      <p className='text-lg sm:text-xl sm:w-2/3 '>Тур перевернет ваш мир с ног на голову и оставит впечатления на всю жизнь. </p>
                      <a className='flex items-center gap-5 underline text-lg mt-6 sm:mt-9 mb-8 sm:mb-14 lg:mb-44' href="">Расписание тура <img className='rounded-full border border-white p-1' src="./img/right-arrow.png" alt="" /></a>
                      <div className='absolute -bottom-28 sm:-bottom-6 md:-bottom-28 right-10 lg:static flex gap-10 lg:gap-7 '>
                        <svg className='cursor-pointer' width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3098 0H8.72094C5.57656 0 3.54594 1.98843 3.54594 5.06678V7.03521H0.940157C0.696875 7.03521 0.5 7.22377 0.5 7.45661V10.8421C0.5 11.0749 0.696875 11.2621 0.940157 11.2621H3.54594V19.58C3.54594 19.8114 3.74281 20 3.98469 20H7.655C7.89969 20 8.09656 19.8114 8.09656 19.58V11.2606H11.3084C11.5517 11.2606 11.7486 11.0735 11.7486 10.8407L11.75 7.45661C11.7494 7.40097 11.7376 7.34604 11.7154 7.2952C11.6931 7.24435 11.6609 7.19866 11.6206 7.16092C11.5363 7.0809 11.4252 7.03647 11.3098 7.03664H8.09656V5.42247C8.09656 4.47111 8.33422 3.98829 9.63359 3.98829L11.3098 3.98257C11.5517 3.98257 11.7486 3.79544 11.7486 3.5626V0.41997C11.75 0.188558 11.5531 0 11.3098 0Z" fill="#DFDFDF"/>
                        </svg>
                        <svg className='cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.71429 0H14.2857C15.8012 0 17.2547 0.602039 18.3263 1.67368C19.398 2.74531 20 4.19876 20 5.71429V14.2857C20 15.8012 19.398 17.2547 18.3263 18.3263C17.2547 19.398 15.8012 20 14.2857 20H5.71429C4.19876 20 2.74531 19.398 1.67368 18.3263C0.602039 17.2547 0 15.8012 0 14.2857V5.71429C0 4.19876 0.602039 2.74531 1.67368 1.67368C2.74531 0.602039 4.19876 0 5.71429 0ZM10 14.2857C11.1366 14.2857 12.2267 13.8342 13.0305 13.0305C13.8342 12.2267 14.2857 11.1366 14.2857 10C14.2857 8.86336 13.8342 7.77327 13.0305 6.96954C12.2267 6.16582 11.1366 5.71429 10 5.71429C8.86336 5.71429 7.77327 6.16582 6.96954 6.96954C6.16582 7.77327 5.71429 8.86336 5.71429 10C5.71429 11.1366 6.16582 12.2267 6.96954 13.0305C7.77327 13.8342 8.86336 14.2857 10 14.2857ZM14.92 6.34857C15.0903 6.35428 15.2599 6.32568 15.4189 6.26447C15.5779 6.20325 15.723 6.11067 15.8454 5.99224C15.9679 5.87382 16.0653 5.73196 16.1318 5.57511C16.1983 5.41827 16.2326 5.24965 16.2326 5.07929C16.2326 4.90892 16.1983 4.7403 16.1318 4.58346C16.0653 4.42661 15.9679 4.28476 15.8454 4.16633C15.723 4.0479 15.5779 3.95532 15.4189 3.89411C15.2599 3.83289 15.0903 3.80429 14.92 3.81C14.5907 3.82105 14.2786 3.95961 14.0496 4.19645C13.8206 4.43328 13.6926 4.74984 13.6926 5.07929C13.6926 5.40874 13.8206 5.7253 14.0496 5.96213C14.2786 6.19896 14.5907 6.33752 14.92 6.34857Z" fill="#DFDFDF"/>
                        </svg>
                      </div>
                    </div>
                    <div className='lg:w-1/2 lg:mt-80'>

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
                              slidesOffsetBefore : 100,
                              slidesPerView:2.5,
                              spaceBetween : 26
                            },
                            768: {
                              slidesOffsetBefore : 120,
                              slidesPerView:3,
                              spaceBetween : 34
                            },
                            1024: {
                              slidesOffsetBefore : 100,
                              slidesPerView:2.5,
                              spaceBetween : 26
                            },
                            1280: {
                              slidesOffsetBefore : 170,
                              slidesPerView:3,
                              spaceBetween : 34
                            },
                            
                          }}
                          className="mySwiper "
                        >
                          {data.map(d=> (
                            <div className=' relative'>
                            <SwiperSlide  >
                            <img className='w-64 sm:w-52 md:w-64 lg:w-52 xl:w-64 h-64 sm:h-52 md:h-64 lg:h-52 xl:h-64' src={d.img} />
                            <a href="" className='font-lato text-white text-sm absolute bottom-5 left-5'>Какая-то подпись</a>
                          </SwiperSlide>
                            </div>
                          ))}

                        </Swiper>
                        <div className='flex gap-4 mt-5'>
                          <button className="swiper-button-prev rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/left-mini.png" alt="" /></button>
                          <button className="swiper-button-next rounded-full border border-white w-10 h-10 flex justify-center items-center"><img src="./img/right-mini.png" alt="" /></button>
                        </div>

                    </div>
                </div>
            </div>

  )
}
