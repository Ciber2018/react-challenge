import {React, useContext} from 'react';
import ListPlateContext from '../context/ListPlateContext';
import Plate from './Plate';

const PlateList = () =>{
    const {list} = useContext(ListPlateContext);
    console.log(list);
    return(
        
        <div className='row'>
            {list.map(function(element, i){
                return (
                    <div className='col-sm-2 col-md-2 col-md-2 col-lg-2' key={i}>
                        <Plate order={element} />                    
                    </div>
                );
            })}
           
        </div>
        
    )

}

export default PlateList;
