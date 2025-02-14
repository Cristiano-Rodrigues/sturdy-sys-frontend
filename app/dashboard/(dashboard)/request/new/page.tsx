import { Header } from '@/app/components/local/Header'
import { ItemsForm } from '@/app/components/user/ItemsForm'

export default async function Home() {
  let result = { data: [] }

  try {
    const response = await fetch(`${process.env.SERVER}/equipment`)
    result = await response.json()
  } catch (error) {
    console.error(error)
  }

  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Nova solicitação' />
        
      <div className='flex flex-col gap-2 p-4 h-full bg-lightGray rounded-lg'>
        <ItemsForm
          equipments={result.data}
        />
      </div>
    </div>
  );
}