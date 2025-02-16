/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { DataTable } from '@/app/components/local/Table'
import { Header } from '@/app/components/local/Header'
import GridViewIcon from '@mui/icons-material/GridView'
import { GridColDef } from '@mui/x-data-grid'

export default async function Home() {
  let result = { data: [] }

  try {
    const response = await fetch(`${process.env.SERVER}/technician`)
    result = await response.json()
  } catch (error) {
    console.error(error)
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'especialidade', headerName: 'Especialidade', width: 130 },
    { field: 'disponibilidade', headerName: 'Disponibilidade', width: 130 },
  ];

  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Técnicos' />
        
      <div className='flex flex-col gap-2 h-full'>
        <div className="flex w-full h-[70px] bg-lightGray rounded-lg p-3 gap-2 justify-between">
          <TextField id="standard-basic" label="Pesquisar" variant="standard" />
          <div className="flex gap-2">
            <Button variant="text">
              <GridViewIcon />
            </Button>
            <Button variant="contained" href='/technician/new'>Novo</Button>
          </div>
        </div>
        <div className="flex w-full h-full rounded-lg gap-2">
          <div className="w-full h-full rounded-lg bg-lightGray p-4 border border-white">
            <DataTable rows={result.data.map((row: any) => ({
              ...row,
              disponibilidade: row.disponibilidade == 0 ? 'Em serviço' : 'Disponível'
            }))} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}