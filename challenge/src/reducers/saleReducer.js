import { modalHtmlContent, removeOrder } from "../helpers/sale_helper";
import { OrderList } from "../database/OrderList";

export const initialSaleState = {
    orders: OrderList(),
    openModal: false,
    title: '',
    content:'',
    idToRemove:0,
    idPlateToRemove:0,
    openToast:false,
    btnModalAcceptAction:'',
    openEndMenu: false,
    endMenuEditContent:[],   
}

export const saleViewReducer = (state,action) =>{
    switch (action.type) {
        case 'DELETE_ORDER':{
           return {openModal: true,title:'Eliminar',content:'Desea eliminar la orden?',orders:state.orders,idToRemove:action.payload,btnModalAcceptAction:'CONFIRM_DELETE_ORDER'}
        }  
        case 'CONFIRM_DELETE_ORDER':{
            let result = removeOrder(state.orders,state.idToRemove);
            return {openModal: false,title:'Terminado',content:'Operacion realizada',orders:result,openToast:true}
         } 
        case 'CLOSE_MODAL':{
            return {openModal: false,orders:state.orders}
        } 
        case 'EDIT':{
            //return {openModal: true,title:'Editar',content:modalHtmlContent(action.plate),orders:state.orders}
            return {openEndMenu: true,orders:state.orders,title:'Editar'}
        }   
        case 'DELETE_PLATE':{
            return {openModal: true,title:'Eliminar',content:'Desea eliminar este plato de la orden?',btnModalAcceptAction:'CONFIRM_DELETE_PLATE',orders:state.orders,idToRemove:action.order,idPlateToRemove:action.plate}
        } 
        case 'CONFIRM_DELETE_PLATE':{            
            let ordersUpd = [];
            for (let order of state.orders) {
                let plates = order.plates.filter((plate)=> plate.plateId != state.idPlateToRemove);                
                if (plates.length > 0) {
                   order.plates = [...plates];
                   ordersUpd = [...ordersUpd,order];
                }               
            }           
            return {openModal: false,title:'Terminado',content:'Operacion realizada',orders:ordersUpd,openToast:true}
         }
         case 'CLOSE_TOAST':{
            return {openToast: false,orders:state.orders, title:state.title,content:state.content}
         } 
         case 'OPEN_ENDMENU':{
            return {openEndMenu: true,orders:state.orders,title:'Añadir'}
         }  
         case 'CLOSE_ENDMENU':{
            return {openEndMenu: false,orders:state.orders,title:'Añadir'}
         } 
        default:
           return initialSaleState;
    }

}