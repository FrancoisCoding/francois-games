import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                {/* A big thank you to the folks at Vexels for designing this wonderful icon set — we sincerely appreciate your time and efforts! Keep up the fantastic work! */}
                <Link to='/'>
                <img src={logo} alt="commerce" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            products
                        </Link>
                    </li>
                </ul>   
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                        cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link {
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`