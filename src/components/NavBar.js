import React from 'react';
import resume from '../doc/ponhvathvannCV.pdf';
import '../css/NavBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
  } from 'reactstrap';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div>
            <Navbar color="light" light expand="md" >
            <NavbarBrand href="https://vbobv.github.io/ponhvathvann/" className="logo">ponhvath-vann</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar style={{textAlign: 'center'}}>
                <Nav className="ml-auto" navbar >
                    <NavItem>
                        <AnchorLink href='#Project'>
                            <Button outline color="info">Projects</Button>
                        </AnchorLink>
                    </NavItem>
                    <NavItem >
                        <AnchorLink href='#Contact'>
                            <Button outline color="info">Contact</Button>
                        </AnchorLink>
                    </NavItem>
                    <NavItem>
                        <a href={resume}>
                        <Button outline color="info">Download Résumé</Button>{' '}
                        </a>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default NavBar;