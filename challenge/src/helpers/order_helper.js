import { Products } from "../database/Products";
import { Types } from "../database/Types";


export const getProduct = (productName) => {
    let all = Products();
    let product = all.find((value)=> value.name == productName);
    return product;
}

export const getPriceByType = (type,price) => {
    if (type != 'Tipo') {
        let allTypes = Types();
        let selectedType = allTypes.find((value)=> value.type_name == type);        
        let actualPrice = selectedType.percent * price / 100;
        return actualPrice.toFixed(2);
    }
    return 0;    
}

