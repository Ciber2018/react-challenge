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
