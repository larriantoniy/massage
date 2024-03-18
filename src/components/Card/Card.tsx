import Image, { StaticImageData } from 'next/image'

export interface ICardProps {
  title: string
  description: string
  image: StaticImageData
  cost: { express: number; full: number }
  time: { express: number; full: number }
}

export default function Card({ title, description, image, cost, time }: ICardProps) {
  return (
    <li className="p-2 max-w-sm md:w-96  w-80">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-main p-8 flex-col gap-3">
        <div className="basis-44">
          <Image src={image} alt={title} className={'h-44'} />
        </div>
        <div className="flex items-center">
          <span className="dark:text-white md:text-lg text:base font-medium">{title}</span>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base dark:text-gray-300">{description}</p>
        </div>
        <div className="font-semibold">
          {!!cost.express && `Цена: ${cost.express}р`}
          {'  '}
          {!!time.express && `Время: ${time.express} мин.`}
        </div>
        <div className="font-semibold">
          {!!cost.full && `Цена: ${cost.full}р`}
          {'  '} {!!time.full && `Время: ${time.full} мин.`}
        </div>
      </div>
    </li>
  )
}
