import { Header } from '@/app/components/local/Header'
import { NumberInput } from '@/app/components/local/NumberInput'
import Button from '@mui/material/Button'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div className='flex flex-col h-full gap-2'>
      <Header title='Novo Equipamento' />

      <div className="flex flex-col gap-2 w-full p-4 bg-lightGray rounded-lg">
        <h2 className='mb-2'>Adicionar Equipamento</h2>
        <Box sx={{ width: 600, maxWidth: '100%' }}>
          <div className='flex flex-col gap-2'>
            <TextField fullWidth label="Nome" id="fullWidth" />
            <TextField fullWidth label="Categoria" id="fullWidth" />
            <NumberInput name='Quantidade disponível' defaultValue={1} />
            <textarea placeholder='Adicione uma descrição' className='p-2 rounded-md border'></textarea>
          </div>
        </Box>
        <div className='flex gap-2'>
          <Button variant="contained">Adicionar</Button>
          <Button variant="outlined" href='/equipment'>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
