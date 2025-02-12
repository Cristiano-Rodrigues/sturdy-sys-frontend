import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { DataTable } from '@/app/components/local/Table'
import { Header } from '@/app/components/local/Header'
import GridViewIcon from '@mui/icons-material/GridView'

export default function Home() {
  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Equipamentos' />
        
      <div className='flex flex-col gap-2 h-full'>
        <div className="flex w-full h-[70px] bg-lightGray rounded-lg p-3 gap-2 justify-between">
          <TextField id="standard-basic" label="Pesquisar" variant="standard" />
          <div className="flex gap-2">
            <Button variant="text">
              <GridViewIcon />
            </Button>
            <Button variant="contained" href='/equipment/new'>Novo</Button>
          </div>
        </div>
        <div className="flex w-full h-full rounded-lg gap-2">
          <div className="w-full h-full rounded-lg bg-lightGray p-4 border border-white">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}