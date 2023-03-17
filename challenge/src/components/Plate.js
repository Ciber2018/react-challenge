import {React, useState} from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import Input from './Input';
import VerticalDotMenu from './VerticalDotMenu';
import { useOutletContext } from 'react-router-dom';

const Plate = (props) => {   
  const [setOpenEndMenu,menuContent] = useOutletContext();
  const [selected,setSelected] = useState('Tipo');  

  return(
                 
          <div className='card h-100'>
                <div className='card-header d-flex align-items-center justify-content-between pb-0'>
                    <div className="card-title mb-0">
                        <h5 className="m-0 me-2">{props.order}</h5>
                        <small className="text-muted bot-pad">Precio: </small>
                    </div>
                    <VerticalDotMenu>
                          <Button buttonClass='dropdown-item' buttonText='Duplicar'/> 
                          <Button buttonClass='dropdown-item' buttonText='Duplicar con'/>
                          <Button buttonClass='dropdown-item' buttonText='Complementos' handleClick={(e)=>{ menuContent(e); setOpenEndMenu(true);}}/>
                          <Button buttonClass='dropdown-item' buttonText='Eliminar'/>                    
                    </VerticalDotMenu>                    
                </div>
                <div className='card-body'>
                    <div className="d-flex justify-content-between align-items-center mb-3 up-pad">
                       <div className="d-flex flex-column align-items-center gap-1">
                        <h4 className="mb-2">Total: 8,258</h4>                        
                        </div>
                        <div className='row'>
                          <Dropdown selected={selected}>
                              <Button buttonClass='dropdown-item' buttonText='Cuarto(a)' handleClick={()=> setSelected('Cuarto(a)')}/> 
                              <Button buttonClass='dropdown-item' buttonText='Medio(a)' handleClick={()=> setSelected('Medio(a)')}/> 
                              <Button buttonClass='dropdown-item' buttonText='Tres Cuartos(as)' handleClick={()=> setSelected('Tres Cuartos(as)')}/> 
                              <Button buttonClass='dropdown-item' buttonText='Entero(a)' handleClick={()=> setSelected('Entero(a)')}/>
                          </Dropdown>                         
                          <div className='up-pad' style={{'textAlign':'center'}}>                            
                              <Input inputType='number' inputClass='form-control' customStyle={{'width':'120px','margin':'0 auto'}} inputPlaceholder='Cantidad'/>                                            
                          </div>                           
                        </div>
                    </div>                    
                    <ul className="p-0 m-0">
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
                        
                      </ul>
                </div>
          </div>
     )       
}

export default Plate;