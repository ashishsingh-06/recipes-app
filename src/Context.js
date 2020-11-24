import React, {useState,useEffect} from 'react';
import axios from 'axios';

export const ApiContext = React.createContext();

const Context=(props)=>{

    const [query, setQuery] = useState('');
    const [noResult, setnoResult] = useState(false);
    const [recipes,setRecipes] = useState([]);
    const [recipeItem,setRecipeItem] = useState({});

    const APP_ID = 'b66495e2';
    const APP_KEY = '3c8b44a4be4b2ff69d4657ca48d58d2f';
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=21&calories=591-722&health=alcohol-free`;

    // fetch api data
    const getData = async () =>{
        const result = await axios.get(URL);
        console.log(result);
        if(result.data.hits.length<1){
            setnoResult(true);
        }
        setRecipes(result.data.hits);
    } 

    const findRecipe=(image)=>{
        const recipe = recipes.find((item)=>item.recipe.image===image);
        setRecipeItem(recipe);
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
        <ApiContext.Provider value={{recipes,handleSubmit,handleChange,query,noResult,findRecipe,recipeItem}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default Context;