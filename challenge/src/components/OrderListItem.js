import {React, useState} from 'react';
import { openMenuDropdown, openMobileEndMenu, showCollapsed, getPlateAccesories } from '../helpers/helper';
import Button from './Button';
import Input from './Input';

const OrderListItem = ({data}) => {
    let [check,setCheck]=useState(data.isPaid);

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
                            <button className="dropdown-item">Editar</button>
                            {/*<button className="dropdown-item">Duplicar con</button>
                            <button className="dropdown-item" onClick={openMobileEndMenu}>Complementos</button>*/}
                            <button className="dropdown-item">Eliminar</button>
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
                   
                    data.plates.map((plate,i)=>{                                                         
                        return(  
                            <div className="d-grid d-sm-flex p-3 border" key={plate.plateId}>
                                <span>
                                   {plate.main} ({plate.type})
                                   {
                                      plate.accesories.map((element)=>{
                                        return(                                 
                                          
                                            <div key={element.acces_id}>- {element.acces_name} {element.acces_type}({element.acces_amount})</div>
                                        )
                                      })
                                   }
                                   <b>Total: {plate.total_price}</b>
                                </span>
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