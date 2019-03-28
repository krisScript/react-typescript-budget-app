import React,{FunctionComponent} from 'react';
import NavItem from './NavItem';

const Navbar: FunctionComponent = () => {
  return (
     <ul className="navbar">
     <NavItem pathname={'/'} linkContent={'Home'}/>
     <NavItem pathname={'/add-expense'} linkContent={'Add expense'}/>
     </ul>
  )
};

export default Navbar;