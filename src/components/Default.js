import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Default(){
    return(
        <> 
        <div className="container">
            <ContainerContent>
                <NotFoundCode>404</NotFoundCode>
                <NotFoundText>
                    Uh oh! Looks like you got lost.
                    Please Go back to the homepage!
                </NotFoundText>
                <Link to='/'>
                     <HomeButton>Home</HomeButton>
                </Link>
            </ContainerContent>
        </div>
        </>
    )
}

export default Default;



const ContainerContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:60vh;
`

const NotFoundCode = styled.span`
    color:var(--primary-color);
    font-size:80px;
    margin-bottom:20px;
`

const NotFoundText = styled.p`
    text-align:center;
    font-size:20px;
    margin-bottom:20px;
`

const HomeButton = styled.button`
    padding:5px 10px;
    border-radius:5px;
    font-size:18px; 
    color:white;
    background-color:var(--primary-color);
`   

