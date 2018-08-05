import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = ({match}) =>{

  return(<nav className="main-nav">
    <ul>
      <li><NavLink className="item" to='/query/Milky way'>Milky Way</NavLink></li>
      <li><NavLink className="item" to='/query/landscape'>Landscape</NavLink></li>
      <li><NavLink className="item" to='/query/nature'>Nature</NavLink></li>
    </ul>
  </nav>);
}

export default Navigation;
