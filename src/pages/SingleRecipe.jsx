import { useContext } from "react";
import { recipecontext } from "../context/RecipesContext";
import { useNavigate, useParams } from "react-router-dom";



function SingleRecipe(){
    const {Recipes} = useContext(recipecontext);
    const params = useParams();
    const Navigate = useNavigate();

    const FilterRecipe = Recipes.find(recipe=> String(recipe.id) === String(params.id));
    if(FilterRecipe !== undefined){
         localStorage.setItem("recipe", JSON.stringify(FilterRecipe));
       }
        const recipe = JSON.parse(localStorage.getItem('recipe'));
        
        const {recipeName, image, description, chefName, ingredients, instructions, category} = recipe

    
    return(

      
       <div

      className="flex gap-5 rounded-xl mt-5 mx-10  shadow-sm shadow-white"
    >
      <img
        className="w-[25%] object-cover rounded-2xl"
        src={image}
        alt="img"
      />

      <div className="w-1/2 flex flex-col gap-2">
        <h1 
        className="text-2xl font-bold text-red-600"
        >{recipeName}</h1>
        <p className="text-gray-300">Chef : {chefName}</p>
        <p className="text-gray-300">Category : {category}</p>
        <p className="text-gray-300 text-sm leading-3.5">
            {description}
        </p>
        <p>{ingredients}</p>
        <p>{instructions}</p>

        <div className="flex gap-10 items-center mt-10">
            <button 
        className="bg-green-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
        
        >
         Edit
        </button>
        <button 
        className="bg-red-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
        
        >
          Delete
        </button>
        <button 
        className="bg-gray-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
        onClick={()=>Navigate(-1)}
        >
          Go Back
        </button>
        </div>
      </div>
    </div>

    )
}


export default SingleRecipe;