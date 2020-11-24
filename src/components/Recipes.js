import React,{useEffect,useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ApiContext} from '../Context';

function Recipes(props){
    const context = useContext(ApiContext);
    const {image,label,source} = props.recipeItem.recipe;
    
    return(
        
            <RecipesCard>
                    <RecipesCardBody onClick={()=>context.findRecipe(image)}>
                        <Link to='/details'>
                            <RecipesImageWrapper>
                                <RecipesImage src={image}></RecipesImage>
                            </RecipesImageWrapper>
                            <RecipesOverlay></RecipesOverlay>
                        </Link>
                    </RecipesCardBody>
                
                <RecipesFooter>
                    <RecipesTitle>{label}</RecipesTitle>
                    <RecipesSource>by {source}</RecipesSource>
                </RecipesFooter>
            </RecipesCard>
    )   
}

export default Recipes;

const RecipesCard = styled.div`
    margin-bottom:40px;
    width:250px;
    cursor:pointer;
`
const RecipesCardBody = styled.div`
    position:relative;
`
const RecipesOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);

    &:hover{
        background-color: rgba(0, 0, 0, 0.31);
    }
`

const RecipesImageWrapper = styled.div`
    width:100%;
    border-radius:10px;
    height:150px;
    object-fit:cover;
    overflow:hidden;
`
const RecipesImage = styled.img`
    width:100%;
    height:auto;
    object-fit:contain;
`

const RecipesFooter = styled.div`
    padding:12px 0px 5px 0px; 
`

const RecipesTitle = styled.h3`
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    font-size:16px;
    margin-bottom:5px;
    font-weight:normal;
    color: var(--secondary-color);
`
const RecipesSource = styled.h4`
    font-size:14px;
    font-weight:normal;
    color: var(--sub-heading-color);
`