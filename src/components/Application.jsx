import React from 'react'

export default function Application() {
  const rock = '/img/form-bg.png';
  return (
    <div>
      <div className='max-w-[1440px] mx-auto font-lato mt-10 sm:mt-16  lg:mt-24 px-4 sm:px-8 2xl:pl-24 lg:flex relative z-40'>
        <div className='lg:w-1/2 mb-10 lg:mb-0 text-[#212121] text-4xl font-bold space-y-7 flex items-center justify-between lg:block'>
            <h2>Онлайн-заявка</h2>
            <div className='hidden sm:flex gap-7'>
              <img src="/img/instagram.png" alt="" />
              <img src="/img/vk.png" alt="" />
              <img src="/img/facebook.png" alt="" />
            </div>
        </div>
        <div className='sm:w-5/6 lg:w-1/2 text-[#212121]'>
            <form className='text-sm' >
              <div className='sm:flex space-y-6 sm:space-y-0 gap-11'>
                <div className=' sm:w-1/2'>
                  <label className='block mb-4'>Имя участника</label>
                  <input className='border-0 border-b-2 border-gray-300 pb-3 w-full' placeholder='Имя' type="text" />
                </div>
                <div className=' sm:w-1/2'>
                  <label className='block mb-4'>Количество человек</label>
                  <input className='border-0 border-b-2 border-gray-300 pb-3 w-full' placeholder="1" type="number" />
                </div>
              </div>
              <div className='pt-12 pb-6'><label >Тариф</label></div>
              <div className='sm:flex justify-between mb-2.5'>
              
                <div className='flex gap-2'>
                  <input name='cost' type="radio" />
                  <label className='block text-lg'>Базовый (для камчадал)</label>
                </div>
                <div className='text-xl font-bold'>79 000 руб</div>
              </div>
              <div className='sm:flex justify-between mb-2.5'>
                <div className='flex gap-2'>
                  <input name='cost' type="radio" />
                  <label className='block text-lg'>Базовый + проживание</label>
                </div>
                <div className='text-xl font-bold'>99 000 руб</div>
              </div>
              <div className='sm:flex justify-between mb-2.5'>
                <div className='flex gap-2'>
                  <input name='cost' type="radio" />
                  <label className='block text-lg'>Базовый + проживание + долина гейзеров</label>
                </div>
                <div className='text-xl font-bold'>179 000 руб</div>
              </div>
              <div> 
                <label className='block py-4'>Даты тура</label>
                <input  className='text-xl border-0 border-b-2 border-gray-300 w-1/2 bg-inherit' type="date" />
              </div>   
              <div>
                <label className='block pt-9 pb-4'>Комментарий</label>
                <textarea className='border-0 border-b-2 border-gray-300 w-full text-xl bg-inherit placeholder-gray-700' name="" id=""  rows="1" placeholder='Напишите ваш комментарий здесь'></textarea>
                
              </div> 
              <div className='my-12 w-fit ml-auto'>
                <input className='text-white bg-[#F47648] py-2 px-8 ' type="submit" value="Отправить заявку" />            
              </div>
              
            </form>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${rock})` }} className='-mt-[410px] lg:-mt-96  2xl:-mt-80  bg-no-repeat bg-cover bg-center relative'>
            <div className='pt-[514px] pb-16 lg:pb-20 max-w-[1440px] mx-auto font-lato mt-24 px-4 sm:px-8 2xl:pl-24 sm:flex items-center gap-6 lg:gap-10 xl:gap-24'>
                <img className='-ml-20 sm:-ml-28' src="/img/magazine.png" alt="" />
                <div className=' text-white font-lato' >
                  <h2 className='text-4xl font-bold mb-2'>Что нужно знать отправляясь на Камчатку?</h2>
                  <p className='mb-8 text-xl'>Получите памятку туриста просто оставив свой e-mail.</p>
                  <form className='sm:flex items-center gap-6 space-y-6 sm:space-y-0 ' >
                    <input className='sm:w-2/3 bg-inherit placeholder-[#999999] border-0 border-b-2 border-gray-300 pb-3 text-xl' type="email" placeholder='Ваш e-mail'  name="" id="" />
                    <input className='text-white bg-[#F47648] py-2 px-8 ' type="submit" value="Получить" />
                  </form>
                </div>
            </div>
      </div>
    </div>
  )
}
