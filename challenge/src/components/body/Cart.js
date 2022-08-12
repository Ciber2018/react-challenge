import React, { useState } from 'react'
import { Box, Typography,List,ListItem,Stack,ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { highTitle } from '../custom_style/CustomTheme';
import Pack from './Pack';
import Simple from './Simple';
import Other from './Other';

const cartStyles = makeStyles({
    cartInfo:{
        position: 'absolute',
        width: '139px',
        height: '24px',
        left: '92px',
        top: '184px',
        fontFamily: 'Open Sans',
       // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '24px',
        color: '#091625',
    },
    mustLike:{
      position: 'absolute',
      width: '228px',
      height: '16px',
      left: '92px',
      top: '869px'
    }
});



function Cart({data}) {
 
  const styles = cartStyles(); 

  const listItems = data.map((value,index)=>(
    value.pack.length > 0 
                       ?
                        <>
                        <ListItem>
                          <Pack products={value} id={value.id.toString()}/>
                        </ListItem>
                        <Box style={{height:'227px'}}></Box>
                        </>
                       
                      
                       :
                        <>
                        <ListItem>
                        <Simple products={value} id={value.id.toString()}/>
                        </ListItem>
                        <Box style={{height:'140px'}}></Box>
                        </>
                       
                       
    ));
  
  return (
    <>
    <Stack direction='row' spacing={1} className={styles.cartInfo}>
      <ThemeProvider theme={highTitle}>
       <Typography>Your cart</Typography>
      </ThemeProvider>
      <Typography>({data.length})</Typography>
    </Stack>
   
    <List>
      {
        listItems
      }
    </List>

    <ThemeProvider theme={highTitle}>
      <Typography className={styles.mustLike}>You migth also like</Typography>
    </ThemeProvider>

    
    <Other></Other>
   
   

   

    </>
  )
}

export default Cart