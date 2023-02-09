export const removeOrder = (array,id) =>{
   return  array.filter((value) => value.id != id);
}

export const removePlate = (plates,plateId) =>{
   // let ordersCopy = array;
    //let order = ordersCopy.find((value) => value.id == orderId);    
   return plates.filter((value)=> value.plateId != plateId);
   // order.plates = result;
    //let index = ordersCopy.findIndex((item)=> item.id == orderId);
    //ordersCopy[index] = order; 
   // return ordersCopy;

}