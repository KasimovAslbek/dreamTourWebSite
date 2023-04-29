import React from 'react'

export default function Expectation() {
  return (
    <div className=' bg-[#F1F1F1] relative z-50 mt-20'>
        <div className='mx-8 2xl:max-w-[1440px] 2xl:mx-auto py-20  '>
            <h2 className='text-3xl sm:text-4xl font-bold font-inter mb-12'>На протяжении маршрута вас ожидает:</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex gap-y-8  sm:gap-9 xl:gap-3 2xl:gap-8 justify-between'>
                <div className='bg-white rounded-md shadow-lg sm:w-72'>
                    <img className='w-full sm:h-40' src="/img/expectation1.png" alt="" />
                    <div className='p-6 sm:w-72'>
                        <h2 className='sm:text-lg font-montserrat font-bold'>Аудиосопровождение</h2>
                        <p className='text-sm text-[#5A5A5A] font-lato'>Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу.</p>
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-lg sm:w-72'>
                    <img className='w-full sm:w-72 sm:h-40' src="/img/expectation2.png" alt="" />
                    <div className='p-6 sm:w-72'>
                        <h2 className='sm:text-lg font-montserrat font-bold'>Разнообразное питание</h2>
                        <p className='text-sm text-[#5A5A5A] font-lato'>Каждый обед мы готовим с большой любовью. Кормим вас традиционными камчатскими блюдами. Еда - залог хорошего отдыха!</p>
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-lg sm:w-72'>
                    <img className='w-full sm:w-72 sm:h-40' src="/img/expectation3.png" alt="" />
                    <div className='p-6 sm:w-72'>
                        <h2 className='sm:text-lg font-montserrat font-bold'>Безопасность на маршруте</h2>
                        <p  className='text-sm text-[#5A5A5A] font-lato'>Наша команда проводит инструктаж, рассказывает как правильно себя вести, как избежать опасных ситуаций.</p>
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-lg sm:w-72'>
                    <img className='w-full sm:w-72 sm:h-40' src="/img/expectation4.png" alt="" />
                    <div className='p-6 sm:w-72'>
                        <h2 className='sm:text-lg font-montserrat font-bold'>Потрясающие фото</h2>
                        <p className='text-sm text-[#5A5A5A] font-lato'>Можете не переживать, что не успели сделать фото. Наш фотограф успевает везде и за всеми. У вас будут самые лучшие фото!</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
