import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
AOS.init();

function Subscribe(){
    return(
        <section data-aos="fade-right">
            <div className="container">
                <SubscribeWrapper>
                    <SubscribePara>
                        Be the first to know about the latest deals, receive new trending recipes & more!
                    </SubscribePara>
                    <form>
                        <SubscribeInput placeholder="Email"></SubscribeInput>
                        <SubscribeButton type="button">Subscribe</SubscribeButton>
                    </form>
                </SubscribeWrapper>
            </div>
        </section>
    )
}

export default Subscribe;

const SubscribeWrapper = styled.div`
    padding:50px 100px;
    text-align:center;
`
const SubscribePara = styled.p`
    color:var(--secondary-color);
    font-size:25px;
    margin-bottom:20px;
`
const SubscribeInput = styled.input`
    color:var(--secondary-color);
    padding:10px 20px;
    font-size:18px;
    max-width:50%;
    width:50%;
    border-radius:5px;
    border:1px solid gainsboro;
    background-color:var(--input-background);
`
const SubscribeButton = styled.button`
    margin-left:20px;
    font-size:18px;
    color:white;
    background-color:var(--primary-color);
    padding:10px 20px;
    cursor:pointer;
    border-radius:5px;
`