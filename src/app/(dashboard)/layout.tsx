import { ReactNode } from 'react'
import { Header } from '@/components/header'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex flex-col gap-8">
      <div className=" max-w-screen">
        <Header />
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  )
}
