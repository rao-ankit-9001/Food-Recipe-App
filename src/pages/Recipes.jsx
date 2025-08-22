import { useContext } from "react";
import { recipecontext } from "../context/RecipesContext";
import RecipeCard from "../components/RecipeCard";


function Recipes() {
    const { Recipes } = useContext(recipecontext);


    const AllRecipes = Recipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />

    })
    return (

        <div className="py-5 px-5 flex flex-wrap items-center mx-auto gap-5">
            <>{Recipes.length > 0 ? AllRecipes : (<div className="flex items-center justify-center h-screen w-screen text-3xl text-red-600">"No Recipes Found!"</div>)}</>
        </div>


    )
}


export default Recipes;