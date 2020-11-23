import React from 'react';
import Hero from './Hero';
import RecipesList from './RecipesList';
import Subscribe from './Subscribe';

function Home(){
    return(
        <>
            <Hero></Hero>
            <RecipesList></RecipesList>
            <Subscribe></Subscribe>
        </>
    )
}

export default Home;