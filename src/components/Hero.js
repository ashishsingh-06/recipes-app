import React, {useState, useEffect} from 'react';
import { useSpring, useTransition,config,animated } from 'react-spring';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Hero(){
   
    const fadeInHero = useSpring({marginTop:0, from: {marginTop: -400,}});

    return(
        <animated.div style={fadeInHero}>
            <HeroContainer>
                <HeadingWrapper> 
                <HeadingTitle>
                    Choose from thousands of recipes.
                </HeadingTitle>
                <HeadingPara>
                    Get amazing dishes at an instant and cook for your soul.
                </HeadingPara>
                <SignUpButton to='/'>Sign up today <i className="fa fa-arrow-right" aria-hidden='true'></i> </SignUpButton>
                </HeadingWrapper>
            </HeroContainer>
        </animated.div>
    )
}

export default Hero;

const HeroContainer = styled.div`
    max-width:80%;
    margin:0 auto;
    display:flex;
    background-image:url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80');
    background-image:linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,0.30)),url('https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80'); 
    background-size:cover;
    background-position:top;
    background-repeat:none;
    border-radius:15px;
    box-shadow:0px 4px 16px rgba(0,0,0,0.5);
    margin-top:20px;
    margin-bottom: 50px;
    will-change: opacity;
`

const HeadingWrapper = styled.div`
    padding:60px;
    max-width:100%;
    width:50%;
`

const HeadingTitle = styled.h1`
    font-weight:600;
    color:white;
    margin-bottom:20px;
    font-size:50px;
` 
const HeadingPara = styled.p`
    color:white;
    font-size:30px;
    margin-bottom:25px;
`

const SignUpButton = styled(Link)`
    font-size:18px;
    display:inline-block;
    position:relative;
    color:white;
    background-color:var(--primary-color);
    padding:8px 20px;
    box-shadow:0px 4px 8px rgba(0,0,0,0.5);
    border-radius:5px;
    transition: all .1s ease-in;

    &:hover{
        transform:scale(0.98,0.98);
    }
`