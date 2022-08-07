import React from 'react'
import { AppBar,Typography,Toolbar,Input,InputBase,IconButton,InputAdornment } from '@mui/material';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Search } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar position='static' style={{ background: '#2E3B55',position: 'absolute',width: '1600px', height: '88px',left: '0px',top: '0px'}}>
        <Toolbar>
         <Typography variant="h6" >
            AppBar
          </Typography>
         
          <InputBase startAdornment={
          <InputAdornment position="start">
            <Search  />
          </InputAdornment>
        } style={{background: '#FFFFFF',borderRadius: '20px',position: 'absolute',width: '696px',height: '40px',left: '332px',top: '24px'}} placeholder='Search Products'></InputBase>
          
          <IconButton size='large'>
            <PersonOutlineOutlinedIcon style={{color: 'white'}}></PersonOutlineOutlinedIcon>
          </IconButton>

         

          </Toolbar>
    </AppBar>
  )
}
