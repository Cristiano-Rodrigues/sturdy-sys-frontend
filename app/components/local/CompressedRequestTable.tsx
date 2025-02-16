/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import Paper from '@mui/material/Paper'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const paginationModel = { page: 0, pageSize: 5 }

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'solicitante', headerName: 'Solicitante', width: 250 },
  {
    field: 'data',
    headerName: 'Date',
    width: 150,
  },
  { field: 'estado', headerName: 'Estado', width: 130 }
]

export function CompressedTable ({ rows }: { rows: any[] }) {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  )
}
