'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

type Item = {
  id: string;
  nome: string;
  quantidade: number;
}

export async function registerRequest (items: Item[]) {
  const ItemsSchema = z.array(z.object({
    id: z.coerce.number(),
    amount: z.number()
  }))
  
  const mappedItems = items.map(item => ({
    id: Number(item.id),
    name: item.nome,
    amount: item.quantidade
  }))
  const result = ItemsSchema.safeParse(mappedItems)
  
  if (!result.success) {
    return {
      success: false,
      message: 'Introduza correctamento os dados'
    }
  }
  
  try {
    const cookieStore = await cookies()
    const user = JSON.parse(cookieStore.get('user.data')?.value ?? '')
    
    const response = await fetch(`${process.env.SERVER}/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: user.id,
        items: mappedItems
      })
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: 'Algo correu mal ao cadastrar a solicitação'
    }
  }
}