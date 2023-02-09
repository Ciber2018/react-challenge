import {React, useState} from 'react';
import { openMenuDropdown, openMobileEndMenu, showCollapsed, getPlateAccesories } from '../helpers/helper';
import { removePlate } from '../helpers/sale_helper';
import Button from './Button';
import Input from './Input';

const OrderListItem = ({data,remove,btnPlateHandlerClick}) => {
    let [check,setCheck]=useState(data.isPaid);
    let [plates,setPlates] = useState(data.plates);

    const deletePlate = (plateId) => {
        setPlates(removePlate(plates,plateId));
    }

    return(
        <div className="card mb-4">
        <div className="card-header">
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                   {data.customer}
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <div className='dropdown'>
                        <Button 
                          buttonClass='custom-btn p-0' 
                          buttonType='button' 
                          buttonStyle={{float:'right'}} 
                          handleClick={openMenuDropdown} 
                          buttonText={<i className="bx bx-dots-vertical-rounded"></i>}
                        />                            
                        <div className="dropdown-menu dropdown-menu-end">
                            <Button buttonClass='dropdown-item' buttonText='Editar' handleClick={(e)=>openMobileEndMenu(e)} />
                            <Button buttonClass='dropdown-item' buttonText='Eliminar' handleClick={() => remove(data.id)} />                                                      
                        </div>
                    </div>
                </div>
            </div>               
        </div>           
        <div className="card-body">            
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <p>Subtotal: {data.subtotal}</p>
                    <p>Tax: {data.ivu}%</p>
                    <p><b>Total: {data.total}</b></p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <div className="form-check">
                        <Input inputClass='form-check-input' inputType='checkbox' inputOnChangeEvent={()=> setCheck(!check)} inputValue='' inputID='flexCheckDefault' inputCheck={check} inputDisabled={data.isPaid}/>                            
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
                handleClick={(e)=>showCollapsed(e)} 
                buttonText='Detalles'
            />                                   
            
        </p>
        
        <div className="collapse" id="collapseExample">
               {
                   
                   plates.map((plate,i)=>{                                                         
                        return(  
                            <div className="d-grid d-sm-flex p-3 border" key={plate.plateId}>
                                <span>
                                   {plate.main} ({plate.type})
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
                                <Button buttonType="button"  
                                        buttonClass="btn rounded-pill btn-icon btn-danger" 
                                        buttonId={plate.id}
                                        buttonStyle={{margin:'0 auto'}} 
                                        buttonText={<span className="tf-icons bx bx-x-circle" style={{fontSize:'35px'}}></span>} 
                                        handleClick={()=>deletePlate(plate.plateId)}
                                />
                                    
                                
                            </div>                                      
                                                        
                        )                                        
                    }) 
                }    
           
        </div>
        </div>
    </div>

    )
    

   
}

export default OrderListItem;