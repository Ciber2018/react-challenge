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
