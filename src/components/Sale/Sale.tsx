'use client'

import Countdown from 'react-countdown'
import saleImg from '../../../public/img/sale50.png'
import Image from 'next/image'
import { CountdownRenderProps } from 'react-countdown/dist/Countdown'
import React from 'react'
import Divider from '@/components/Divider/Divider'

const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    // Render a completed state
    return <div>Скидки окончены</div>
  } else {
    // Render a countdown
    return (
      <div className="flex justify-center gap-6 items-center lg:text-2xl sm:text-xl flex-wrap">
        <div>Осталось</div>
        <div className="flex flex-row items-center gap-2">
          <div className="p-3 rounded">{hours} ч.</div>
          <div className="">:</div>
          <div className="p-3 rounded">{minutes} м.</div>
          <div className="">:</div>
          <div className="p-3 rounded">{seconds} с.</div>
        </div>
      </div>
    )
  }
}
export default function Sale() {
  const handleClick = () => {
    window.open('https://dikidi.ru/larionova')
  }
  return (
    <section
      id="sale"
      className=" relative flex flex-col gap-4 pb-10 pt-10 bg-massage-offer  bg-center bg-cover bg-no-repeat"
    >
      <div className="absolute top-0 left-0 w-full h-full backdrop-contrast-5z bg-white/60 z-0"></div>
      <div className="md:container md:mx-auto z-10 p-2">
        <h3 className="mb-6 text-center text-3xl">Акции</h3>
        <div className="h-1 w-full mx-auto border-b my-5"></div>
        <div className="flex flex-col items-center gap-10 pb-4 pt-4">
          <div className="flex flex-col-reverse gap-1 sm:flex-row-reverse">
            <div className="basis-full p-10 sm:basis-1/2">
              <Image src={saleImg} alt={'скидка 50%'} />
            </div>
            <div className=" p-6 basis-full sm:flex basis-1/2  uppercase text-center items-center text-base">
              Внимание скидка при первом посещении на классический массаж. Всего 1500 рублей за 60
              минут. На Все остальные виды массажа скидка 20%. Запишись прямо сейчас и получи
              гарантированную скидку! Время действия акции ограниченно!
            </div>
          </div>
          <Countdown date={Date.now() + 100000000} renderer={renderer} />
          <button
            onClick={handleClick}
            className="animate-bounce bg-amber-50 ml-auto mr-auto rounded-tl-full rounded-br-full  p-4 rounded-2xl"
          >
            Записаться на сеанс
          </button>
          <Divider color={'black'} />
        </div>
      </div>
    </section>
  )
}
