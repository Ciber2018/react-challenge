import {React, useReducer, useState} from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from "react-router-dom";
import { OrderList } from '../../database/OrderList';
import OrderListItem from '../../components/OrderListItem';
import Button from '../../components/Button';
import EndMenu from '../../components/EndMenu';
import { removeOrder} from '../../helpers/sale_helper';
import Toast from '../../components/Toast';
import Modal from '../../components/Modal';
import { initialSaleState, saleViewReducer } from '../../reducers/saleReducer';

const Sale = () =>{
    let history = useNavigate();
   // const [orders,setOrders] = useState(OrderList());   
    const [openEndMenu,setOpenEndMenu] = useState(false);  
    const [toast,setToast] = useState(false); 
    const [orderToRemove, setOrderToRemove] = useState(0);  

    const [state, dispatch] = useReducer(saleViewReducer, initialSaleState);
    
    const createOrder = () => {        
        history('/order');
    }   
   
    return (
        <>       
         <Navbar showIconMenu={false} customClasses='layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme'>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                        <i className="bx bx-search fs-4 lh-0"></i>
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Search..."
                            aria-label="Search..."
                        />
                        </div>
                    </div>                   

            </div>
         </Navbar>
         <div className='content-wrapper'>
            <div className='container-xxl flex-grow-1 container-p-y'>
                <div className='row'>
                    <div className="col-sm-6 col-md-12 col-lg-10 mb-4">
                        <div className="buy-now">
                            {
                                !openEndMenu &&
                                 <Button
                                    buttonText='Crear Orden'
                                    buttonClass="custom-btn btn-outline-primary mobile-button hide-element"
                                    buttonType="button"                               
                                    handleClick={ createOrder} 
                                 />   

                            }                                                      
                           
                            <div className='row'>
                                {
                                    state.orders.map((element,i)=>{                                    
                                        return(  
                                            <div className="col-sm-12 col-md-6 col-lg-4" key={element.id}>
                                              <OrderListItem data={element}  
                                                handleOpenEndMenu={()=>setOpenEndMenu(true)}                                                
                                                handleDeleteOrder={()=>dispatch({type:'DELETE_ORDER',payload:element.id})}
                                                handleEdit={(value)=>dispatch(value)}
                                                handleDeletePlate = {(order,plate)=>dispatch({type:'DELETE_PLATE',order,plate})}                                                 
                                                //handleOrderToRemove= {(value)=>setOrderToRemove(value)}                                                                                                
                                                /> 
                                            </div>                              
                                                                  
                                        )                                        
                                    }) 
                                }                       
                             </div>
                        </div>
                    
                    </div>                    
                       
                    <div className="col-sm-6 col-lg-2 mb-4 enable-desktop">                       
                        <Button buttonType="button" buttonClass="btn btn-xl btn-outline-primary" buttonText='Crear Orden' handleClick={()=>createOrder()} />                                                                         
                    </div>   
                   
                </div>            
            </div>  
         </div>
         <Modal openModal={state.openModal} 
                closeButton={()=>dispatch({type:'CLOSE_MODAL'})}            
                title = {state.title}
                handleAcceptBtn={() => dispatch({type:state.btnModalAcceptAction,payload:state.idToRemove})}                                           
         >
            
            <div className="d-grid d-sm-flex p-3 border">
                 <span style={{width:'280px'}}>                           
                       
                     {
                        state.content
                     }                            
                             
                 </span>
                 </div>
                 
         </Modal>
         <Toast show={state.openToast} handleCloseToast={()=> setToast(false)} title={state.title} content={state.content}/>
         <EndMenu open={openEndMenu} handleCloseEndMenu={()=>setOpenEndMenu(false)}>
                <h2>Editar</h2>
         </EndMenu>      
        </>
       
    )
}

export default Sale;