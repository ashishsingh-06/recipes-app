import React, {useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import Recipes from './Recipes';
import styled from 'styled-components';

function RecipesList(){

    const [query,setQuery] = useState('');
    const [noResult, setnoResult] = useState(false);
    const [recipes,setRecipes] = useState([]);

    const APP_ID = 'b66495e2';
    const APP_KEY = '3c8b44a4be4b2ff69d4657ca48d58d2f';
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=21&calories=591-722&health=alcohol-free`;

  
    // fetch api data
    const getData = async () =>{
        const result = await axios.get(URL);
        console.log(result);
        if(result.data.hits.length<2){
            setnoResult(true);
        }
        setRecipes(result.data.hits);
    }  

    // handle input change
    const handleChange = (event) =>{
        setQuery(event.target.value);
    }

    // handle form submit
    const handleSubmit = (event) =>{
        event.preventDefault();
        setnoResult(false);
        getData();
    }

    return(
        <section className="container">
            <form onSubmit={handleSubmit}>
                <FormWrapper>
                    <RecipesInputWrapper>
                        <i className="fa fa-search"></i>
                        <RecipesInput placeholder="Search for recipes..." autoComplete="off" onChange={handleChange} value={query}></RecipesInput>
                    </RecipesInputWrapper>
                    <SearchButton type="submit">Search</SearchButton>
                </FormWrapper>
            </form>
            <RecipesContainer>
                {
                    recipes.length!==[] && recipes.map((recipeItem)=>(
                        <Recipes key={uuidv4()} recipeItem={recipeItem}></Recipes>
                    ))
                }
            </RecipesContainer>
            {
                 noResult ? <NoResultsWrapper>
                     <NoResultsTitle>Your search did not match any results</NoResultsTitle>
                     <NoResultsSubTitle>Suggestions:</NoResultsSubTitle>
                     <ul>
                         <NoResultstListItem>Make sure that all words are spelled correctly.</NoResultstListItem>
                         <NoResultstListItem>Try different keywords.</NoResultstListItem>
                     </ul>
                 </NoResultsWrapper> : null
            }
            <div>
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
`

const RecipesInputWrapper = styled.div`
    max-width:100%;
    width:50%;
    border-radius:5px;
    border:1px solid gainsboro;
    background-color:var(--input-background);
`
const RecipesInput = styled.input`
    color:var(--secondary-color);
    padding:10px 0px;
    font-size:16px;
    max-width:100%;
    margin-left:20px;
    width:80%;
    background-color:var(--input-background);
`
const SearchButton = styled.button`
    margin-left:20px;
    font-size:16px;
    color:white;
    background-color:var(--primary-color);
    padding:10px 20px;
    cursor:pointer;
    border-radius:5px;
`

const RecipesContainer = styled.div`
    padding:50px 60px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const TopRecipesHeading = styled.h3`
    font-size:18px;
    margin-bottom:20px;
    text-transform:uppercase;
    color:var(--secondary-color);
`
const TopRecipesRow = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const RecipeItem = styled.span`
    border-radius:5px;
    margin-bottom:8px;
    color:var(--secondary-color);
    border:1px solid gainsboro;
    padding:2px 10px;
    font-size:15px;
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