import {React, useContext} from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import Input from './Input';
import VerticalDotMenu from './VerticalDotMenu';
import { useOutletContext } from 'react-router-dom';
import { getProductCategory,getSelectedType,getSelectedCategory } from '../helpers/order_helper';
import { Types } from '../database/Types';
import { Category } from '../database/Category';
import ListPlateContext from '../context/ListPlateContext';

const Plate = ({product,position}) => {   
  const [setOpenEndMenu] = useOutletContext(); 
  const {updatePlateAmount,removePlateByPosition,updateSelected,setEndMenuContent} = useContext(ListPlateContext);  
  let types = Types();
  let category = Category();  

  const handleEndMenu = () => {
    setEndMenuContent('Complementos');
    setOpenEndMenu(true);
  }


  return(
                 
          <div className='card h-100'>
                <div className='card-header d-flex align-items-center justify-content-between pb-0'>
                    <div className="card-title mb-0">
                        <h5 className="m-0 me-2">{product.main}</h5>                        
                    </div>
                    <VerticalDotMenu>                          
                          <Button buttonClass='dropdown-item' buttonText='Duplicar con'/>
                          <Button buttonClass='dropdown-item' buttonText='Complementos' handleClick={handleEndMenu}/>
                          <Button buttonClass='dropdown-item' buttonText='Eliminar' handleClick={()=> removePlateByPosition(position)}/>                    
                    </VerticalDotMenu>                    
                </div>
                <div className='card-body'>
                    <div className="d-flex justify-content-between align-items-center mb-3 up-pad">
                       <div className="d-flex flex-column align-items-center gap-1">
                        <h4 className="mb-2">Total: {product.total_price.toFixed(2)}</h4>                        
                        </div>
                        <div className='row'>  
                        {
                          getProductCategory(product.main) == 'Types' 

                          ?
                          <Dropdown menuItem={false} selected={ getSelectedType(product.type) }>
                                {
                                 
                                    types.map((type)=>{
                                        return(
                                            <Button key={type.id} buttonClass='dropdown-item' buttonType='button' buttonText={type.type_name} 
                                                    handleClick={()=> updateSelected(type.id,position)}  /> 
                                        )
                                    })
                                    
                                }        
                            
                          </Dropdown> 

                          :

                          <Dropdown menuItem={false} selected={ getSelectedCategory(product.type) }>
                                {
                                    category.map((cat)=>{
                                        return(
                                            <Button key={cat.id} buttonClass='dropdown-item' buttonType='button' buttonText={cat.categ_name} 
                                                    handleClick={()=> updateSelected(cat.id,position)}  /> 
                                        )
                                    })
                                }        
                            
                          </Dropdown> 
                        }                      
                                            
                          <div className='up-pad' style={{'textAlign':'center'}}>                            
                              <Input inputType='number' inputClass='form-control' customStyle={{'width':'120px','margin':'0 auto'}} 
                                     inputPlaceholder='Cantidad' inputValue={product.plate_amount} inputOnChangeEvent={(e)=> updatePlateAmount(e.target.value,position)}/>                                            
                          </div>                           
                        </div>
                    </div>                    
                   {/* <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-primary"
                              ><i className="bx bx-mobile-alt"></i
                            ></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Electronic</h6>
                              <small className="text-muted">Mobile, Earbuds, TV</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">82.5k</small>
                            </div>
                          </div>
                        </li>
                        
                      </ul>*/}
                </div>
          </div>
     )       
}

export default Plate;