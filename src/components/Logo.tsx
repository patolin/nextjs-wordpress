import Image from 'next/image'
import imgLogo from '@assets/pato_400x400-150x150.png'
export default function Logo() {
  return (
    <Image
      src={imgLogo}
      alt="Patolin logo"
      width={50}
      height={50}
    />
  )
}