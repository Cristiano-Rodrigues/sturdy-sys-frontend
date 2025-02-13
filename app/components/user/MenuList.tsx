import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

export function MenuList () {
  return (
    <Box sx={{ width: '100%' }}>
      <nav aria-label="main menu">
        <List>
          <ListItem disablePadding>
            <ListItemButton href='/dashboard'>
              <ListItemIcon>
                <InsertDriveFileOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Solicitações" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href='/dashboard/rate'>
              <ListItemIcon>
                <StarBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Avaliações" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
