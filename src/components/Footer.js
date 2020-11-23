import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Footer(){
    return(
        <footer>
            <div className="container">
                <FooterWrapper>
                    <Brand to='/'>Recipes</Brand>
                </FooterWrapper>
            </div>
        </footer>
    )
}

export default Footer;

const FooterWrapper = styled.div`
   display:flex;
   justify-content:space-between;
`

const Brand = styled(Link)`
    color: var(--primary-color);
    font-family: var(--font-pacific);
    font-size: 30px;
`