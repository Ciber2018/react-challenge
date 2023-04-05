import { Types } from '../database/Types';
import {Category} from '../database/Category';
var parse = require('html-react-parser');

export const removeOrder = (array,id) =>{
   return  array.filter((value) => value.id != id);
}

export const removePlate = (plates,plateId) =>{      
   return plates.filter((value)=> value.plateId != plateId);   
}

export const getSubtotal = (plates) => {     
   let subTotal = 0;
   plates.forEach(element => {     
      subTotal+=element.total_price;
   });
   return subTotal;
}

export const getTotal = (plates) => {
   let subtotal = getSubtotal(plates);
   let amount = (7 * subtotal) / 100;
   return subtotal + amount;
}

export const modalHtmlContent = (plate) => {
   let html = '';
   let accs = '';
   plate.accesories.forEach((acces)=>{      
      accs+=`<div key=${acces.acces_id}>- ${acces.acces_name} ${acces.acces_type} (${acces.acces_amount})</div>`;     
  });
  html+=`<span style={{width:'280px'}}>${plate.main} ${plate.type}${accs}</span>`;  
  return parse(html);
}

export const getTypeName = (typeId) =>{   
   if (typeId != 0) {
      let types = Types();
      let type = types.find((element)=> element.id == typeId);   
      return type.type_name;
   }
   return 'Tipo';
}

export const getTypeId = (typeName) =>{
   if (typeName != '') {
      let types = Types();
      let type = types.find((element)=> element.type_name == typeName);   
      return type.id;
   }
   return typeName;
}

export const getCategoryName = (typeId) =>{
   if (typeId != '') {     
      let categories = Category();
      let category = categories.find((element)=> element.id == typeId);           
      return category.categ_name;
   }
   return '';
}

export const getCategoryAllSelected = (accesories) => {   
   let selected = {};
   for (let item of accesories) {
      selected[item.acces_name] = item.acces_type;
   }
   return selected;
}

/*export const getCategorySelected = (selectedselected,select_name*) => {
   /*let value = '';   
   console.log(select_name);
   for (let key in selected) {
      
      if (key == select_name) {
         value = getCategoryName(selected[key]);
      }
   }
   return value;*/
/*}*/

export const changeCategorySelected = (selected,select_name,select_id) =>{ 
   
   let auxSelected = {};
   for (let key in selected) {
      if (key == select_name) {
         auxSelected[key] = select_id;
      }else{
         auxSelected[key] = selected[key];
      }
   }             

   return auxSelected;

  
}
