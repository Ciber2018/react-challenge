import React from 'react';
import { Box, Typography,List,ListItem,Stack,ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { other,other2,other3 } from '../custom_style/CustomTheme';


const otherStyles = makeStyles({
    boxInfo:{
        position: 'absolute',
        width: '336px',
        height: '336px',
        left: '92px',
        top: '909px',
        background: '#E6E8E9',
    },
    description:{
      position: 'absolute',
      width: '215px',
      height: '16px',
      left: '92px',
      top: '1261px'
    },
    priceText:{
        position: 'absolute',
        width: '65px',
        height: '16px',
        left: '92px',
        top: '1287px'
      },
    miniumText:{
        position: 'absolute',
        width: '87px',
        height: '16px',
        left: '251px',
        top: '1287px'
      }
});


function Other() {
  const styles = otherStyles();  
  return (
    <>
    <Box className={styles.boxInfo}>

    </Box>
    <ThemeProvider theme={other}>
    <Typography className={styles.description}>Unisex Short Sleeve T-Shirt</Typography>
    </ThemeProvider>

    <ThemeProvider theme={other2}>
    <Typography className={styles.priceText}>$10 - $24</Typography>
    </ThemeProvider>
    
    <ThemeProvider theme={other3}>
    <Typography className={styles.miniumText}>Minimum: 24</Typography>
    </ThemeProvider>
    
    
    </>
  )
}

export default Other