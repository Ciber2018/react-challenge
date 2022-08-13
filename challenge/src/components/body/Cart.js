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
    },
    boxInfo:{
      position: 'absolute',
     // width: '336px',
     // height: '336px',
      left: '92px',
      top: '909px',
     // background: '#E6E8E9',
  },
  listStyle:{
    top: '248px'
  }
});



function Cart({data}) {
 
  const styles = cartStyles(); 

  const items = (arrayData) => {
    let auxData =  arrayData.map((value)=>{
      return  value.pack.length > 0 
                        ?
                        <div key={value.id}>
                        <ListItem>
                          <Pack products={value} id={value.id.toString()}/>
                        </ListItem>
                        <Box style={{height:'190px'}}></Box>
                        </div>
                                              
                        :
                        <div key={value.id}>
                        <ListItem>
                        <Simple products={value} id={value.id.toString()}/>
                        </ListItem>
                        <Box style={{height:'140px'}}></Box>
                        </div>
    });

    return auxData;
  };

  /*const listItems = data.map((value,index)=>{
  return  value.pack.length > 0 
                       ?
                       <div key={value.id}>
                        <ListItem>
                          <Pack products={value} id={value.id.toString()}/>
                        </ListItem>
                        <Box style={{height:'227px'}}></Box>
                        </div>
                                             
                       :
                        <div key={value.id}>
                        <ListItem>
                        <Simple products={value} id={value.id.toString()}/>
                        </ListItem>
                        <Box style={{height:'140px'}}></Box>
                        </div>
      
                       
  });*/
  console.log(items(data));
  return (
    <>
    
    <Stack direction='row' spacing={1} className={styles.cartInfo}>
      <ThemeProvider theme={highTitle}>
       <Typography>Your cart</Typography>
      </ThemeProvider>
      <Typography>({data.length})</Typography>
    </Stack>

   
   <List className={styles.listStyle}>
    {
      items(data)
    }
   </List>
    
   
   
   
     
    
  
    

    <ThemeProvider theme={highTitle}>
      <Typography className={styles.mustLike}>You migth also like</Typography>
    </ThemeProvider>

    <Stack direction='row' spacing={2} className={styles.boxInfo}>
    <Other></Other>
    <Other></Other>
    <Other></Other>
    <Other></Other>
    </Stack>
    
   
   

   

    </>
  )
}



export default Cart