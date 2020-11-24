import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid4} from 'uuid';
import styled from 'styled-components';
import {ApiContext} from '../Context';

function Details(){

    const context = useContext(ApiContext); 
    const {image,label,source,calories,ingredientLines} = context.recipeItem.recipe;
    let totalTime = Math.floor(Math.random()*80);
    const yields = context.recipeItem.recipe.yield;

    return(
        <div className="container">
            <DetailsButtonWrapper>
                <Link to="/">
                    <BackButton><i className="fa fa-arrow-left"></i> Go Back</BackButton>
                </Link>
            </DetailsButtonWrapper>
            <DetailsWrapper>
                <DetailsRow>
                    <ImageContainer>
                        <DetailsImage src={image}></DetailsImage>
                    </ImageContainer>
                    <DetailsColumn>
                        <DetailsLabel>{label}</DetailsLabel>
                        <DetailsSource>by {source}</DetailsSource>
                        <SubDetailsRow>
                            <SubDetailsColumn className="border-right">
                                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                <SubDetailsHeading>Total Time</SubDetailsHeading>
                                <SubDetailsSpan>{totalTime} mins</SubDetailsSpan>
                            </SubDetailsColumn>
                            <SubDetailsColumn className="border-right">
                                <i className="fa fa-lemon-o" aria-hidden="true"></i>
                                <SubDetailsHeading>Calories</SubDetailsHeading>
                                <SubDetailsSpan>{Math.floor(calories)} kcal</SubDetailsSpan>
                            </SubDetailsColumn>
                            <SubDetailsColumn>
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <SubDetailsHeading>Yields</SubDetailsHeading>
                                <SubDetailsSpan>{yields} users</SubDetailsSpan>
                            </SubDetailsColumn>
                        </SubDetailsRow>
                    </DetailsColumn>
                </DetailsRow>
            </DetailsWrapper>
            <IngredientsContainer>
                <HowToMakeWrapper>
                    <IngredientsHeading>How to make it</IngredientsHeading>
                    <ul>
                        <HowToMakeItListItem>Preheat the oven to gas 3, 170°C, fan 150°C. Grease a 2.5-3ltr ovenproof dish with a little butter. Use a small, sharp knife to halve the vanilla pod lengthways, then scrape out the seeds. </HowToMakeItListItem>
                        <HowToMakeItListItem>
                        Put the seeds and halved pod (or paste or extract) in a large saucepan with the milk and sugar. Warm over a medium heat for 4-5 mins to scald the milk – it should be steaming, and just bubbling around the edge. Add the rice, reduce the heat to low and stir for 1 min.
                        </HowToMakeItListItem>
                        <HowToMakeItListItem>
                        Pour the rice mixture into the baking dish. Dot with the butter, if using, then top with half the nutmeg. We’ve kept our rice pudding classic, but you can add a flavour if you like. For a chocolatey twist, whisk 25g sugar and 30g cocoa into the milk before scalding, then bake.
                        </HowToMakeItListItem>
                        <HowToMakeItListItem>
                        Bake for 30 mins, then remove from the oven and stir well, adding the remaining nutmeg. Stirring the pudding halfway through distributes the flavours and helps the rice grains to cook evenly. But don’t stir more than once if you want a good skin to form on top.
                        </HowToMakeItListItem>
                    </ul>
                </HowToMakeWrapper>
                <IngredientsWrapper>
                    <IngredientsHeading>Ingredients</IngredientsHeading>
                    <ul>
                        {
                            ingredientLines.map((item)=>(
                                <IngredientListItem key={uuid4()}>{item}</IngredientListItem>
                            ))   
                        }
                    </ul>
                </IngredientsWrapper>
            </IngredientsContainer>
            
        </div>
    )
}

// button
const DetailsButtonWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
    padding:30px 0px;
`

const BackButton = styled.button`
    padding:5px 10px;
    border-radius:5px;
    font-size:16px;
    color:white;
    background-color:var(--primary-color);
`

// sub list 

const SubDetailsRow=styled.div`
    display:flex;
    padding:50px 0px;
    text-align:center;
    border-bottom:1px solid gainsboro;
`

const SubDetailsColumn=styled.div`
    display:flex;
    flex-basis:100%;
    flex:1;
    flex-direction:column;
`

const SubDetailsHeading=styled.h5`
    font-size:17px;
    color:var(--secondary-color);
    margin-bottom:5px;
    font-weight:normal;
`
const SubDetailsSpan=styled.span`
    font-size:16px;
    color:var(--sub-heading-color);
`

// details

const DetailsWrapper = styled.div`
    padding:20px 0px;
`

const DetailsRow = styled.div`
    display:flex;
`
const ImageContainer = styled.div`
    width:50%;
`
const DetailsImage = styled.img`
    max-width:100%;
    border-radius:15px;
`
const DetailsColumn = styled.div`
    padding:30px 50px;
    width:100%;
`

const DetailsLabel = styled.h1`
    font-size:35px;
    margin-bottom:10px;
    font-weight:normal;
    color: var(--solid-black);
`
const DetailsSource = styled.h3`
    font-weight:normal;
    color:var(--sub-headding-color);
`

// ingredients

const IngredientsContainer = styled.div`
    display:flex;
    padding:50px 0px;
`

const HowToMakeWrapper = styled.div`
    padding-right:150px;
    width:70%;
`

const IngredientsWrapper = styled.div`
    width:30%;
`

const IngredientsHeading = styled.h4`
    font-size:25px;
    margin-bottom:20px;
    color:var(--secondary-color);
    font-weight:600;
`

const IngredientListItem = styled.li`
    font-size:18px;
    padding:20px 0px;
    color:var(--secondary-color);
    font-weight:normal;
    border-bottom:1px solid gainsboro;

    &:last-child{
        border-bottom:0px;
    }
`
const HowToMakeItListItem = styled(IngredientListItem)``

export default Details;