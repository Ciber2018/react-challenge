import { createContext, useState } from "react";
import { getProduct } from "../helpers/order_helper";
import { Types } from "../database/Types";
import { Category } from "../database/Category";

const ListPlateContext = createContext();

const ListPlateProvider = ({children}) => {
    const [list,setList] = useState([]); 
    const [endMenuContent,setEndMenuContent] = useState('');    

    const updatePlateList = (element,text) => {
        let product = getProduct(text);
        let plate = {main:product.name,type:0,price:product.price,accesories:[],total_price:0,plate_amount:1,gen:product.category}
        setList([...list,plate]);      
    }

    const updatePlateAmount = (value,pos) => {
        let plates = [...list];
        plates[pos]['plate_amount'] = parseInt(value);   
        let allCategories = plates[pos]['gen'] == 'Category' ? Category() : Types(); 
        let selectedCategory = allCategories.find((item)=> item.id == plates[pos]['type']); 
        let totalPrice = plates[pos]['gen'] == 'Category' ? selectedCategory.amount * plates[pos]['price'] : selectedCategory.percent * plates[pos]['price'] / 100;        
        plates[pos]['total_price'] = value == '' ? totalPrice.toFixed(2) * 0 : totalPrice.toFixed(2) * parseInt(value);
        setList(plates); 
    }

    const updateSelected = (value,pos) => {
        let plates = [...list];        
        plates[pos]['type'] = parseInt(value);
        let allCategories = plates[pos]['gen'] == 'Category' ? Category() : Types(); 
        let selectedCategory = allCategories.find((item)=> item.id == value); 
        let totalPrice = plates[pos]['gen'] == 'Category' ? selectedCategory.amount * plates[pos]['price'] : selectedCategory.percent * plates[pos]['price'] / 100;
        plates[pos]['total_price'] = totalPrice.toFixed(2) * plates[pos]['plate_amount'];
        setList(plates); 
    }

    /*const getSubtotal = () => {
        let subtotal = 0;
        let all = list;
        console.log(all);
        all.forEach((prod)=>{
           subtotal+=parseFloat(prod.total_price) * prod.plate_amount;
        });
        return subtotal.toFixed(2);
    }*/

    const removePlateByPosition = (pos) => { 
        let plates =[...list];       
        plates.splice(pos,1);  
        setList(plates);
    }   
   

    const data = {list,updatePlateList,endMenuContent,setEndMenuContent,updatePlateAmount,removePlateByPosition,updateSelected};
    return(
        <ListPlateContext.Provider value={data}>
            {children}
        </ListPlateContext.Provider>
    )
};

export{ListPlateProvider};
export default ListPlateContext;