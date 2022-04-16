import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { Brand } from './Header-components';

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Navbar
      className="navbar"
      expand="md"
      dark
    >
      <Brand />
      <NavbarToggler aria-label="Menu" onClick={toggleMenu} />
      <Collapse navbar isOpen={menuOpen}>
        <Nav
          navbar
          className="nav-container"
        >
          <NavItem>
            <NavLink href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="about">
              Sobre mí
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="project">
              Proyectos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="contact">
              Contacto
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navbar;