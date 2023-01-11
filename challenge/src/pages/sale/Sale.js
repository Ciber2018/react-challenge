import {React} from 'react';
import Aside from '../../components/Aside';
import Navbar from '../../components/Navbar';



const Sale = () =>{
    return (
        <div className='layoutlayout-wrapper layout-content-navbar'>
            <div className='layout-container'>
                <Aside/>
                <div className='layout-page'>
                   <Navbar/> 
                </div>
                <div className='layout-overlay layout-menu-toggle'></div>
            </div>

        </div>
    )
}

export default Sale;