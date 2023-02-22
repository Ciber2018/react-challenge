import {React, useContext} from 'react';
import { Link } from "react-router-dom";
import ListPlateContext from '../context/ListPlateContext';

const SimpleItemList = (props) => {
  const {updatePlateList} = useContext(ListPlateContext);   
    return(
      <li className="menu-item">
        <Link to={props.dir} className="menu-link" onClick={(e)=>updatePlateList(e,props.text)} id={props.text}>
          <i className={props.icon}></i>
          <div>{props.text}</div>
        </Link>
      </li>     
    );
}


export default SimpleItemList;