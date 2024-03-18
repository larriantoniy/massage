import Image from 'next/image'
import myPhoto from '../../../public/img/myPhoto.png'
import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import Divider from '@/components/Divider/Divider'

export default function AboutMe() {
  return (
    <section id="aboutMe" className="pb-20 pt-20 bg-amber-50 relative">
      <div className="md:container md:mx-auto">
        <div className="relative">
          <div className="flex items-center flex-wrap space-beetwen gap-x-8 gap-y-4 p-4">
            <div className="flex justify-center flex-grow">
              <Image className="shadow rounded" width={240} height={480} src={myPhoto} alt="фото" />
            </div>
            <div className="p-2 sm:p-0 basis-1/2 flex-grow">
              <p>
                Привет! Хотите расслабиться и почувствовать себя по-настоящему отдохнувшим? Устали
                от боли в спине и напряжения в мышцах? Хотите почувствовать легкость во всем теле?
                Тогда Вам точно нужен массаж!. Меня зовут Алена и я профессиональный
                сертифицированный массажист. Окончила школу Мастеров Массажа. Имею опыт работы более
                1 года. Имею сертификат участника Ассоциации Международного Центра Подготовки и
                Развития Массажистов. Подбeру теxнику масcaжa пoд вaши цели. Сниму блоки и зaжимы в
                тeле, избaвлю oт бoли, убеpу oтеки. Тщaтeльнo пpopабaтываю каждый учaстoк тела без
                бoли, диcкoмфopтa и синяков. Ждем Вас!
              </p>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-end">
                <div className="ml-8 ali">Массажный кабинет `Золотые руки` на Ya.Карты</div>
                <iframe
                  src="https://yandex.ru/sprav/widget/rating-badge/135182402194?type=rating"
                  width="150"
                  height="50"
                  frameBorder="0"
                ></iframe>
              </div>
              <Divider color={'black'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
