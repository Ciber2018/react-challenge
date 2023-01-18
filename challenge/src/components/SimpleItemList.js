import {React} from 'react';
import { Link } from "react-router-dom";
import { menuActive } from '../helpers/helper';

const SimpleItemList = (props) => {
    return(
      <li className="menu-item">
        <Link to={props.dir} className="menu-link" onClick={menuActive} id={props.text}>
          <i className={props.icon}></i>
          <div>{props.text}</div>
        </Link>
      </li>     
    );
}


export default SimpleItemList;