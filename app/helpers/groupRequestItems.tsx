/* eslint-disable @typescript-eslint/no-explicit-any */

export function groupData (result: { data: any[] }) {
  return result.data.reduce((accum: any[], curr: any, i: number) => {
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
}