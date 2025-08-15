import { createContext, useState } from "react";

export const recipecontext = createContext(null);

function RecipeContext(props){

    const [Recipes, setRecipes] = useState([]);
    return(
        <recipecontext.Provider value={{Recipes, setRecipes}}>
            {props.children}
        </recipecontext.Provider>
    )
    
}

export default RecipeContext;