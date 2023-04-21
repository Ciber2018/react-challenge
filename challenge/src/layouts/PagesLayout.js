import {React, useState} from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
import SimpleItemList from '../components/SimpleItemList';
import { ListPlateProvider } from '../context/ListPlateContext';
import Dropdown from '../components/Dropdown';

const PagesLayout = (props) =>{
  const [active,setActive] = useState('');
  
    return(
      <ListPlateProvider>
        <div className='layoutlayout-wrapper layout-content-navbar'>
        <div className='layout-container'>
            <Aside>
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">CARNES</span>
                </li>
                <SimpleItemList text='Pollo' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/pollo' active={active}  handleActive={()=> setActive('Pollo')}/>
                
                <SimpleItemList text='Pernil' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/pernil' active={active} handleActive={()=> setActive('Pernil')}/>
                <SimpleItemList text='Costilla' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/costilla' active={active} handleActive={()=> setActive('Costilla')}/>
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">COMPLEMENTOS</span>
                </li>
                <SimpleItemList text='Arroz' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/arroz' active={active} handleActive={()=> setActive('Arroz')}/>
                
                <Dropdown menuItem={true} text='Viandas' active={active}>
                  <SimpleItemList text='Yuca' icon='none' dir='/order/yuca' active={active} handleActive={()=> setActive('Yuca')}/>
                  <SimpleItemList text='Batata' icon='none' dir='/order/batata' active={active} handleActive={()=> setActive('Batata')}/>                 
                </Dropdown>
                
               {/* <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">COMBOS</span>
                </li>
                <SimpleItemList text='Personales' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/personales' active={active} handleActive={()=> setActive('Personales')}/>
    <SimpleItemList text='Familiares' icon='menu-icon tf-icons bx bx-home-circle' dir='/order/familiares' active={active} handleActive={()=> setActive('Familiares')}/>*/}
              
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
