import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

export function Header ({
  title
}: {
  title: string
}) {
  return (
    <div className="flex items-center justify-between w-full h-[70px] bg-lightGray rounded-lg p-2">
      <p className='text-lg font-bold text-gray-700'>{ title }</p>
      <div className="flex gap-2">
        <TextField id="outlined-basic" variant="outlined" label='Pesquisar aqui' size='small' />
        <Button variant="text" href='#'>
          <NotificationsNoneIcon />
        </Button>
      </div>
    </div>
  )
}