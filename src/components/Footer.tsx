import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:patricio.reinoso.mendoza@gmail.com}`} size={6} />
          <SocialIcon kind="github" href={'#'} size={6} />
          <SocialIcon kind="facebook" href={'#'} size={6} />
          <SocialIcon kind="youtube" href={'#'} size={6} />
          <SocialIcon kind="linkedin" href={'#'} size={6} />
          <SocialIcon kind="twitter" href={'#'} size={6} />
          <SocialIcon kind="instagram" href={'#'} size={6} />
          <SocialIcon kind="threads" href={'#'} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{'Patricio Reinoso M.'}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{'patolin.com'}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="#">
            Hecho con tailwindcss y next.js
          </Link>
        </div>
      </div>
    </footer>
  )
}