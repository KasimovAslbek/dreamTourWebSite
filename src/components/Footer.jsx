import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black font-lato text-[#BABABA]'>
        <div className='max-w-[1440px] mx-auto font-lato pt-12  sm:pt-16  lg:pt-24 px-4 sm:px-8 2xl:pl-24 '>
            <div className='xl:flex'>
                <div className='sm:flex  mb-12 xl:mb-0'>
                    <div className='pr-10 border-0 border-r-2 border-[#535353]'>
                        <img src="img/logo-white.png" alt="" />
                        <ul className='space-y-4 mt-10'>
                            <li><a href="">Расписание тура</a></li>
                            <li><a href="">Стоимость</a></li>
                            <li><a href="">Как записаться</a></li>
                            <li><a href="">Команда</a></li>
                        </ul>
                    </div>
                    <div className='sm:px-10 mt-12 sm:mt-0 border-0 xl:border-r-2 border-[#535353]'>
                        <div className='flex items-center justify-between mb-4 font-inter'>
                            <p>@dreamkamtour</p>
                            <button className='py-2 px-5 sm:px-8 border border-white rounded-lg text-white'>Подписаться</button>
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            <img src="/img/footer1.png" alt="" />
                            <img src="/img/footer2.png" alt="" />
                            <img src="/img/footer3.png" alt="" />
                            <img src="/img/footer4.png" alt="" />
                            <img src="/img/footer5.png" alt="" />
                            <img src="/img/footer6.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='sm:flex '>
                    <div className='xl:px-10 border-0 border-r-2 border-[#535353]' >
                        <div className='flex gap-5 mb-12'>
                            <img src="/img/video.png" alt="" />
                            <div>
                                <p className='text-white font-black w-56 mb-1.5 font-inter'>Смотрите видео отзывы наших клиентов</p>
                                <p>Перейти в Instagram</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-white font-black mb-2.5 font-inter' >Социальные сети</p>
                            <div className='flex gap-5'>
                                <img src="/img/instagram-white.png" alt="" />
                                <img src="/img/vk-white.png" alt="" />
                                <img src="/img/facebook-white.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div  className='sm:pl-10 mt-12 sm:mt-0'>
                        <div>
                            <p className='text-white font-bold text-xl font-inter'>+ 7 (760) 354-23-23</p>
                            <p className='font-montserrat'>Работаем с 9:00 до 18:00</p>
                        </div>
                        <div className='text-white mt-10'>
                            <div className='flex items-center gap-2 mb-3'>
                                <img src="/img/email.png" alt="" />
                                <p>info@dreamkamtour.ru</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src="/img/location.png" alt="" />
                                <p>ул. Рубиннштерна, 41</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-0 border-t-2 border-[#535353] w-full mt-12 '>
                <p className='py-6'>2021 © Dreamkam Tour</p>
            </div>
        </div>
    </div>
  )
}
