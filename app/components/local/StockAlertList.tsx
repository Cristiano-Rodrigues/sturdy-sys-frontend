import * as React from 'react'
import WarningIcon from '@mui/icons-material/Warning'

export type LowStock = {
  name: string,
  amount: string
}

export function StockList({ list }: { list: LowStock[] }) {

  return (
    <div className='flex flex-col gap-2 max-h-48 overflow-y-auto'>
      {
        list.map((item, i) => (
          <div key={i} className='flex gap-4 w-full h-12 items-center bg-yellow-600 bg-opacity-10 rounded-lg p-4'>
            <WarningIcon className='text-yellow-700'/>
            <p>
              Resta(m) apenas <span className='font-bold'>{item.amount}</span> iten(s) de {item.name}
            </p>
          </div>
        ))
      }
    </div>
  )
}
