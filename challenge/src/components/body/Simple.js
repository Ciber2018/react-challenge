import {React,useState} from 'react'
import { Typography,Box,Select,MenuItem,FormControl, ThemeProvider,Divider, Link } from '@mui/material';
import {makeStyles} from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { smallText,mediumText,smallestText,betweenText } from '../custom_style/CustomTheme';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const productStyle = makeStyles({
  
    imageBox:{
      position: 'absolute',
      width: '120px',
      height: '120px',
      left: '89px',
      //top: '218px',
      background: '#E6E8E9'
    },
    titleText:{
      position: 'absolute',
      width: '171px',
      height: '24px',
      left: '228px',
      top: '-40px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '24px',
      color: '#091625'
    },
    quantityText:{
      position: 'absolute',
      width: '95px',
      height: '16px',
      left: '228px',
      top: '-18px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '16px',
      color: '#091625'
    },
    selectSimpleItem:{
      position: 'absolute',
      width: '42.5px',
      height: '16px',
      left: '280px',
      top: '-22px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '16px',
      color: '#091625'
    },
    selectIcon:{
      position:'absolute',
      left: '40.44%',
      cursor:'pointer'
      
    },
    
    dropdownOpen: {
      position:'absolute',
      left: '40.44%',
      cursor:'pointer',
      transform: "rotate(180deg)",
    },

    dropdownClosed: {
      position:'absolute',
      left: '40.44%',
      cursor:'pointer',
      transform: "rotate(0)",
    },
    subProduct:{
      position: 'absolute',
      width: '305px',
      height: '72px',
      left: '228px',
     // top: '316px'
    },
    subProductText:{
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '24px',
      color: '#091625'
    },
    price:{
        position: 'absolute',
        width: '57px',
        height: '16px',
        left: '1091px',
        top: '-40px'
    },
    totalPrice:{
        position: 'absolute',
        width: '136px',
        height: '16px',
        left: '1031px',
        top: '-10px'
    },
    subPack:{
        position: 'absolute',
        width: '32px',
        height: '16px',
        left: '143px',
       // top: '378px',
        background:'#E6E8E9',
        textAlign:'center'
    },
    actions:{
        position: 'absolute',
        width: '119px',
        height: '16px',
        left: '226px',
       //top: '410px',
        
    },
    divider:{
        position: 'absolute',
        width: '1056px',
        height: '1px',
        left: '92px',
        top: '98px',
        background: '#CED0D3'
    },
    deleteIcon:{
       position: 'absolute',
       left: '13.20%',
       right: '84.75%',
       top: '10px',
       bottom: '62.86%'

    },
    deletetext:{
      position: 'absolute',
      width: '47px',
      height: '16px',
      left: '252px',
      top: '15px'
    }

});

function Simple({products,id}) {
    const items = productStyle();
    const [product,setProduct] = useState(products.quantity);
    const [expanded,setExpanded] = useState(false);

    const handleChange = (event) => {
        setProduct(event.target.value);
    };

    const handleOpen = () => {
        setExpanded(true);
    };  
  return (

        <>
            
            <Box className={items.imageBox}>
                
            </Box>
            <ThemeProvider theme={mediumText}>
            <Typography className={items.titleText}>{products.name}</Typography>
            </ThemeProvider>
            
            <Typography className={items.quantityText}>Quantity: </Typography>
            <FormControl variant='standard'>
            <Select
            value={product}
            onChange={handleChange}
            onOpen={()=>setExpanded(true)}
            onClose={()=>setExpanded(false)}
            open={expanded}
            id={id.toString()}
            className={items.selectSimpleItem}
            IconComponent={() => <KeyboardArrowDownIcon className={expanded ? items.dropdownOpen : items.dropdownClosed}  onClick={handleOpen}/>}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
            </FormControl>
            
            <ThemeProvider theme={mediumText}>
            <Typography className={items.price}>${products.price.toFixed(2)}</Typography>
            </ThemeProvider>
            <ThemeProvider theme={mediumText}>
            <Typography className={items.totalPrice}>Total: ${Number(product * products.price).toFixed(2)}</Typography>
            </ThemeProvider>
            <DeleteOutlineOutlinedIcon className={items.deleteIcon}></DeleteOutlineOutlinedIcon>     
            <Link href='#' className={items.deletetext}>
              <ThemeProvider theme={betweenText}>
              <Typography>Remove</Typography>
              </ThemeProvider>
            </Link>
                       
            <Divider className={items.divider}></Divider>
            
           
        </> 
  
  )
}

export default Simple