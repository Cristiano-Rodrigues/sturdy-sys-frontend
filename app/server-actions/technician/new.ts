'use server'

import { z } from 'zod'

type State = {
  success: boolean,
  message: string
}

export async function createTechnician (prevState: State, data: FormData) {
  const technician = {
    name: data.get('name'),
    spetialty: data.get('category')
  }

  const Technician = z.object({
    name: z.string(),
    spetialty: z.string()
  })

  const parsed = Technician.safeParse(technician)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Introduza correctamento os dados'
    }
  }
  
  try {
    const response = await fetch(`${process.env.SERVER}/technician`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(technician)
    })
    const result = await response.json()

    return result
  } catch (error) {
    console.error(error)
  }
}