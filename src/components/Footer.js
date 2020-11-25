import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Footer(){
    return(
        <footer data-aos="fade-right">
            <div className="container">
                <FooterWrapper>
                    <Brand to='/'>Recipes</Brand>
                    <SocialMediaWrapper>
                        <SocialMediaLinks href='https://github.com/ashishsingh-06/recipes-app' target="_blank">
                            <i className="fa fa-github social-icons" aria-hidden="true"></i>
                        </SocialMediaLinks>
                        <SocialMediaLinks href="https://www.linkedin.com/in/ashish-singh-06/" target="_blank">
                            <i className="fa fa-linkedin social-icons" aria-hidden="true"></i>
                        </SocialMediaLinks>
                        <SocialMediaLinks href="https://codepen.io/06ashish" target="_blank">
                            <i className="fa fa-codepen social-icons" aria-hidden="true"></i>
                        </SocialMediaLinks>
                    </SocialMediaWrapper>
                </FooterWrapper>
                <CopyRight className="madeby">Made By <SocialMediaLinks href="https://www.linkedin.com/in/ashish-singh-06/" target="_blank">Ashish Singh.</SocialMediaLinks></CopyRight>
                <CopyRight>
                    Design inspired by <SocialMediaLinks href="https://unbound.studio" target="_blank">Unbound Studio.</SocialMediaLinks> 
                </CopyRight>
            </div>
        </footer>
    )
}

export default Footer;

const FooterWrapper = styled.div`
   margin-bottom:20px;
   display:flex;
   justify-content:space-between;
`

const Brand = styled(Link)`
    color: var(--primary-color);
    font-family: var(--font-pacific);
    font-size: 30px;

    @media(max-width:480px){
        font-size:25px;
    }
`
const SocialMediaWrapper = styled.div`
    display:flex;
    align-items:center;
`
const SocialMediaLinks = styled.a`
    color:var(--secondary-color);
`
const CopyRight = styled.p`
    color:var(--secondary-color);
`