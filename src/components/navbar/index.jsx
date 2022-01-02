import React from 'react';
import mrc from "../../assets/mrc.jpg";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarelements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <div className="logo">
            <img src={mrc} alt={mrc} width={100} />
        </div>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/help' activeStyle>
            Help
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/reg'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;