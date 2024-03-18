import Image from 'next/image'
import logo from '../../../public/img/logo.png'

export default function Footer() {
  return (
    <footer className="flex relative flex-row justify-center items-center p-2 bg-main">
      <div className="md:container md:mx-auto">
        <div className="flex justify-center items-center">
          <Image src={logo} width={36} height={36} alt={'логотип'} />
        </div>
        <div className="text-center"> Все права защищены Larionova© 2024г.</div>
      </div>
    </footer>
  )
}
