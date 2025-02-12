'use client'

import { Header } from '@/app/components/local/Header'
import { NumberInput } from '@/app/components/local/NumberInput'
import Button from '@mui/material/Button'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createEquipment } from '@/app/server-actions/equipment/new';
import { useActionState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const initialState = {
  state: false,
  message: '',
  errors: []
}

export default function Home() {
  const [state, formAction, pending] = useActionState(createEquipment, initialState)
  
  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Novo Equipamento' />

      <div className="flex flex-col gap-2 w-full p-4 bg-lightGray rounded-lg">
        <h2 className='mb-2'>Adicionar Equipamento</h2>
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
        <form action={formAction} className='flex flex-col gap-2'>
          <Box sx={{ width: 600, maxWidth: '100%' }}>
            <div className='flex flex-col gap-2'>
              <TextField fullWidth label="Nome" id="name" name='name' />
              <TextField fullWidth label="Categoria" id="category" name='category' />
              <NumberInput name='Quantidade disponível' defaultValue={1} id='amount' htmlName='amount' />
              <textarea id='description' name='description' placeholder='Adicione uma descrição' className='p-2 rounded-md border'></textarea>
            </div>
          </Box>
          <div className='flex gap-2'>
            <Button variant="contained" type='submit' loading={pending}>Adicionar</Button>
            <Button variant="outlined" href='/equipment'>Voltar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
