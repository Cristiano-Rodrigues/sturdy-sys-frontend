import { Header } from '@/app/components/local/Header'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import PersonIcon from '@mui/icons-material/Person'
import NoteIcon from '@mui/icons-material/Note'
import { StockList } from '../components/local/StockAlertList'
import { BusyTechnicianList } from '../components/local/BusyTechnicianList'
import { cookies } from 'next/headers'
import { groupData } from '../helpers/groupRequestItems'
import { CompressedTable } from '../components/local/CompressedRequestTable'

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
  
    const groupedData = groupData(result)

  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Dashboard' />
        
      <div className='flex flex-col p-4 rounded-lg gap-2 bg-lightGray'>
        <p>Dados Gerais</p>
        <div className='flex gap-4'>
          <div className='bg-white w-[200px] h-[100px] rounded-2xl p-4 flex gap-2 shadow-lg items-center'>
            <div className='p-2 rounded-full bg-blue-600 bg-opacity-20'>
              <PrecisionManufacturingIcon className='text-blue-600 text-3xl'/>
            </div>
            <div className='flex flex-col'>
              <p className='font-bold text-3xl'>6</p>
              <p>Equipamentos</p>
            </div>
          </div>
          <div className='bg-white w-[200px] h-[100px] rounded-2xl p-4 flex gap-2 shadow-lg items-center'>
            <div className='p-2 rounded-full bg-blue-600 bg-opacity-20'>
              <PersonIcon className='text-blue-600 text-3xl'/>
            </div>
            <div className='flex flex-col'>
              <p className='font-bold text-3xl'>10</p>
              <p>Técnicos</p>
            </div>
          </div>
          <div className='bg-white w-[200px] h-[100px] rounded-2xl p-4 flex gap-2 shadow-lg items-center'>
            <div className='p-2 rounded-full bg-blue-600 bg-opacity-20'>
              <NoteIcon className='text-blue-600 text-3xl'/>
            </div>
            <div className='flex flex-col'>
              <p className='font-bold text-3xl'>7</p>
              <p>Solicitações</p>
            </div>
          </div>
          <div className='bg-white w-[200px] h-[100px] rounded-2xl p-4 flex gap-2 shadow-lg items-center'>
            <div className='p-2 rounded-full bg-blue-600 bg-opacity-20'>
              <NoteIcon className='text-blue-600 text-3xl'/>
            </div>
            <div className='flex flex-col gap-0'>
              <p className='font-bold text-3xl'>6</p>
              <p>Solicitações em espera</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-2 rounded-lg'>
        <div className='flex flex-col gap-2 bg-lightGray p-4 rounded-lg w-3/5'>
          <p>Técnicos ocupados</p>
          <div className='w-full'>
            <BusyTechnicianList />
          </div>
        </div>
        <div className='flex flex-col gap-2 bg-lightGray p-4 rounded-lg w-2/5'>
          <p>Alertas de Stock</p>
          <div className='w-full'>
            <StockList />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 p-4 bg-lightGray rounded-lg'>
        <p>Solicitações pendentes</p>
        <CompressedTable rows={groupedData} user={user} />
      </div>
    </div>
  );
}