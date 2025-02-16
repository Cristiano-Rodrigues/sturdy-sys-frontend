'use client'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add'
import { useActionState, useState } from "react"
import { Button } from '@mui/material'
import { registerRequest } from '@/app/server-actions/user/request/new'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'

type Equipment = {
  id: string;
  nome: string;
  categoria: string;
  quantidade_stock: string | number;
  descricao?: string
  imagem?: string
}

type Item = {
  id: string;
  nome: string;
  quantidade: number;
}

type State = {
  success: boolean,
  message: string
}

const initialState: State = {
  success: false,
  message: ''
}

export function ItemsForm ({
  equipments
}: {
  equipments: Equipment[]
}) {
  const [{ id, nome }] = equipments
  const [currItem, setCurrItem] = useState<Item>({
    id,
    nome,
    quantidade: 1
  })
  const [items, setItems] = useState<Item[]>([])

  const registerRequestWithItems = registerRequest.bind(null, items)
  const [state, formAction, pending] = useActionState(registerRequestWithItems, initialState)

  return (
    <form action={formAction} className="flex flex-col gap-y-6 w-full rounded-lg">
      <p className="font-bold">Adicione itens à solicitação</p>
      {
        state.message && (state.success ? (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            { state.message }
          </Alert>
        ) : (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
            { state.message }
          </Alert>
        ))
      }
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="product">
          Item <span className="text-red-600">*</span>
        </label>
        <select
          id="product" className="p-3 bg-white rounded"
          defaultValue={currItem.nome}
          onChange={e => {
            setCurrItem(currItem => ({
              ...currItem,
              id: e.target.value,
              nome: e.target.options[e.target.selectedIndex].text
            }))
          }}
        >
          {
            equipments.map(({ id, nome }) => (
              <option key={id} value={id}>{ nome }</option>
            ))
          }
        </select>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="amount">
          Quantidade <span className="text-red-600">*</span>
        </label>
        <div className="flex gap-4 w-full">
          <input
            type="number"
            min={1} id="amount" placeholder="Quantidade"
            className="w-full p-3 bg-lightestGray rounded"
            value={currItem.quantidade}
            onChange={e => setCurrItem(currItem => ({
              ...currItem,
              quantidade: Number(e.target.value)
            }))}
          />
          <button
            type="button"
            className="px-4 bg-blue-600 text-white rounded-lg"
            onClick={() => {
              setItems(items => items.concat(currItem))
            }}
          >
            <AddIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col border rounded-lg">
        <div className="grid grid-cols-3 px-6 py-4 border-b font-bold">
          <p>Nome do item</p>
          <p>Quantidade</p>
          <p>Ação</p>
        </div>

        <div className="flex flex-col">
          {
            items.map(({ id, nome, quantidade }, i) => (
              <div key={i} className="grid grid-cols-3 px-6 p-4 border-b">
                <p className="flex items-center">{ nome }</p>
                <p className="flex items-center">{ quantidade }</p>
                <button
                  type="button"
                  className="flex items-center gap-1 w-min p-2 bg-red-100 text-red-500 rounded-lg"
                  onClick={() => {
                    setItems(items => (
                      items.filter(item => item.id != id)
                    ))
                  }}
                >
                  <DeleteOutlineIcon className="w-4 h-4" />
                  <p>Remover</p>
                </button>
              </div>
            ))
          }
        </div>

        <div className="px-6 py-4 font-bold">
          <p>
            Total de itens: <span className="font-normal">{
              items.reduce((total, currItem) => total + currItem.quantidade, 0)
            }</span>
          </p>
        </div>
      </div>
      <div className='flex gap-2'>
        <Button variant="contained" type='submit' className='w-fit' loading={pending}>Solicitar</Button>
        <Button variant="outlined" className='w-fit' href='/dashboard'>Voltar</Button>
      </div>
    </form>
  )
}