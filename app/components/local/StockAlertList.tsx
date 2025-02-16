import * as React from 'react'
import WarningIcon from '@mui/icons-material/Warning'

const alerts = [
  { equipmentName: 'Air Conditioner', amount: 7 },
  { equipmentName: 'Smart Screen OLED', amount: 3 },
  { equipmentName: 'Thermostat', amount: 4 }
]

export function StockList() {

  return (
    <div className='flex flex-col gap-2 max-h-48 overflow-y-auto'>
      {
        alerts.map((alert, i) => (
          <div key={i} className='flex gap-4 w-full h-12 items-center bg-yellow-600 bg-opacity-10 rounded-lg p-4'>
            <WarningIcon className='text-yellow-700'/>
            <p>
              Resta(m) apenas <span className='font-bold'>{alert.amount}</span> iten(s) de {alert.equipmentName}
            </p>
          </div>
        ))
      }
    </div>
  )
}
