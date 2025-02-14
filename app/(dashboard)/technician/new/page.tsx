'use client'

import { Header } from '@/app/components/local/Header'
import Button from '@mui/material/Button'
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { createTechnician } from '@/app/server-actions/technician/new'
import { useActionState } from 'react'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'

const initialState = {
  state: false,
  message: '',
  errors: []
}

export default function Home() {
  const [state, formAction, pending] = useActionState(createTechnician, initialState)
  
  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Novo Equipamento' />

      <div className="flex flex-col gap-2 w-full p-4 bg-lightGray rounded-lg">
        <h2 className='mb-2'>Adicionar técnico</h2>
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
              <TextField fullWidth label="Especialidade" id="spetialty" name='category' />
            </div>
          </Box>
          <div className='flex gap-2'>
            <Button variant="contained" type='submit' loading={pending}>Adicionar</Button>
            <Button variant="outlined" href='/technician'>Voltar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
