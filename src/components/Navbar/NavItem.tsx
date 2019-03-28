import React,{FunctionComponent} from 'react';
import {NavLink} from 'react-router-dom'
 
interface NavItemProps {
    pathname:string,
    linkContent:string,
}
const NavItem: FunctionComponent<NavItemProps> = ({pathname,linkContent}) => {
  return (
     <li>
          <NavLink to={pathname} activeClassName={"active"}>{linkContent}</NavLink>
     </li>
  )
};

export default NavItem;