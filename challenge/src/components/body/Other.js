import React from 'react';
import { Box, Typography,List,ListItem,Stack,ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { other,other2,other3 } from '../custom_style/CustomTheme';


const otherStyles = makeStyles({
    boxInfo:{
        width: '336px',
        height: '336px',
        background: '#E6E8E9',
    },
    description:{
      position: 'absolute',
      top:'355px'
    },
    
    priceText:{
        position: 'absolute',
       
        top: '380px'
      },
    miniumText:{
        /*position: 'absolute',*/
        /*width: '87px',
        height: '16px',*/
       // left: '1251px',
       // top: '380px'
       top: '380px',
      left: '55px',
      textAlign:'right'
    
      }
});


function Other() {
  const styles = otherStyles();  
  return (
    <Box style={{width:'336px,height:336px'}}>

  
    <Box className={styles.boxInfo}>

    </Box>
    <ThemeProvider theme={other}>
    <Typography className={styles.description}>Unisex Short Sleeve T-Shirt</Typography>
    </ThemeProvider>
   
   {/* <ThemeProvider theme={other2}>
    <Typography className={styles.priceText}>$10 - $24</Typography>
    </ThemeProvider>
    
    <ThemeProvider theme={other3}>
    <Typography className={styles.miniumText}>Minimum: 24</Typography>
  </ThemeProvider>*/}
   <Stack direction='row' spacing={10.5} style={{top:'380px', position:'absolute'}}>
   <ThemeProvider theme={other2}>
   <Typography >$10 - $24</Typography>
   </ThemeProvider>
   <ThemeProvider theme={other3}>
   <Typography >Minimum: 24</Typography>
   </ThemeProvider>
   </Stack>



    
  

    
    
    </Box>
  )
}

export default Other