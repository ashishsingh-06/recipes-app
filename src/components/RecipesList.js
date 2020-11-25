import React, {useState,useEffect, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import Recipes from './Recipes';
import styled from 'styled-components';
import {ApiContext} from '../Context';

function RecipesList(){

    const context = useContext(ApiContext);
    
    return(
        <section className="container">
            <form onSubmit={context.handleSubmit}>
                <FormWrapper>
                    <RecipesInputWrapper>
                        <i className="fa fa-search"></i>
                        <RecipesInput placeholder="Search for recipes..." autoComplete="off" onChange={context.handleChange} value={context.value}></RecipesInput>
                    </RecipesInputWrapper>
                    <SearchButton type="submit">Search</SearchButton>
                </FormWrapper>
            </form>
            <RecipesContainer>
                {
                    context.recipes.length!==[] && context.recipes.map((recipeItem)=>(
                        <Recipes key={uuidv4()} recipeItem={recipeItem} onClick={context.findRecipe}></Recipes>
                    ))
                }
            </RecipesContainer>
            {
                 context.noResult ? <NoResultsWrapper>
                     <NoResultsTitle>Your search did not match any results</NoResultsTitle>
                     <NoResultsSubTitle>Suggestions:</NoResultsSubTitle>
                     <ul>
                         <NoResultstListItem>Make sure that all words are spelled correctly.</NoResultstListItem>
                         <NoResultstListItem>Try different keywords.</NoResultstListItem>
                     </ul>
                 </NoResultsWrapper> : null
            }
            <div data-aos="fade-right">
                <TopRecipesHeading>Top searches today</TopRecipesHeading>
                <TopRecipesRow>
                    <RecipeItem>Chicken</RecipeItem>
                    <RecipeItem>Pizza</RecipeItem>
                    <RecipeItem>Casserole</RecipeItem>
                    <RecipeItem>Chocolate Cake</RecipeItem>
                    <RecipeItem>MeatLoaf</RecipeItem>
                    <RecipeItem>Cookies</RecipeItem>
                    <RecipeItem>Cheese Burger</RecipeItem>
                    <RecipeItem>Chocolate Brownies</RecipeItem>
                </TopRecipesRow>
            </div>
        </section>
    )
}

export default RecipesList;


const FormWrapper = styled.div`
    display:flex;
    justify-content:center;

    @media(max-width:480px){
        display:block;
    }

    @media(min-width:481px) and (max-width:768px){
        justify-content:space-between;
    }

`

const RecipesInputWrapper = styled.div`
    max-width:100%;
    width:50%;
    border-radius:5px;
    border:1px solid gainsboro;
    background-color:var(--input-background);

    @media(max-width:480px){
        width:100%;
        margin-bottom:10px;
    }

    @media(min-width:481px) and (max-width:768px){
        width:75%;
    }

`
const RecipesInput = styled.input`
    color:var(--secondary-color);
    padding:10px 0px;
    font-size:16px;
    max-width:100%;
    margin-left:20px;
    width:80%;
    background-color:var(--input-background);

    @media(max-width:768px){
        margin-left:0px;
        padding:10px 10px;
    }
`
const SearchButton = styled.button`
    margin-left:20px;
    font-size:16px;
    color:white;
    background-color:var(--primary-color);
    padding:10px 20px;
    cursor:pointer;
    border-radius:5px;

    @media(max-width:480px){
        margin-left:0px;
        width:100%;
    }

`

const RecipesContainer = styled.div`
    padding:50px 0px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;

    @media (min-width:1680px){
        justify-content:center;
    }

`
const TopRecipesHeading = styled.h3`
    font-size:18px;
    margin-bottom:20px;
    text-transform:uppercase;
    color:var(--secondary-color);

    @media(max-width:700px){
        text-align:center;
    }
`
const TopRecipesRow = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

    @media(max-width:700px){
        justify-content:center;
    }
`
const RecipeItem = styled.span`
    border-radius:5px;
    margin-bottom:8px;
    color:var(--secondary-color);
    border:1px solid gainsboro;
    padding:2px 10px;
    font-size:15px;

    @media(max-width:700px){
        margin-right:8px;
    }
`
const NoResultsWrapper = styled.div`
    padding:0px 10px;
    margin-bottom:100px;
`

const NoResultsTitle = styled.h3`
    font-size:20px;
    font-weight:400;
    margin-bottom:20px;
    color:var(--secondary-color);
`
const NoResultsSubTitle = styled.h4`
    font-size:18px;
    font-weight:400;
    margin-bottom:5px;
    color:var(--secondary-color);
`
const NoResultstListItem = styled.li`
    list-style:circle;
    font-weight:lighter;
    margin-bottom:5px;
`