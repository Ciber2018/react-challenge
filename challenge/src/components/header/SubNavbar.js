import React from 'react';
import { Toolbar,Typography,Stack,Box,Link} from '@mui/material';
import { makeStyles } from '@mui/styles';


const subBarStyles = makeStyles({
   title1:{
    position: 'absolute',
    width: '94px',
    height: '16px',
    left: '92px',
    color: '#535C67',
    fontFamily:'Open Sans',
    fontStyle:'normal'
   },
   title2:{
    position: 'absolute',
    width: '71px',
    height: '16px',
    left: '200px',
    color: '#535C67',
    fontFamily:'Open Sans',
    fontStyle:'normal'
   },
   title3:{
    position: 'absolute',
    width: '73px',
    height: '16px',
    left: '295px',
    color: '#535C67',
    fontFamily:'Open Sans',
    fontStyle:'normal'
   } ,
   title4:{
    position: 'absolute',
    width: '55px',
    height: '16px',
    left: '403px',
    color: '#535C67',
    fontFamily:'Open Sans',
    fontStyle:'normal'
   } ,
   title5:{
    position: 'absolute',
    width: '77px',
    height: '16px',
    left: '482px',
    color: '#535C67',
    fontFamily:'Open Sans',
    fontStyle:'normal'
   },
   title6:{
    position: 'absolute',
    width: '73px',
    height: '16px',
    left: '583px',
    color: '#535C67',
    fontFamily:'Open Sans',
    fontStyle:'normal'
   }      
});

function SubNavbar() {
  const customStyle = subBarStyles();  

  return (
    <Box sx={{flexGrow: 1}}>
    <Toolbar sx={{position: 'absolute',width: '100%',height: '64px',left: '0px',top: '88px',background: '#E6E8E9'}}>
      
       <Typography className={customStyle.title1}>All products</Typography>  
       <Typography className={customStyle.title2}>Packaging</Typography>  
       <Typography className={customStyle.title3}>Drinkware</Typography>  
       <Typography className={customStyle.title4}>Apparel</Typography>  
       <Typography className={customStyle.title5}>Notebooks</Typography>  
       <Typography className={customStyle.title6}>Backpacks</Typography>  
      
      


    </Toolbar>
    </Box>
  )
}

export default SubNavbar