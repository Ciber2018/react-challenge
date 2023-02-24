import { modalHtmlContent } from "../helpers/sale_helper"

export const initialModalState = {
    open: false,
    title: '',
    content:'',
    id:0
}

export const modalReducerAlgorithm = (modalState,action) =>{
    switch (action.type) {
        case 'DELETE_ORDER':{
           return {open: true,title:'Eliminar',content:'Desea eliminar la orden?'}
        }  
        case 'CLOSE_MODAL':{
           return initialModalState
        } 
        case 'EDIT':{
            return {open: true,title:'Editar',content:modalHtmlContent(action.plate)}
         }      
        default:
           return initialModalState;
    }

}