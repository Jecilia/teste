import Link from 'next/link'
import { Logo } from './logo'
import { Equalizer } from './equalizer'
import { Block } from './block'
import { Chat } from './chat'
import { Avatar } from './avatar'
import { Menu } from './menu'

export function Header() {
  return (
    <div className="fixed">
      <div className="flex h-[72px] w-screen items-center justify-between bg-app px-24 py-1 text-white">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="flex items-center gap-6 text-base">
            <Link href="#">Users</Link>
            <Link href="#">Patients</Link>
            <Link href="#">Hospitals</Link>
            <Link href="#">Notice</Link>
            <Link href="#">Help Center</Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Block />
          <Equalizer />
          <Chat />
          <div className="flex flex-col">
            <span className="font-semibold ">Marvin McKinney</span>
            <span>admin</span>
          </div>
          <Avatar />
        </div>
      </div>
      <Menu />
    </div>
  )
}
