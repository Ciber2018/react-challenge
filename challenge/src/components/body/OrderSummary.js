import React from 'react';
import { Box,Typography,Divider,Button,createTheme,ThemeProvider} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { btnShoppingButton,btnProceedButton, highTitle } from '../custom_style/CustomTheme';

const rSection = makeStyles({
    title:{
        position: 'absolute',
        width: '192px',
        height: '24px',
        left: '1172px',
        top: '184px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '24px',
        color: '#091625'
    },
    subTitle:{
        position: 'absolute',
        width: '127px',
        height: '16px',
        left: '1172px',
        top: '232px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '16px',
        color: '#6B737C'
    },
    number:{
        position: 'absolute',
        width: '10px',
        height: '16px',
        left: '1498px',
        top: '232px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '16px',
        textAlign: 'right',
        color: '#6B737C'
    },
    divider:{
        position: 'absolute',
        width: '336px',
        height: '1px',
        left: '1172px',
        top: '272px',
        background: '#E6E8E9',
    },
    total:{
        position: 'absolute',
        width: '49px',
        height: '16px',
        left: '1172px',
        top:' 297px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '16px',
        color: '#091625'
    },
    value:{
        position: 'absolute',
        width: '110px',
        height: '16px',
        left: '1398px',
        top: '297px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '16px',
        textAlign: 'right',
        color: '#091625'
    },
    btnProceed:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 24px',
        gap: '10px',
        position: 'absolute',
        width: '336px',
        height: '48px',
        left: '1172px',
        top: '345px',
        background: '#3A4451',
        borderRadius: '8px'
    }
});


function OrderSummary({data}) {
  const rightSection = rSection();  
  return (
    <Box>
        <ThemeProvider theme={highTitle}>
          <Typography className={rightSection.title}>Order Summary</Typography>   
        </ThemeProvider>
       
        <Typography className={rightSection.subTitle}>Number of items</Typography> 
        <Typography className={rightSection.number}>{data.length}</Typography> 
        <Divider className={rightSection.divider}></Divider>
        <Typography className={rightSection.total}>Total: </Typography>
        <ThemeProvider theme={highTitle}>
           <Typography className={rightSection.value}>$3560.00</Typography>
        </ThemeProvider>
       
        <ThemeProvider theme={btnProceedButton}>
            <Button >Proceed to Checkout</Button>
        </ThemeProvider>
        <ThemeProvider theme={btnShoppingButton}>
            <Button >Continue shopping</Button>
        </ThemeProvider>
    </Box>
  )
}

export default OrderSummary