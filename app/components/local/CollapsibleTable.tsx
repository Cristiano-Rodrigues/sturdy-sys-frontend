/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button'
import { markAsAnswered, generateReceipt } from '@/app/server-actions/service/service';
import { useRouter } from 'next/navigation'

function Row(props: { row: any, user: any }) {
  const { row, user } = props
  const [open, setOpen] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const router = useRouter()

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.data}</TableCell>
        <TableCell align="right">
          { row.estado }
        </TableCell>
        <TableCell align="right">{row.solicitante}</TableCell>
        {
          user.permission == 2 && (
            row.estado == 'in progress' ? (
              <TableCell align="right">
                <Button variant='outlined' onClick={async () => {
                  setPending(true)
                  await markAsAnswered(row.id)
                  setPending(false)
                  router.push(location.pathname)
                }}>Marcar como atendido</Button>
              </TableCell>
            ) : (row.estado == 'done' ? (
              <TableCell align="right">
                <Button variant='outlined' onClick={generateReceipt} loading={pending}>Gerar comprovante</Button>
              </TableCell>
            ) : '')
          )
        }
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Itens
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className='font-bold'>Nome do equipamento</TableCell>
                    <TableCell className='font-bold'>Quantidade solicitada</TableCell>
                    <TableCell align="right" className='font-bold'>Categoria</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((item: any) => (
                    <TableRow key={item.nome}>
                      <TableCell component="th" scope="row">
                        {item.nome}
                      </TableCell>
                      <TableCell>{item.quantidade}</TableCell>
                      <TableCell align="right">{item.categoria}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function CollapsibleTable({ rows, user }: { rows: any[], user: any }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Solicitante</TableCell>
            <TableCell align="right">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={i} row={row} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
