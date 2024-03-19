import Link from 'next/link'
import { Dots } from './dots'

export function Menu() {
  return (
    <div className="flex max-w-full items-center gap-7 bg-white py-2 pl-paddingA shadow-sm">
      <div className=" flex gap-7 text-sm font-semibold text-grey">
        <Link
          href="http://localhost:3000/user/doctor"
          className="rounded-sm px-4 py-2"
        >
          Doctor
        </Link>
        <Link href="#" className=" rounded-sm px-4 py-2">
          Adminstration
        </Link>
        <Link href="#" className=" rounded-sm px-4 py-2">
          Accounts
        </Link>
      </div>
      <Dots />
    </div>
  )
}
