'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type State = {
  success: boolean,
  message: string
}

export async function fetchUser (prevState: State, data: FormData) {
  const auth = {
    email: data.get('email'),
    password: data.get('password')
  }

  const Credentials = z.object({
    email: z.string().email(),
    password: z.string()
  })

  const parsed = Credentials.safeParse(auth)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Introduza correctamento os dados'
    }
  }
  
  let result
  try {
    const response = await fetch(`${process.env.SERVER}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(auth)
    })
    result = await response.json()

    if (!result.success) {
      return {
        success: false,
        message: 'Credenciais incorrectas'
      }
    }

    const cookieStore = await cookies()
    cookieStore.set('user.data', JSON.stringify(result.user))
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: 'Algo correu mal ao fazer login'
    }
  }

  if (result.user.permission == 2) {
    redirect('/')
  } else {
    redirect('/dashboard')
  }
}