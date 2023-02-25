import { modalHtmlContent, removeOrder, removePlate } from "../helpers/sale_helper";
import { OrderList } from "../database/OrderList";

export const initialSaleState = {
    orders: OrderList(),
    openModal: false,
    title: '',
    content:'',
    idToRemove:0,
    idPlateToRemove:0,
    openToast:false,
    btnModalAcceptAction:''
}

export const saleViewReducer = (state,action) =>{
    switch (action.type) {
        case 'DELETE_ORDER':{
           return {openModal: true,title:'Eliminar',content:'Desea eliminar la orden?',orders:state.orders,idToRemove:action.payload,btnModalAcceptAction:'CONFIRM_DELETE_ORDER'}
        }  
        case 'CONFIRM_DELETE_ORDER':{
            let result = removeOrder(state.orders,state.idToRemove);
            return {openModal: false,title:'Terminado',content:'Orden Eliminada',orders:result,openToast:true}
         } 
        case 'CLOSE_MODAL':{
           return {openModal: false,orders:state.orders}
        } 
        case 'EDIT':{
            return {openModal: true,title:'Editar',content:modalHtmlContent(action.plate),orders:state.orders}
        }   
        case 'DELETE_PLATE':{
            return {openModal: true,title:'Eliminar',content:'Desea eliminar este plato de la orden?',btnModalAcceptAction:'CONFIRM_DELETE_PLATE',orders:state.orders,idToRemove:action.order,idPlateToRemove:action.plate}
        } 
        case 'CONFIRM_DELETE_PLATE':{
            /*let order = removeOrder(state.orders,state.idToRemove);
            let result = removePlate(order.plates,state.idPlateToRemove);*/
            /*state.orders.map(element => (
                if (element.id == state.idToRemove) {
                    let result = removePlate(element.plates,state.idPlateToRemove);
                    
                    element.plates = result;
                    console.log(element);
                }
            ));*/
           /* console.log(state.orders);
            let ordersUpd = state.orders.map((element)=>{
                if (element.id == state.idToRemove) {
                    let result = removePlate(element.plates,state.idPlateToRemove);                    
                    element.plates = result;
                    return element;
                }
                return element;
            });
            console.log(ordersUpd);*/
            
            return {openModal: false,title:'Terminado',content:'Plato Eliminado',}
         }   
        default:
           return initialSaleState;
    }

}