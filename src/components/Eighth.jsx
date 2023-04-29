import React from 'react'

export default function Eighth() {
    const rock = '/img/mountain-2.png';
  return (
    <div style={{ backgroundImage: `url(${rock})` }} className='-mt-40 lg:-mt-20 xl:-mt-0  bg-no-repeat bg-cover bg-right relative'>
        <img className=' pl-[440px] pt-[350px] absolute  hidden xl:block z-30' src="img/point.png" alt="" />
        <div className='px-4 sm:pl-10 lg:pl-14 xl:pl-[490px] pt-52 lg:pt-[330px] font-lato text-white xl:w-5/6 2xl:w-3/4 pb-11 sm:pb-16 lg:pb-40'>
            <h2 className='font-bold font-montserrat text-2xl sm:text-4xl xl:text-5xl mb-4 sm:mb-8 lg:pb-12'><span className='text-[#F47648]'>День 8. </span>Отъезд с Камчатки. Трансфер в аэропорт</h2>
            <p>Заезд на рынок, прощальное посещение «медведей», фото на память. Возвращайтесь следующим летом!</p>
        </div>
    </div>
  )
}
