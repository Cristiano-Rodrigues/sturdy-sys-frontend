import { CollapsibleTable } from '@/app/components/local/CollapsibleTable'
import { Header } from '@/app/components/local/Header'
import { groupData } from '@/app/helpers/groupRequestItems'
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

  const groupedData = groupData(result)

  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Solicitações' />
        
      <div className='flex flex-col gap-2 h-full'>
        <div className="flex w-full h-full rounded-lg gap-2">
          <div className="w-full h-full rounded-lg bg-lightGray p-4 border border-white">
            <CollapsibleTable rows={groupedData} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}