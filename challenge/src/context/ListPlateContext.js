import { createContext, useState } from "react";
import { getProduct } from "../helpers/order_helper";

const ListPlateContext = createContext();

const ListPlateProvider = ({children}) => {
    const [list,setList] = useState([]);    

    const updatePlateList = (element,text) => {
        let product = getProduct(text);
        let plate = {main:product.name,type:0,price:product.price,accesories:[],total_price:0,plate_amount:1}
        setList([...list,plate]);      
    }

    const updateTotalPrice = (value,pos) =>{        
        let plates = list;
        plates[pos]['total_price'] = value;
        setList(plates);        
    }

    const updatePlateAmount = (value,pos) => {
        let plates = list;
        plates[pos]['plate_amount'] = value;       
        setList(plates); 
    }

    const getSubtotal = () => {
        let subtotal = 0;
        let all = list;
        all.forEach((prod)=>{
           subtotal+=parseFloat(prod.total_price);
        });
        return subtotal.toFixed(2);
    }

    const data = {list,updatePlateList,updateTotalPrice,getSubtotal,updatePlateAmount};
    return(
        <ListPlateContext.Provider value={data}>
            {children}
        </ListPlateContext.Provider>
    )
};

export{ListPlateProvider};
export default ListPlateContext;