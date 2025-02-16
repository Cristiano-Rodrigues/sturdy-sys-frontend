'use server'

export async function markAsAnswered (requestId: number) {
  try {
    const response = await fetch(`${process.env.SERVER}/request`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ requestId })
    })
    const result = await response.json()

    return result
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: 'Erro na operação'
    }
  }
}

export async function generateReceipt () {

}