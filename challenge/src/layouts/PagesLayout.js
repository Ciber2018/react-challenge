import {React} from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
import SimpleItemList from '../components/SimpleItemList';
import { ListPlateProvider } from '../context/ListPlateContext';
import Dropdown from '../components/Dropdown';

const PagesLayout = (props) =>{
    return(
      <ListPlateProvider>
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
                
                <Dropdown menuItem={true} text='Viandas'>
                  <SimpleItemList text='Without menu' icon='none' dir='/order/without-menu'/>
                  <SimpleItemList text='Without navbar' icon='none' dir='/order/without-navbar'/>
                  <SimpleItemList text='Container' icon='none' dir='/order/container'/>
                  <SimpleItemList text='Fluid' icon='none' dir='/order/fuid'/>
                  <SimpleItemList text='Blank' icon='none' dir='/order/blank'/>
                </Dropdown>
                
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
    </ListPlateProvider>
    )

}

export default PagesLayout;
