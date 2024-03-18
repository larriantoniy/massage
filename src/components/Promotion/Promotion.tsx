'use client'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import React from 'react'
import promo1 from '../../../public/img/promo/promo1.jpeg'
import promo2 from '../../../public/img/promo/promo2.jpeg'
import promo3 from '../../../public/img/promo/promo3.jpeg'
import Divider from '@/components/Divider/Divider'

const slideImages: string[] = [promo1.src, promo2.src, promo3.src]
export default function Promotion() {
  const handleClick = () => {
    window.open('https://dikidi.ru/larionova')
  }
  return (
    <section className={'min-h-dvh'}>
      <Fade autoplay={true} arrows={false}>
        {slideImages.map((slideImage, i) => (
          <div key={i}>
            <div
              className={'relative flex flex-col'}
              style={{
                minHeight: '100dvh',
                background: `url(${slideImage}) center center/cover no-repeat`,
              }}
            >
              <div className="absolute -z-0 top-0 left-0 w-full bg-black/60 h-full"></div>
              <div className="z-10 flex-grow flex items-center">
                <div className="md:container md:mx-auto">
                  <h1 className="text-xl text-center text-white md:text-2xl mt-auto mb-10">
                    Все виды ручного массажа от сертифицированного специалиста Ларионовой A.Ю ,
                    массаж спины , шеи , поясницы г.Москва ст.м Воронцовская , ст.м. Калужская.
                    г.Москва ул.Профсоюзная 76 ТЦ `Галерея`. Скидка до 50% на первое посещение
                  </h1>
                  <div className="flex justify-center">
                    <button
                      onClick={handleClick}
                      className="animate-bounce bg-amber-50 ml-auto mr-auto rounded-tl-full rounded-br-full  p-4 rounded-2xl"
                    >
                      Записаться на сеанс
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full p-6 mt-auto z-10">
                <div className="md:text-2xl text-xl text-white ml-8">
                  Массажный кабинет `Золотые руки`
                </div>
                <Divider />
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </section>
  )
}
