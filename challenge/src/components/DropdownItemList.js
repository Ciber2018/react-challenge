import {React} from 'react';
import { Link } from "react-router-dom";
import { openDropdown } from '../helpers/helper';
import SimpleItemList from '../components/SimpleItemList';


const DropdownItemLis = (props) => {
    return (
      <li className="menu-item">
        <Link to="#" className="menu-link menu-toggle" onClick={openDropdown} id={props.text}>
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div>{props.text}</div>
        </Link>

        <ul className="menu-sub">
          
          <SimpleItemList text='Without menu' icon='none'/>
          <SimpleItemList text='Without navbar' icon='none'/>
          <SimpleItemList text='Container' icon='none'/>
          <SimpleItemList text='Fluid' icon='none'/>
          <SimpleItemList text='Blank' icon='none'/>
                    
        </ul>
      </li>
    );
}

export default DropdownItemLis;