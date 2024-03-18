'use client'
import Image from 'next/image'
import tgIcon from '../../../public/svg/icons8-telegram.svg'
import vbIcon from '../../../public/svg/icons8-viber.svg'
import waIcon from '../../../public/svg/icons8-whatsapp.svg'
import logo from '../../../public/img/logo.png'

import Hamburger from '@/components/Hamburger/Hamburger'
import Menu from '@/components/Menu/Menu'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Menu
        pageWrapId={'pageWrap'}
        className="bg-main"
        outerContainerId={'outer-container'}
        noOverlay={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        right
      />

      <header className="absolute z-20 p-6 top-0 left-0 w-full">
        <div className="border-2 rounded-3xl border-white border-opacity-60 p-1">
          <div className="md:container md:mx-auto">
            <div className="flex flex-row gap-x-10 justify-between items-center">
              <Hamburger toggleMenu={() => setIsOpen(!isOpen)} />
              <div className="flex flex-row gap-x-2 justify-between items-center ">
                <a target="_blank" href="https://t.me/@massageLarionova" className="cursor-pointer">
                  <Image width={32} height={32} priority src={tgIcon} alt="Напишите в telegram" />
                </a>
                <a target="_blank" href="https://wa.me/79934669853" className="cursor-pointer">
                  <Image width={32} height={32} priority src={vbIcon} alt="Напишите в viber" />
                </a>
                <a
                  target="_blank"
                  href="https://skobelkin.ru/viber/79934669853"
                  className="cursor-pointer"
                >
                  <Image width={32} height={32} priority src={waIcon} alt="Напишите в whatsapp" />
                </a>
              </div>
              <div className="flex md:flex-grow justify-end items-center md:justify-center">
                <div className="bg-main rounded-full w-[50px] h-[50px]">
                  <Image
                    className="w-full h-full"
                    width={32}
                    height={32}
                    priority
                    src={logo}
                    alt="Напишите в whatsapp"
                  />
                </div>
              </div>
              <a
                href="tel:+79934669853"
                className="md:flex justify-between items-center text-white gap-x-2 cursor-pointer hidden"
              >
                +7 993 466-98-53
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
