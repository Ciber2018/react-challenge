import {React} from 'react';
import { Link } from "react-router-dom";


const DropdownItemLis = (props) => {
    return (
      <li className="menu-item">
        <Link to="javascript:void(0);" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Layouts">{props.text}</div>
        </Link>

        <ul className="menu-sub">
          <li className="menu-item">
            <a href="layouts-without-menu.html" className="menu-link">
              <div data-i18n="Without menu">Without menu</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-without-navbar.html" className="menu-link">
              <div data-i18n="Without navbar">Without navbar</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-container.html" className="menu-link">
              <div data-i18n="Container">Container</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-fluid.html" className="menu-link">
              <div data-i18n="Fluid">Fluid</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-blank.html" className="menu-link">
              <div data-i18n="Blank">Blank</div>
            </a>
          </li>
        </ul>
      </li>
    );
}

export default DropdownItemLis;