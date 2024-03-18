'use client'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'

const defaultState = { center: [55.66076, 37.54356], zoom: 11 }

export default function HowToGet() {
  return (
    <section id="howtoget" className="flex flex-col gap-4 pb-10 pt-10">
      <div className="md:container md:mx-auto">
        <h3 className="mb-6 text-center text-3xl">Как добраться</h3>
        <div className="h-1 w-full mx-auto border-b my-5"></div>
        <div className="md:container md:mx-auto">
          <div className="flex flex-col-reverse gap-1 sm:flex-row sm:justify-between items-start pb-4 pt-4">
            <div className="p-4 basis-full text-center sm:p-0 sm:basis-2/3">
              Я нахожусь по адресу город Москва , станция метро Воронцовская , станция метро
              Калужская. Личный кабинет по адресу г.Москва ул.Профсоюзная 76 ТЦ `Галерея 76`.
              Выходите со станции метро Калужская на улицу Профсоюзная и следуете прямо 400 метров
              до ТЦ `Галерея 76`. Находясь лицом к главному входу ТЦ `Галерея 76` вы увидите вывеску
              `Ресторан вьетнамской еды` справа от нее арка в которой находится шлагбаум для вьезда
              на платную парковку , следуйте в арку прямо , внутри вы увидите вывеску фитнес клуба
              `ProFit` смело заходите в эту дверь поднимайтесь на второй этаж и я вас встречу.
              <br />
              ТЕЛ: +7 993 466-98-53
            </div>
            <div className="basis-full p-3">
              <YMaps>
                <Map
                  width="100%"
                  key={'26071bc3-fe89-4294-b97c-747989c442b0'}
                  height="280px"
                  defaultState={defaultState}
                >
                  <Placemark geometry={[55.66076, 37.54356]} />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
