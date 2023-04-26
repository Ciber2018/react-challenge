import { removeOrder } from "../helpers/sale_helper";
import { OrderList } from "../database/OrderList";

export const initialSaleState = {
    orders: OrderList(),
    openModal: false,
    title: '',
    content:'',
    idToRemove:0,
    idOrderToUpdate:0,
    idPlateToRemove:0,
    openToast:false,
    btnModalAcceptAction:'',
    openEndMenu: false,
    endMenuEditContent:[],
    plateToEdit: {},     
}

export const saleViewReducer = (state,action) =>{
    switch (action.type) {
        case 'DELETE_ORDER':{
           return {openModal: true,
                   title:'Eliminar',
                   content:'Desea eliminar la orden?',
                   orders:state.orders,
                   idToRemove:action.payload,
                   btnModalAcceptAction:'CONFIRM_DELETE_ORDER',
                   plateToEdit:{}
                }
        }  
        case 'CONFIRM_DELETE_ORDER':{
            let result = removeOrder(state.orders,state.idToRemove);
            return {openModal: false,title:'Terminado',content:'Operacion realizada',orders:result,openToast:true,plateToEdit:{}}
         } 
        case 'CLOSE_MODAL':{
            return {openModal: false,orders:state.orders,plateToEdit:{}}
        } 
        case 'EDIT':{                   
            return {openEndMenu: true,orders:state.orders,title:'Editar',plateToEdit:action.plate,idOrderToUpdate:action.orderId}
        }   
        case 'DELETE_PLATE':{
            return {openModal: true,
                   title:'Eliminar',
                   content:'Esta seguro(a) de eliminar?',
                   btnModalAcceptAction:'CONFIRM_DELETE_PLATE',
                   orders:state.orders,
                   idToRemove:action.order,
                   idPlateToRemove:action.plate,
                   plateToEdit:{}
                   }
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
            return {openModal: false,title:'Terminado',content:'Operacion realizada',orders:ordersUpd,openToast:true,plateToEdit:{}}
         }
         case 'CLOSE_TOAST':{
            return {openToast: false,orders:state.orders, title:state.title,content:state.content,plateToEdit:{}}
         } 
         case 'OPEN_ENDMENU':{
            return {openEndMenu: true,orders:state.orders,title:'Añadir',plateToEdit:{}}
         }  
         case 'CLOSE_ENDMENU':{       
            return {openEndMenu: false,orders:state.orders,title:'Añadir',plateToEdit:{}}
         } 
         case 'UPDATE_ORDER':{         
            
            let order = state.orders.find(item=> item.id == state.idOrderToUpdate);
            let pos = state.orders.findIndex(item=> item.id == state.idOrderToUpdate);
            
            let platePos = order.plates.findIndex(item=> item.plateId == state.plateToEdit.plateId);

            order.plates[platePos].amount = action.update.amount;
            order.plates[platePos].type = action.update.type;
            order.plates[platePos].plate_amount = action.update.plate_amount;
            order.plates[platePos].accesories = action.update.accesories;
            state.orders[pos] = order;          
               
            return {openEndMenu: false,orders:state.orders,title:'Terminado',plateToEdit:state.plateToEdit,content:'Operacion realizada',openToast:true}
         } 
        default:
           return initialSaleState;
    }

}