import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
  NavbarText
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFaceSadCry} from '@fortawesome/free-solid-svg-icons' 

export default function Main(props) {
  return (
    <div>
      <Navbar color="light" fixed="top" light expand={true}>
        <NavbarBrand href="/">{props.judulPage}</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/index">Film Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About Us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><FontAwesomeIcon icon={faFaceSadCry}></FontAwesomeIcon>{props.developBy}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}