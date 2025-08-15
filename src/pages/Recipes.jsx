import { useContext } from "react";
import { recipecontext } from "../context/RecipesContext";


function Recipes(){
const {Recipes} = useContext(recipecontext);
console.log(Recipes);

const AllRecipes = Recipes.map(recipes=>{
    console.log(recipes);
    
      return  <ul>
            <li>{recipes.title}</li>
            <li><img src="" alt="" /></li>
            <li>{recipes.chefname}</li>
            <li>{recipes.description}</li>
            <li>{recipes.ingredients}</li>
            <li>{recipes.category}</li>
        </ul>
})
    return(
        
            <>
                <h1>{AllRecipes}</h1>
            </>


    )
}


export default Recipes;