import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Image from 'next/image'
import { MenuList } from '../local/MenuList'
import { cookies } from 'next/headers'

export async function Sidebar () {
  const cookieStore = await cookies()
  const user = JSON.parse(cookieStore.get('user.data')?.value ?? '{}')

  return (
    <div className="flex flex-col w-[225px] h-full bg-lightGray rounded-lg p-2 gap-2">
      <div className="w-full rounded-lg p-2 flex gap-2 items-center bg-white">
        <Image
          src='/logo.png'
          alt='Logo'
          width={46}
          height={50}
        />
        <p className='text-lg font-bold text-[#336FC1]'>Sturdy Sys</p>
      </div>
      <div className="w-full h-[calc(100%-137px)] rounded-lg">
        <MenuList />
      </div>
      <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Definições" />
          </ListItemButton>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={user.email}
          />
        </ListItem>
      </List>
      </div>
    </div>
  );
}
