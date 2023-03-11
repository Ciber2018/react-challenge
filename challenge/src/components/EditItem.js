import {React, useState} from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import Input from './Input';

const EditItem = ({product,type,amount}) => {
    const [cant,setCant] = useState(amount);
    return(
        <>
            <div className='row'>
                <div className='col-xs col-sm-4 col-md-4 col-lg-4'>
                {product}
                </div>
            
                <div className='col-xs col-sm-4 col-md-4 col-lg-4'>
                <Input inputType='number' inputClass='form-control' 
                       inputValue={cant} customStyle={{'width':'80px','margin':'0 auto','height':'29px'}} 
                       inputPlaceholder='Cantidad' 
                       inputOnChangeEvent={(e)=> setCant(e.target.value)}/>
                </div>
                <div className='col-xs col-sm-4 col-md-4 col-lg-4'>
                    <Dropdown menuItem={false}>
                        <Button buttonClass='dropdown-item' buttonText='Cuarto(a)'/> 
                        <Button buttonClass='dropdown-item' buttonText='Medio(a)'/> 
                        <Button buttonClass='dropdown-item' buttonText='Tres Cuartos(as)'/> 
                        <Button buttonClass='dropdown-item' buttonText='Entero(a)'/>
                    </Dropdown>              
                </div>           
                
            </div>
            {/*<div className='row m-up alig-center'>
                <div className='col-xs col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                    <Button buttonClass='btn rounded-pill btn-primary' buttonText='Aceptar'/>
                </div>
                <div className='col-xs col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                    <Button buttonClass='btn rounded-pill btn-danger' buttonText='Cancelar'/>
                </div>
    </div>*/}
        </>
    )
}

export default EditItem;