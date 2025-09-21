import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

export default function Parent() {
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const APICall = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/recipes')
            setRecipes(res.data.recipes)
            console.log(res.data)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        APICall();
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div>
            <h1>Recipes</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">  {recipes.map((recipe) =>
                <Card
                    key={recipe.id}
                    title={recipe.name}
                    image={recipe.image}
                    description={recipe.instructions}
                    mealType={recipe.mealType}
                    cuisine={recipe.cuisine}
                    difficulty={recipe.difficulty}
                    ingredients = {recipe.ingredients}
                    tags = {recipe.tags}
                    review={recipe.reviewCount}
                    rating={recipe.rating}
                />
            )
            }</div>

        </div>
    )
}
