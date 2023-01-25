import {React} from 'react';
import { useParams } from 'react-router-dom';

const Plate = () => {
    let params = useParams();
    
    return(
        <>
            <h1>{params.product}</h1>
        </>
    )
}

export default Plate;