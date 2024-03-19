import { AddUser } from '@/components/home/adduser'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/home/table'
import { ArrowRight } from 'lucide-react'
import { Span } from '@/components/home/span'
import Image from 'next/image'
import Avatar from '../../../../../public/Avatar1.png'

// eslint-disable-next-line no-lone-blocks
{
  /* 

export interface Profile {
  name: string
  profession: string
  id: number
  email: string
  phone: string
  data: string
  time: string
  status: string
}
export interface ProfileResponse {
  first: number
  prev: number | null
  next: number
  last: number
  pages: number
  items: number
  data: Profile[]
}
*/
}

export default async function Home() {
  // eslint-disable-next-line no-lone-blocks
  {
    /*  const { data: profilesResponse, isLoading } = useQuery<ProfileResponse>({
    queryKey: ['get-profiles'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/profiles')
      const data = await response.json()
      return data
    },
  })
  if (isLoading) {
    return null
  } */
  }

  return (
    <div className=" mt-32 h-[900px] w-[1150px] space-y-5 rounded-xl bg-white p-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-medium text-[#212121]">List of doctors</span>
          <Span className="text-[12px]" variant="primary">
            345 available doctors
          </Span>
        </div>
        <div>
          <button className="flex h-10 w-40 items-center justify-center gap-2 truncate rounded-md bg-app px-[10px] py-5 text-white">
            <AddUser />
            <span className="truncate">Add new doctor</span>
          </button>
        </div>
      </div>
      <Table>
        <TableHeader className="h-11">
          <TableRow className=" truncate">
            <TableHead> Name</TableHead>
            <TableHead> ID</TableHead>
            <TableHead> Email</TableHead>
            <TableHead className=" truncate"> Phone number</TableHead>
            <TableHead>Date added</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="truncate">
          {Array.from({ length: 8 }).map((value, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Image src={Avatar} alt="" />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-1 truncate">
                      <Span variant="secondary" className="w-32 truncate">
                        Brooklyn Simmons
                      </Span>
                      <Span variant="primary" className="w-32 truncate">
                        Dermatologists
                      </Span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="w-16 truncate"> 87364523</TableCell>
                <TableCell className="w-40 truncate">
                  brooklyns@mail.com
                </TableCell>
                <TableCell className="w-28 truncate">(603) 555-0123</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <Span variant="secondary">21/12/2022</Span>
                    <Span variant="primary">10:40 PM</Span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="h-[17px] w-[51px] items-center rounded-md bg-purpleLite px-4 py-2 text-[11px] font-medium leading-[16.5px] text-app">
                    Approved
                  </span>
                </TableCell>
                <TableCell>
                  <button className="items-center justify-center rounded-md bg-bgApp p-2">
                    <ArrowRight className="h-3 w-3 items-center justify-center" />
                  </button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
