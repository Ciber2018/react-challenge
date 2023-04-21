import { createContext, useState } from "react";
import { getProduct } from "../helpers/order_helper";

const ListPlateContext = createContext();

const ListPlateProvider = ({children}) => {
    const [list,setList] = useState([]);
    const [subtotal,setSubtotal] = useState(0.0);

    const updatePlateList = (element,text) => {
        let product = getProduct(text);
        let plate = {main:product.name,type:0,amount:1,price:product.price,accesories:[],total_price:0,plate_amount:1}
        setList([...list,plate]);      
    }

    const updateTotalPrice = (value,pos) =>{
        
        let plates = list;
        plates[pos]['total_price'] = value;
        setList(plates);
        
    }

    const data = {list,subtotal,updatePlateList,updateTotalPrice};
    return(
        <ListPlateContext.Provider value={data}>
            {children}
        </ListPlateContext.Provider>
    )
};

export{ListPlateProvider};
export default ListPlateContext;