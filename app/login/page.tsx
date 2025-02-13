import { Button, TextField } from "@mui/material";

export default async function Home() {
  return (
    <div className="flex justify-center h-screen w-full p-2 pt-8">
      <div className="flex flex-col w-[400px] gap-2 p-4 rounded-lg bg-lightGray h-fit">
        <h1>Login</h1>
        <p>Introduza os dados requisitados abaixo</p>
        <div className="flex gap-2 flex-col my-4">
          <TextField label="Email" id="email" name='email' />
          <TextField label="Password" id="password" name='password' type="password"/>
        </div>
        <Button variant="contained" type='submit' className="w-fit">Login</Button>
      </div>
    </div>
  );
}