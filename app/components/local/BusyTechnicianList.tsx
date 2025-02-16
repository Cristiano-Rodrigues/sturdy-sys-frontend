import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Link from 'next/link'

const technicians = [
  { name: 'John Doe', request: 5 },
  { name: 'John Doe', request: 7 },
  { name: 'John Doe', request: 595 },
]

export function BusyTechnicianList () {

  return (
    <div className='flex flex-col gap-2 max-h-52 overflow-y-auto'>
      {
        technicians.map(({ name, request }, i) => (
          <div key={i} className='flex gap-4 w-full items-center bg-white rounded-lg p-1 px-2'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className='flex gap-2 items-center'>
              <p className='font-bold'>
                { name }
              </p> |
              <p className='text-sm'>
                Encarregado da solicitação <Link href='/request' className='text-blue-600 font-bold'>#{request}</Link>
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
