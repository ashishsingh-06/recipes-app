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
                        <NavbarLink to='/'>About</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink to='/'>Recipes</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink to='/'>Contact</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarButton to='/'>Sign Up/Sign In</NavbarButton>
                    </NavbarListItem>
                </ul>
            </NavbarLeft>
            <ul>
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
    
    @media(max-width:480px){
        max-width:90%;
    }
` 
const NavbarLeft = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`

const Brand = styled(Link)`
    color: var(--primary-color);
    font-family: var(--font-pacific);
    font-size: 30px;

    @media(max-width:480px){
        font-size:25px;
    }

`
const NavbarListItem = styled.li`
    display:inline-block;
    line-height:3.8;
    margin-left:25px;

    @media(max-width:780px){
        display:none;   
    }
`
const NavbarLink = styled(Link)`
    font-size:16px;
    color: var(--secondary-color);
    font-family: var(--font-rubik);

    &:hover{
        color: var(--primary-color);
    }
`

const NavbarButton = styled(Link)`
    padding: 4px 8px;
    background-color: var(--primary-color);
    border-radius: 5px;
    color: white;
`