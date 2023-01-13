import {React} from 'react';
import { Link } from "react-router-dom";

const SimpleItemList = (props) => {
    return(
      <li className="menu-item">
        <Link to="#" className="menu-link">
          <i className="menu-icon tf-icons bx bx-home-circle"></i>
          <div>{props.text}</div>
        </Link>
      </li>     
    );
}


export default SimpleItemList;