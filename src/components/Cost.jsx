import React from 'react'

export default function Cost() {
  return (
    <div className='max-w-[1440px] mx-auto font-lato '>
        <div className='lg:flex gap-20 2xl:gap-36'>
            <div className='px-4 sm:px-8 2xl:pl-24 mt-12 sm:mt-16 lg:mt-20 2xl:mt-32 lg:w-2/3'>
            <h2 className='font-inter text-[#121212] text-3xl sm:text-5xl xl:text-7xl font-bold'>Стоимость участия</h2>
            <div className='sm:flex justify-between my-6 sm:my-8 xl:my-12'>
                <div className='sm:text-xl '>Базовый (для камчадал)</div>
                <div className='text-2xl font-bold'>79 000 руб</div>
            </div>
            <div className='h-[1px] w-full bg-black'></div>
            <div className='sm:flex justify-between my-6 sm:my-8 xl:my-12'>
                <div className='sm:text-xl '>Базовый + проживание</div>
                <div className='text-2xl font-bold'>99 000 руб</div>
            </div>
            <div className='h-[1px] w-full bg-black'></div>
            <div className='sm:flex justify-between my-6 sm:my-8 xl:my-12'>
                <div className='sm:text-xl '>Базовый + проживание + долина гейзеров</div>
                <div className='text-2xl font-bold'>179 000 руб</div>
            </div>
            <div className='h-[1px] w-full bg-black'></div>
            </div>
            <div className='hidden lg:block w-1/3  mt-20 xl:mt-36'>
                <ul className='text-[#F47648] space-y-6 underline text-lg'>
                    <li>Информация о бронях</li>
                    <li>Важная информация</li>
                    <li>Условия договора и возврата</li>
                </ul>
                <a className='flex items-center gap-5 underline text-lg mt-6 sm:mt-9 ' href="">Расписание тура <img className='rounded-full border border-black p-2' src="./img/right-arrow-black.png" alt="" /></a>
            </div>
        </div>
        <div className='md:flex gap-2 lg:gap-36 font-lato'>
            <div className=' xl:w-2/3 lg:flex space-y-12 lg:space-y-0 gap-14 2xl:gap-36 pl-4 sm:pl-8 2xl:pl-24 mt-16 mb-16 lg:mb-32'>
                <div>
                    <div className='flex gap-2.5 text-2xl font-bold text-[#275553]'>
                        <img className='h-fit' src="/img/checked.png" alt="" />
                        <p>В стоимость входит</p>
                    </div>
                    <ul className='list-disc mt-5 ml-5 text-[#313131]'>
                        <li>встреча и проводы в аэропорту   </li>
                        <li>питание: обеды во время экскурсий</li>
                        <li>услуги гида </li>
                        <li>все транспортные услуги ( автобусы, джипы-вездеходы 4WD)</li>
                        <li>все указанные в программе экскурсии</li>
                    </ul>
                </div>
                <div>
                    <div className='flex gap-2.5 text-2xl font-bold'>
                        <img className='h-fit' src="/img/rubl.png" alt="" />
                        <p>За дополнительную плату</p>
                    </div>
                    <ul className='list-disc mt-5 ml-5 text-[#313131]'>
                        <li>вертолётная экскурсия в Долину Гейзеров и кальдеру Узона, оплачивается в день вылета</li>
                        <li>дополнительные экскурсии и опции</li>
                        <li>размещение в гостинице</li>
                        <li>питание(кроме обедов во время экскурсий)</li>
                        <li>личные расходы</li>
                    </ul>
                </div>
            </div>
             <div className='pl-4 sm:pl-8 md:pl-0 pb-10 md:pb-0 lg:hidden xl:w-1/3 mt-10  md:mt-20 xl:mt-36'>
                <ul className='text-[#F47648] space-y-6 underline text-lg'>
                    <li>Информация о бронях</li>
                    <li>Важная информация</li>
                    <li>Условия договора и возврата</li>
                </ul>
                <a className='flex items-center gap-2 underline text-lg mt-6 sm:mt-9 ' href="">Расписание тура <img className='rounded-full border border-black p-2' src="./img/right-arrow-black.png" alt="" /></a>
            </div>
        </div>
        <div className='h-1 w-full bg-[#212121]'></div>

    </div>
  )
}
