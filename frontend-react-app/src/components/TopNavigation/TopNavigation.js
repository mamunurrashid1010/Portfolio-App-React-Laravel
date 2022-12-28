import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import NavBarScrollLogo from '../../asset/image/programmer.png';
import NavBarLogo from '../../asset/image/programing.png';

class TopNavigation extends Component{
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            NavLogo:[NavBarLogo],
            navBarBackground:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark",
        }
    }

    onScroll=()=>{
        if(window.scrollY >= 100){
            this.setState({navBarTitle:"navTitleScroll", NavLogo:[NavBarScrollLogo], navBarBackground:"navBackgroundScroll", navBarItem:"navItemScroll", navVariant:"light"});
        }
        else if(window.scrollY < 100){
            this.setState({navBarTitle:"navTitle", NavLogo:[NavBarLogo], navBarBackground:"navBackground", navBarItem:"navItem", navVariant:"dark"});
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed="top" className={this.state.navBarBackground} collapseOnSelect expand="lg" bg="dark" variant={this.state.navVariant}>
                        <Navbar.Brand className={this.state.navBarTitle}> <img src={this.state.NavLogo} width="40px" height="30px" /> Mamunur Rashid</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>HOME</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>ABOUT</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>SERVICES</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>COURSES</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>PORTFOLIO</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>CONTACT</Nav.Link>
                    
                        </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
export default TopNavigation;