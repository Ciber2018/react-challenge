import React from 'react'
import { AppBar,Typography,Toolbar,InputBase,IconButton,InputAdornment,Box,Stack } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Search } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { fontFamily } from '@mui/system';

const nabvarStyles = makeStyles({
  navbar:{
    position: 'absolute',
    width: '172px',
    height:'48px',
    left: '92px',
    top: '20px',
    background: '#CED0D3',
    
  },
  logoText:{
    position:'absolute',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400px',
    fontSize: '13px',
    lineHeight: '16px',
    textAlign:'center',
    textTransform: 'uppercase',
    left: '65px',
    top:'12px',
    color: '#848A92',
    
  },
  userIcon:{
    position: 'absolute',
   // left: '25%',
    right: '55%',
    top: '41.17%',
    //bottom: '45.83%',
    color:'white'
  },
  
  signInText:{
  position:'absolute',
    top: '40.17%',
    //right: '55%',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
   /* fontWeight: '400',
    fontSize: '10px',
    lineHeight: '16px',
    /*width: '47px',*/
   // height: '16px',
    
   
  }
});

export default function Navbar() {
  const navbarClasses = nabvarStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static' sx={{ background: '#2E3B55',position: 'absolute',width: {xs:'100%',sm:'100%',md:'100%',lg:'100%'}, height: '88px',left: '0px',top: '0px'}}>
        <Toolbar>
        
          <Box className={navbarClasses.navbar} >
            <Typography className={navbarClasses.logoText} >LOGO</Typography>
          </Box>

         <InputBase startAdornment={
          <InputAdornment position="end">
            <Search  />
          </InputAdornment>
        } sx={{background: '#FFFFFF',borderRadius: '20px',position: 'absolute',width:'696px',height: '40px',left: '332px',top: '24px'}} placeholder='Search Products'>

      </InputBase>
         
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Stack direction='row' >
            
            <IconButton >
            <PersonOutlineOutlinedIcon  className={navbarClasses.userIcon}></PersonOutlineOutlinedIcon>
          </IconButton>
          <Typography className={navbarClasses.signInText}>Sign in</Typography>
          </Stack>
            </Box>
          
          
            <Box>
          <Stack direction='row' >
            
            <IconButton >
            <PersonOutlineOutlinedIcon  ></PersonOutlineOutlinedIcon>
          </IconButton>
          <Typography >Sign in</Typography>
          </Stack>
            </Box>
               

          </Toolbar>
    </AppBar>
    </Box>
  )
}
