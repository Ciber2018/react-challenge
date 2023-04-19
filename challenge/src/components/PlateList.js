import {React, useContext} from 'react';
import ListPlateContext from '../context/ListPlateContext';
import Plate from './Plate';
import { getProduct } from '../helpers/order_helper';

const PlateList = () =>{
    const {list} = useContext(ListPlateContext);
    console.log(list);
    return(
        
        <div className='row'>
            {list.map(function(element, i){
                return (
                    <div className='col-xs-4 col-sm-6 col-md-4 col-md-2 col-lg-4 bot-pad' key={i}>
                        <Plate product={ getProduct(element)} />                    
                    </div>
                );
            })}
           
        </div>
        
    )

}

export default PlateList;
