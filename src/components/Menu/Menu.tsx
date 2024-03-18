import { Props, slide as MenuBurger } from 'react-burger-menu'
import './Menu.css'

export interface IMenuProps extends Props {
  pageWrapId: string
  outerContainerId: string
}

export default function Menu(props: IMenuProps) {
  return (
    <MenuBurger {...props}>
      <ul
        className="flex justify-between items-center gap-x-2 divide-y-2 divide-dashed divide-amber-50"
        onClick={props.onClose}
      >
        <li className="flex">
          <a href="#aboutMe" className="w-full p-6 h-full hover:bg-amber-50">
            О мне
          </a>
        </li>
        <li className="flex">
          <a className="w-full p-6 h-full hover:bg-amber-50" href="#faq">
            Частые вопросы
          </a>
        </li>
        <li className="flex">
          <a className="w-full h-full p-6 hover:bg-amber-50" href="#service">
            Услуги
          </a>
        </li>
        <li className="flex">
          <a className="w-full h-full p-6 hover:bg-amber-50 hover:text-black" href="#sale">
            Акции
          </a>
        </li>
        <li className="flex">
          <a className="w-full h-full p-6 hover:bg-amber-50" href="#howtoget">
            Как добраться
          </a>
        </li>
      </ul>
    </MenuBurger>
  )
}
