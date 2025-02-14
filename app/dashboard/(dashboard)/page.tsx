/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { CollapsibleTable } from '@/app/components/local/CollapsibleTable'
import { Header } from '@/app/components/local/Header'
import GridViewIcon from '@mui/icons-material/GridView'
import { cookies } from 'next/headers'

export default async function Home() {
  let result = { data: [] }, user
  const cookieStore = await cookies()
  
  try {
    user = JSON.parse(cookieStore.get('user.data')?.value ?? '')
    const response = await fetch(`${process.env.SERVER}/request`)
    result = await response.json()
  } catch (error) {
    console.error(error)
  }

  const groupedData = result.data.reduce((accum: any[], curr: any, i: number) => {
    if (i > 0 && accum[accum.length - 1].id == curr.id) {
      accum[accum.length - 1].items.push({
        nome: curr.nome,
        quantidade: curr.quantidade,
        categoria: curr.categoria
      })
    } else {
      accum.push({
        id: curr.id,
        data: curr.data.split('T')[0],
        estado: curr.estado,
        solicitante: curr.solicitante,
        items: [{
          nome: curr.nome,
          quantidade: curr.quantidade,
          categoria: curr.categoria
        }]
      })
    }
    return accum
  }, [])

  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Solicitações' />
        
      <div className='flex flex-col gap-2 h-full'>
        <div className="flex w-full h-[70px] bg-lightGray rounded-lg p-3 gap-2 justify-between">
          <TextField id="standard-basic" label="Pesquisar" variant="standard" />
          <div className="flex gap-2">
            <Button variant="text">
              <GridViewIcon />
            </Button>
            <Button variant="contained" href='/dashboard/request/new'>Novo</Button>
          </div>
        </div>
        <div className="flex w-full h-full rounded-lg gap-2">
          <div className="w-full h-full rounded-lg bg-lightGray p-4 border border-white">
            <CollapsibleTable rows={groupedData} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}