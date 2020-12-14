import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'

const Navigation = () => {
    return (
        <div>
            <Navbar dark color='dark' light expand="md">
                <div className= 'container'><NavbarBrand href="/">Treatex Restaurant</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}
export default Navigation;