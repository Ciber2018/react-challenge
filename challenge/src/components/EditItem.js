import {React, useState,useEffect} from 'react';
import { getCategoryAllSelected, getTypeName, getCategorySelected, changeCategorySelected } from '../helpers/sale_helper';
import Button from './Button';
import Dropdown from './Dropdown';
import Input from './Input';
import { Types } from '../database/Types';
import { Category } from '../database/Category';

const EditItem = ({product,type = 0,amount,accesories = [],handleAcceptButton,plateAmount = 0,handleCancelButton}) => {
    const [cant,setCant] = useState(amount);
    const [amountPlate,setAmountPlate] = useState(plateAmount);
    const [select,setSelect] = useState(type); 
    const [selectCat,setSelectCat] = useState(getCategoryAllSelected(accesories));   
    let dropDropdownData = Types();
    let categoryDropdown = Category();
    
    
    useEffect(() => {
      setSelect(type);         
    }, [type])

    useEffect(() => {
      setAmountPlate(plateAmount);            
    }, [plateAmount]) 
    
    useEffect(() => {
        setSelectCat(getCategoryAllSelected(accesories));            
      }, [accesories]) 
    
    return(
        <>
            <div className='row edit-section'>
                <div className='col-xs col-sm-2 col-md-2 col-lg-2'>
                {product}
                </div>
            
                <div className='col-xs col-sm-5 col-md-5 col-lg-5'>
                    <Input inputType='number' inputClass='form-control' 
                        inputValue={cant} customStyle={{'width':'80px','margin':'0 auto','height':'29px'}} 
                        inputPlaceholder='Cantidad' 
                        inputOnChangeEvent={(e)=> setCant(e.target.value)}/>
                </div>
                <div className='col-xs col-sm-5 col-md-5 col-lg-5'>
                    <Dropdown menuItem={false} selected={getTypeName(select)}>
                        {
                            dropDropdownData.map((type)=>{
                                return(
                                    <Button key={type.id} buttonClass='dropdown-item' buttonText={type.type_name} handleClick={()=>setSelect(type.id)}/> 
                                )
                            })
                        }         
                       
                    </Dropdown>              
                </div>                                        
                
            </div>
            {
                accesories.map((value) => {
                    
                    return(
                        <div className='row edit-section'>
                            <div className='col-xs col-sm-2 col-md-2 col-lg-2'>
                            {value.acces_name}
                            </div>
                        
                            <div className='col-xs col-sm-5 col-md-5 col-lg-5'>
                                <Input inputType='number' inputClass='form-control' 
                                    inputValue={cant} customStyle={{'width':'80px','margin':'0 auto','height':'29px'}} 
                                    inputPlaceholder='Cantidad' 
                                    inputOnChangeEvent={(e)=> setCant(e.target.value)}/>
                            </div>
                            <div className='col-xs col-sm-5 col-md-5 col-lg-5'>
                                <Dropdown menuItem={false} selected={getCategorySelected(selectCat,value.acces_name)}>
                                    {
                                        categoryDropdown.map((type)=>{
                                            return(
                                                <Button key={type.id} buttonClass='dropdown-item' buttonText={type.categ_name} handleClick={()=> setSelectCat(changeCategorySelected(selectCat,value.acces_name,type.id)) }/> 
                                            )
                                        })
                                    }         
                                
                                </Dropdown>              
                            </div>             
                            
                        </div>
                    )
                })
            }
            <div className='row up-pad'>
                <div className=' col-sm-3 col-md-3 col-lg-3'>Cantidad:</div>
                <div className=' col-sm-3 col-md-3 col-lg-3'>
                        <Input inputType='number' inputClass='form-control' 
                            inputValue={amountPlate} customStyle={{'width':'80px','margin':'0 auto','height':'29px'}} 
                            inputPlaceholder='Cantidad' 
                            inputOnChangeEvent={(e)=> setAmountPlate(e.target.value)}/>
                </div>
            </div>
            <div className='row m-up alig-center'>
                <div className='col-xs col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                    <Button buttonClass='btn rounded-pill btn-primary' buttonText='Aceptar' handleClick={()=>handleAcceptButton({type:'UPDATE_ORDER',typeSelected:select,amountPlate,selectCat})}/>
                </div>
               
                <div className='col-xs col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                    <Button buttonClass='btn rounded-pill btn-danger' buttonText='Cancelar' handleClick={handleCancelButton}/>
                </div>
            </div>
        </>
    )
}

export default EditItem;