import { useContext } from "react";
import { recipecontext } from "../context/RecipesContext";
import RecipeCard from "../components/RecipeCard";


function Recipes() {
    const { Recipes } = useContext(recipecontext);

    const AllRecipes = Recipes.map(recipe => {
      return  <RecipeCard key={recipe.id} recipe={recipe}/>
       
    })
    return (

        <div className="py-5 px-5 flex flex-wrap items-center gap-5">
            <>{AllRecipes}</>
        </div>


    )
}


export default Recipes;