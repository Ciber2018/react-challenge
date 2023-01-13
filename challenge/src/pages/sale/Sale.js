import {React} from 'react';
import Aside from '../../components/Aside';
import Navbar from '../../components/Navbar';
import SimpleItemList from '../../components/SimpleItemList';
import DropdownItemList from '../../components/DropdownItemList';



const Sale = () =>{
    return (
        <div className='layoutlayout-wrapper layout-content-navbar'>
            <div className='layout-container'>
                <Aside>
                    <li className="menu-header small text-uppercase">
                      <span className="menu-header-text">CARNES</span>
                    </li>
                    <SimpleItemList text='Pollo'/>
                    <SimpleItemList text='Pernil'/>
                    <SimpleItemList text='Costilla'/>
                    <li className="menu-header small text-uppercase">
                      <span className="menu-header-text">COMPLEMENTOS</span>
                    </li>
                    <SimpleItemList text='Arroz'/>
                    <DropdownItemList text='Viandas'/>
                    <DropdownItemList text='Bebidas'/>
                    <DropdownItemList text='Otros'/>
                    <li className="menu-header small text-uppercase">
                      <span className="menu-header-text">COMBOS</span>
                    </li>
                    <SimpleItemList text='Personales'/>
                    <SimpleItemList text='Familiares'/>
                  
                </Aside>
                <div className='layout-page'>
                   <Navbar/> 
                </div>
                <div className='layout-overlay layout-menu-toggle'></div>
            </div>

        </div>
    )
}

export default Sale;