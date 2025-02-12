'use server'

import { z } from 'zod'

type State = {
  success: boolean,
  message: string
}

export async function createEquipment (prevState: State, data: FormData) {
  const equipment = {
    name: data.get('name'),
    category: data.get('category'),
    amount: Number(data.get('amount')),
    description: data.get('description')
  }

  const Equipment = z.object({
    name: z.string(),
    category: z.string(),
    amount: z.number(),
    description: z.string()
  })

  const parsed = Equipment.safeParse(equipment)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Introduza correctamento os dados'
    }
  }
  
  try {
    const response = await fetch('http://localhost:5050/equipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(equipment)
    })
    const result = await response.json()

    return result
  } catch (error) {
    console.log(error)
  }
}