import {React} from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
//import Navbar from '../components/Navbar';
import SimpleItemList from '../components/SimpleItemList';
import DropdownItemList from '../components/DropdownItemList';

const PagesLayout = (props) =>{
    return(
        <div className='layoutlayout-wrapper layout-content-navbar'>
        <div className='layout-container'>
            <Aside>
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">CARNES</span>
                </li>
                <SimpleItemList text='Pollo' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/pollo'/>
                
                <SimpleItemList text='Pernil' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/pernil'/>
                <SimpleItemList text='Costilla' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/costilla'/>
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">COMPLEMENTOS</span>
                </li>
                <SimpleItemList text='Arroz' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/arroz'/>
                <DropdownItemList text='Viandas'/>
                
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">COMBOS</span>
                </li>
                <SimpleItemList text='Personales' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/personales'/>
                <SimpleItemList text='Familiares' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/familiares'/>
              
            </Aside>
            <div className='layout-page'>
             <Outlet/>
            </div>
            <div className='layout-overlay layout-menu-toggle'></div>
        </div>

    </div>
    )

}

export default PagesLayout;
