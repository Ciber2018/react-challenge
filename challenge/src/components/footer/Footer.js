import React from 'react';
import {makeStyles} from '@mui/styles';
import { Typography,Box,Select,MenuItem,FormControl, Stack,ThemeProvider,Divider,Link } from '@mui/material';

const footerStyle = makeStyles({
    foot:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        //top: '0%',
        bottom: '0%',

        

        background: '#E6E8E9'
    }
});

function Footer() {
    const styles = footerStyle();
  return (
    <>
        <Box className={styles.foot}>

        </Box>
    
    </>
  )
}

export default Footer