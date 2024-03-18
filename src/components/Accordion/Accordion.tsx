'use client'

import { useEffect, useRef, useState } from 'react'

export interface AccordionProps {
  title: string
  description: string
}

export default function Accordion({ title, description }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  let cont = useRef<HTMLDivElement>(null)
  useEffect(() => {}, [])
  return (
    <div className="transition" onClick={() => setIsOpen(!isOpen)}>
      <div className="accordion-header  hover:bg-main cursor-pointer transition flex space-x-5 px-5 items-center h-16 ">
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        )}
        <h3>{title}</h3>
      </div>
      <div
        style={{
          maxHeight: isOpen ? `${cont.current && cont.current.scrollHeight + 32}px` : '0px',
        }}
        className={`accordion-content px-2 pt-0 overflow-hidden`}
        ref={cont}
      >
        <p className="pt-10 pb-10 leading-6 font-light pl-9 text-justify">{description}</p>
      </div>
    </div>
  )
}
