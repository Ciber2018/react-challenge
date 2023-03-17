import {React, useState} from 'react';
import { getSubtotal, getTotal} from '../helpers/sale_helper';
import Button from './Button';
import Input from './Input';
import VerticalDotMenu from './VerticalDotMenu';
import { CSSTransition } from 'react-transition-group';
import { getTypeName } from '../helpers/sale_helper';



const OrderListItem = ({data,handleOpenEndMenu,handleDeleteOrder,handleEdit,handleDeletePlate}) => {
    const [check,setCheck]=useState(data.isPaid);  
    
    const [showCollapse,setShowCollapse] = useState(false);     
   
   
    return(
        <div className="card mb-4">
        <div className="card-header">
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                   {data.customer}
                </div>
                <VerticalDotMenu>
                    <Button buttonClass='dropdown-item' buttonText='Añadir' handleClick={handleOpenEndMenu} />
                    <Button buttonClass='dropdown-item' buttonText='Eliminar' handleClick={handleDeleteOrder} /> 
                </VerticalDotMenu>                
            </div>               
        </div>           
        <div className="card-body">            
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <p>Subtotal: {getSubtotal(data.plates)}</p>
                    <p>Tax: {data.ivu}%</p>
                    <p><b>Total: {getTotal(data.plates).toFixed(2)}</b></p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <div className="form-check">
                        <Input inputClass='form-check-input' inputType='checkbox' inputOnChangeEvent={()=> setCheck(!check)} inputValue='' inputID='flexCheckDefault' inputCheck={check} inputDisabled={check}/>                            
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Pagado
                        </label>
                    </div>
                </div>
            </div>               
       
        <p className="demo-inline-spacing"> 
            <Button 
                buttonClass='btn btn-primary me-1 collapsed' 
                buttonType='button'                     
                handleClick={(e)=>setShowCollapse(!showCollapse)} 
                buttonText='Detalles'
            />                          
            
        </p>
        <CSSTransition        
        in={showCollapse}
        classNames='menu-collapse'
        timeout={500}  
        mountOnEnter         
        >        
        <div>
               {      
                           
                   data.plates.map((plate,i)=>{         
                                                               
                        return(                             
                            <div className="d-grid d-sm-flex p-3 border" key={plate.plateId}>
                                <span style={{width:'280px'}}>
                                   {plate.main}: {getTypeName(plate.type)}
                                   {
                                     
                                      plate.accesories.map((element)=>{
                                        return(                                                   
                                               <div key={element.acces_id}>- {element.acces_name} {element.acces_type} ({element.acces_amount})                                             
                                                </div>                                              
                                           
                                        )
                                      })
                                      
                                   }
                                   <b>Total: {plate.total_price}</b>
                                  
                                </span>
                                <div style={{margin:'12px 12px 12px 45px'}}>                           
                                    <Button buttonType="button"  
                                            buttonClass="btn btn-icon btn-outline-primary" 
                                            buttonId={plate.id}
                                            buttonText=''
                                            buttonStyle={{margin:'0px 15px 0px 0px'}}                                     
                                            handleClick={()=>handleEdit({type:'EDIT',plate,orderId:data.id})}
                                    > 
                                      <span className="tf-icons bx bx-edit-alt"></span>
                                    </Button>
                                    
                            

                                    <Button buttonType="button"  
                                            buttonClass="btn btn-icon btn-outline-danger plate-remove-button" 
                                            buttonId={plate.id}                                            
                                            buttonText=''
                                            handleClick={()=>handleDeletePlate(data.id,plate.plateId)}
                                    >
                                        <span className="tf-icons bx bx-x-circle"></span>
                                    </Button>
                                </div>  
                   
                            </div>                                     
                                                        
                        )                                        
                    })                     
                }   
           
        </div>
        </CSSTransition>
        </div>     
        
                    
         
    </div>

    )        
}

export default OrderListItem;