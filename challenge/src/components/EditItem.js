import {React, useState,useEffect} from 'react';
import { getTypeName, getCategoryName } from '../helpers/sale_helper';
import Button from './Button';
import Dropdown from './Dropdown';
import Input from './Input';
import { Types } from '../database/Types';
import { Category } from '../database/Category';

const EditItem = ({product,handleCancelButton,handleAcceptButton}) => {
    
   const [formElements,setFormElements] = useState({});   
   let dropDropdownData = Types();
   let categoryDropdown = Category();      
   

   useEffect(() => {       

        const initialUpdate = () => {          
           setFormElements(product);
        }        
       
       initialUpdate();  
                         
    }, [product])    


    const handleChanges = (e) =>{
        let value = e.target.value;
        setFormElements({...formElements,[e.target.name]:value});       
    }

    const handleDropdown = (value) => {
        let type = 'type';
        setFormElements({...formElements,[type]:value});
    }

    const handleAccessoriesChanges = (index,accAmountValue,accCategoryValue) =>{   
        let items = formElements.accesories.slice();       
        items[index] = {...items[index],acces_amount:parseInt(accAmountValue) == 0 ? items[index].acces_amount : parseInt(accAmountValue)};
        items[index] = {...items[index],acces_type:parseInt(accCategoryValue) == 0 ? items[index].acces_type : parseInt(accCategoryValue)};
        const obj = {...formElements,accesories:items};        
        setFormElements(obj);       
    }


    const handleSubmit = (e) => {
        e.preventDefault();                
        handleAcceptButton({type:'UPDATE_ORDER',update:formElements});     
    }


    return(        
        <>             
            <form onSubmit={handleSubmit} >
                <div className='row edit-section'>
                    <div className='col-xs col-sm-2 col-md-2 col-lg-2'>
                        {product.main || ''}
                    </div>
                    <div className='col-xs col-sm-5 col-md-5 col-lg-5'>
                            <Input inputType='number' inputClass='form-control' 
                                inputValue={formElements.amount || 0} customStyle={{'width':'80px','margin':'0 auto','height':'29px'}} 
                                inputPlaceholder='Cantidad' 
                                inputName='amount'
                                inputOnChangeEvent={handleChanges}/>
                    </div>
                    <div className='col-xs col-sm-5 col-md-5 col-lg-5' >
                            <Dropdown menuItem={false} selected={getTypeName(formElements.type || 0)}>
                                {
                                    dropDropdownData.map((type)=>{
                                        return(
                                            <Button key={type.id} buttonClass='dropdown-item' buttonType='button' buttonText={type.type_name} handleClick={()=> handleDropdown(type.id)} /> 
                                        )
                                    })
                                }        
                            
                            </Dropdown>              
                    </div>    
                </div>
                {
                    formElements.hasOwnProperty("accesories") > 0 && 
                        formElements.accesories.map((value,index) => {
                                
                            return(
                                <div key={value.acces_id} className='row edit-section'>
                                    <div className='col-xs col-sm-2 col-md-2 col-lg-2'>
                                    {value.acces_name}
                                    </div>
                                
                                    <div className='col-xs col-sm-5 col-md-5 col-lg-5'>
                                        <Input inputType='number' inputClass='form-control' 
                                            inputValue={value.acces_amount} customStyle={{'width':'80px','margin':'0 auto','height':'29px'}} 
                                            inputPlaceholder='Cantidad'
                                            inputName={value.acces_name}    
                                            inputID={value.acces_id}                                      
                                            inputOnChangeEvent={(e)=>handleAccessoriesChanges(index,e.target.value,0)}                                 
                                        />
                                    </div>
                                    <div className='col-xs col-sm-5 col-md-5 col-lg-5'>
                                        <Dropdown menuItem={false} selected={getCategoryName(value.acces_type)}>
                                            {
                                                categoryDropdown.map((type)=>{
                                                    return(
                                                        <Button key={type.id} buttonClass='dropdown-item' buttonType='button' buttonText={type.categ_name} handleClick={()=>handleAccessoriesChanges(index,0,type.id)} /> 
                                                    )
                                                })
                                            }         
                                        
                                        </Dropdown>              
                                    </div>           
                                    
                                </div>
                            )
                        })
                    
                }

                    <div className='row up-pad edit-section'>
                        <div className='col-xs col-sm-3 col-md-5 col-lg-3'>Cantidad:</div>
                        <div className='col-xs col-sm-3 col-md-3 col-lg-3'>
                                <Input inputType='number' inputClass='form-control' 
                                    inputValue={formElements.plate_amount} customStyle={{'width':'80px','margin':'0 auto','height':'29px'}} 
                                    inputPlaceholder='Cantidad' 
                                    inputName='plate_amount'
                                    inputOnChangeEvent={handleChanges}/>
                        </div>
                    </div>
                    <div className='row m-up alig-center'>
                        <div className='col-xs col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                            <Button buttonClass='btn rounded-pill btn-primary' buttonText='Aceptar' buttonType='submit' />
                        </div>
                    
                        <div className='col-xs col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                            <Button buttonClass='btn rounded-pill btn-danger' buttonType='button' buttonText='Cancelar' handleClick={handleCancelButton}/>
                        </div>
                    </div>           

            </form>          
        </>
    )
}

export default EditItem;