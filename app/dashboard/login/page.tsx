'use client'

import { Alert, Button, TextField } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'
import { useActionState } from "react"
import { fetchUser } from "../../server-actions/auth/login"

const initialState = {
  success: false,
  message: ''
}

export default function Home() {
  const [state, formAction, pending] = useActionState(fetchUser, initialState)
  
  return (
    <div className="flex justify-center h-screen w-full p-2 pt-8">
      <form action={formAction} className="flex flex-col w-[400px] gap-2 p-4 rounded-lg bg-lightGray h-fit">
        <h1>Login</h1>
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
        <p>Introduza os dados requisitados abaixo</p>
        <div className="flex gap-2 flex-col my-4">
          <TextField label="Email" id="email" name='email' />
          <TextField label="Password" id="password" name='password' type="password"/>
        </div>
        <Button variant="contained" type='submit' className="w-fit" loading={pending}>Login</Button>
      </form>
    </div>
  );
}