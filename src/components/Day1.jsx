import React from 'react'
import Firstday from './Firstday'
import Secondday from './Secondday'
import Expectation from './Expectation'
import Thirdday from './Thirdday'
import Fourthday from './Fourthday'
import Fifth from './Fifth'
import Seventh from './Seventh'
import Eighth from './Eighth'


export default function Day1() {
  return (
    <div className=''>
        <img className='absolute pl-8 pt-16 hidden xl:block z-50' src="/img/line.png" alt="" />
        <Firstday />
        <Secondday />
        <Expectation />
        <Thirdday />
        <Fourthday />
        <Fifth />
        <Seventh />
        <Eighth />
    </div>
  )
}
