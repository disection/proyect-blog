import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  
   
  } from 'reactstrap';

const ComponentNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar expand='md'>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to='/post-list' className='nav-link'>Blog </Link>             
            </NavItem>
            <NavItem>
              <Link to='post-detail' className='nav-link'> Post </Link>             
            </NavItem>
            <NavItem>
              <Link to='/new-post' className='nav-link'> New Post </Link>             
            </NavItem>
           
            
          </Nav>
         
        </Collapse>
      </Navbar>)
}
export default ComponentNavBar