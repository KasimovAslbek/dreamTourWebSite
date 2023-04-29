import React from 'react'

export default function Kamchatka() {
  const kam = '/img/kam.png';
  return (
    <div>
      <div className='max-w-[1440px] mx-4 sm:mx-10 md:mx-14 mb-8 sm:mb-16 pt-12 sm:pt-16  lg:pt-32 font-lato text-[#313131] lg:w-2/3 xl:w-1/2'>
        <h2 className='font-bold font-inter text-3xl sm:text-5xl text-[#121212]'>Путешествие на край света начинается</h2>
        <p className='text-xl sm:text-2xl mt-7 mb-8 lg:w-2/3'>Ваша мечта осуществилась, вы приняли решение, и вам предстоит путешествие на край света.</p>
        <p className='lg:w-2/3'>Этот маршрут лучший вариант для тех, кто хочет ощутить, как живёт самая молодая земля нашей планеты, многое увидеть, испытать на себе и полюбить, увезти целый рюкзак незабываемых чувств и впечатлений. Каждый день вы будете выезжать на радиальные маршруты, а проживать в комфортабельных двухместных номерах. </p>
      </div>

      <div style={{ backgroundImage: `url(${kam})` }} className='h-[1032px] sm:h-[950px] md:h-[1032px] lg:h-[1132px] xl:h-[1032px]  bg-no-repeat bg-cover bg-center relative'>
      <div className='max-w-[1440px] mx-4 sm:mx-10 md:mx-14  font-lato text-[#121212] grid grid-cols-2 sm:flex gap-5 sm:gap-16 pt-12 lg:pt-32 xl:pt-4'>
        <div>
          <img src="/img/chart.png" alt="" />
          <div>
            <p className='text-sm font-montserrat my-2'>Сложность</p>
            <p className='font-bold'>Для семейного отдыха</p>
          </div>
        </div>
        <div>
          <img src="/img/calendar.png" alt="" />
          <div>
            <p className='text-sm font-montserrat my-2'>Период</p>
           <p className='font-bold'>Июль - сентябрь</p>
          </div>
        </div>
        <div>
          <img src="/img/wall-clock.png" alt="" />
          <div>
            <p className='text-sm font-montserrat my-2'>Длительность</p>
            <p className='font-bold'>7 дней / 6 ночей</p>
          </div>

        </div>
        <div>
          <img src="/img/hotels.png" alt="" />
          <div>
            <p className='text-sm font-montserrat my-2'>Проживание</p>
           <p className='font-bold'>Отель, без палаток</p >
          </div>
        </div>
      </div>
      <img className='hidden sm:block ml-auto -mt-32 -mr-80 lg:-mr-0 lg:-mt-10 xl:-mt-0' src="/img/text.png" alt="" />
      <img className='hidden sm:block ml-auto -mt-[200px] lg:-mt-[350px] ' src="/img/airplane.png" alt="" />
      <img className='block sm:hidden ml-auto  ' src="/img/airplane2.png" alt="" />
      <img className='absolute bottom-0 left-0 w-full z-30' src="/img/black.png" alt="" />
      <div  className='max-w-[1440px] mx-4 sm:mx-10 md:mx-14 font-lato text-white lg:w-3/5 xl:w-2/5 relative z-40 pt-8 sm:pt-52 lg:pt-32'>
        <h2 className='text-xl sm:text-2xl font-montserrat '>Камчатка – земля великолепной заснеженной природы, действующих вулканов и диких мест, где ещё не ступала нога человека. </h2>
        <p className='text-[#DEDEDE] sm:w-2/3  md:w-1/2 font-light mt-8 mb-2'>“Когда мы подлетали к Камчатке, у меня захватило дух от увиденного. Это за гранью реальности. Невероятно!”</p>
        <p className='font-medium '>Максим, @max_max</p>
      </div>
      </div>
     
    </div>
  )
}
