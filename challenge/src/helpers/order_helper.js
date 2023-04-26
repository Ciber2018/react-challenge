import { Products } from "../database/Products";
import { Types } from "../database/Types";
import { Category } from "../database/Category";


export const getProduct = (productName) => {
    let all = Products();
    let product = all.find((value)=> value.name == productName);
    return product;
}

export const getProductCategory = (productName) => {
    let all = Products();
    let product = all.find((value)=> value.name == productName);
    return product.category;
}

export const getPriceByType = (type,price) => {    
    if (type != 0) {
        let allTypes = Types();
        let selectedType = allTypes.find((value)=> value.id == type);        
        let actualPrice = selectedType.percent * price / 100;
        return actualPrice.toFixed(2);
    }
    return 0;    
}

export const getSelectedType = (id) => {
    if (id > 0) {
        let allTypes = Types();
        let selectedType = allTypes.find((value)=> value.id == id); 
        return selectedType.type_name;
    }
    return 'Tipo';
}

export const getSelectedCategory = (id) => {
    if (id > 0) {
        let all = Category();
        let selectedCategory = all.find((value)=> value.id == id); 
        return selectedCategory.categ_name;
    }
    return 'Tipo';
}

/*export const getPriceByCategory = (category,price,gen) => {        
    if (category != 0) {        
        let allCategories = gen == 'Category' ? Category() : Types();    
        let actualPrice = 0;    
        let selectedCategory = allCategories.find((value)=> value.id == category);  
        if (gen == 'Types') {
           actualPrice = selectedCategory.percent * price / 100;
        } 
        
        if (gen == 'Category') {
            actualPrice = selectedCategory.amount * price;
        }
        /*else {
           actualPrice = selectedCategory.amount * price; 
        }      */               
        //let actualPrice = gen == 'Category' ? (selectedCategory.percent * price / 100) : (selectedCategory.amount * price);//selectedCategory.amount * price;
        //console.log( actualPrice);
       // console.log(actualPrice);
        //return actualPrice.toFixed(2);
   /* }
    return 0;    
}*/

export const getTotal = (subtotal) =>{
    let percent = (7 * parseFloat(subtotal)) / 100;
    let result =  parseFloat(subtotal) + percent;
    return result.toFixed(2);
}

export const getSubtotal = (list) => {
    let subtotal = 0;     
    list.forEach((prod)=>{
       subtotal+=parseFloat(prod.total_price);
    });
    return subtotal.toFixed(2);
}

