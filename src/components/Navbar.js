import React from 'react';
import { useSpring, animated } from 'react-spring';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Navbar(){

    return(
        <NavbarContainer>
            <NavbarLeft>
                <Brand to='/'>Recipes</Brand>
                <ul>
                    <NavbarListItem>
                        <NavbarLink to='/'>Home</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink to='/about'>About</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink to='/'>Recipes</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink to='/'>Contact</NavbarLink>
                    </NavbarListItem>

                </ul>
            </NavbarLeft>
            <ul>
                <NavbarListItem>

                </NavbarListItem>
            </ul>
        </NavbarContainer>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    max-width:80%;
    margin:0 auto;
    padding:10px 0;
    display:flex;
` 
const NavbarLeft = styled.div`
    width:50%;
    display:flex;
    justify-content: space-between;
`

const Brand = styled(Link)`
    color: var(--primary-color);
    font-family: var(--font-pacific);
    font-size: 30px;
`
const NavbarListItem = styled.li`
    display:inline-block;
    line-height:3.8;
    margin-left:25px;
`
const NavbarLink = styled(Link)`
    font-size:16px;
    color: var(--secondary-color);
    font-family: var(--font-rubik);

    &:hover{
        color: var(--primary-color);
    }
`