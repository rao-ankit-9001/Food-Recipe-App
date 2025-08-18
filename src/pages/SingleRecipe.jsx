import { useContext, useState } from "react";
import { recipecontext } from "../context/RecipesContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";


function SingleRecipe() {
  const { Recipes, setRecipes } = useContext(recipecontext);
  const params = useParams();
  const Navigate = useNavigate();
  const [isActive, setIsActive] = useState(false)

  
   const FilterRecipe = Recipes.find(recipe => String(recipe.id) === String(params.id));
  if (FilterRecipe !== undefined) {
    localStorage.setItem("recipe", JSON.stringify(FilterRecipe));
  }

  const recipe = JSON.parse(localStorage.getItem('recipe'));
  console.log(FilterRecipe.id);
 
  const { recipeName, image, description, chefName, ingredients, instructions, category } = recipe;
  // console.log(recipeName);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues:{
      recipeName : recipeName,
      image : image,
      chefName : chefName,
      description : description,
      ingredients : ingredients,
      instruction: instructions,
      category : category
    }
  });

 
  // Delete Recipe handler

  const deleteRecipe = (id) => {
    const updatedRecipe = Recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipe);
    localStorage.removeItem('recipe')
    Navigate('/recipes');
    toast.error('Recipe deleted successfully');

  }

  // update Recipe handler
  const updatedRecipe = (recipe) => {
    const id = params.id;
    const index = Recipes.findIndex(recipe => recipe.id === id)

    const copyData = [...Recipes];
    copyData[index] = { ...copyData[index], ...recipe};
    console.log(copyData);
    
    
    setRecipes(copyData);
    setIsActive(false);
    Navigate('/recipes');
    toast.success('Recipe update successfully')

  }

  return (

    <div className="flex items-center justify-center relative">

      {/* Recipe edite form */}
      <div className={`bg-white flex flex-col items-center justify-center gap-5 w-[50%] rounded-2xl shadow-xl shadow-white pt-10 my-5 mx-20 py-5 absolute ${isActive ? 'block' : 'hidden'} z-10`}>

        {/* form colse button */}
        <button
          onClick={() => {
            setIsActive(false)
          }}
          className="text-red-700 absolute top-2 right-4 font-bold text-2xl cursor-pointer hover:scale-105 active:scale-100 duration-200"><IoMdClose /></button>

        <form
          className='flex flex-col gap-5 w-1/2 text-black'
          onSubmit={handleSubmit(updatedRecipe)}
        >
          <input
            className="outline-0 border-b p-1"
            {...register('recipeName')}
            type="text"
            placeholder='Recipe Name'
          />

          <input
            className="outline-0 border-b p-1"
            {...register('image')}
            type="url"
            placeholder='Recipe image(Url)'
          />

          <input
            className="outline-0 border-b p-1"
            {...register('chefName')}
            type="text"
            placeholder='Chef Name'
          />

          <textarea
            className='outline-0 border-b'
            {...register('description')}
            placeholder='Describe For Recipe'
          />

          <textarea
            className='outline-0 border-b'
            {...register('ingredients')}
            placeholder='Ingredients For Recipe(Seperated by comma)'
          />

          <textarea
            className='outline-0 border-b'
            {...register('instructions')}
            placeholder='Write Intructions'
          />

          <select
            className='bg-white'
            {...register('category')}
          >
            <option value="cat1">category 1</option>
            <option value="cat2">category 2</option>
            <option value="cat3">category 3</option>
          </select>

          <button
            className='bg-red-400 text-white text-xl font-bold rounded-xl cursor-pointer'
          >Update Recipe</button>
        </form>
      </div>

      {/* Render single Recipe */}
      <div

        className="flex gap-5 rounded-xl mt-5 mx-10  shadow-sm shadow-white"
      >
        <img
          className="w-100 h-100 object-cover rounded-2xl"
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
            Description : {description}
          </p>
          <p>Ingredients : {ingredients}</p>
          <p>Instructions : {instructions}</p>

          <div className="flex gap-10 items-center mt-10">
            <button
              onClick={() => {
                setIsActive(true);
              }}
              className="bg-green-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"

            >
              Edit
            </button>
            <button
              onClick={() => deleteRecipe(params.id)}
              className="bg-red-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"

            >
              Delete
            </button>
            <button
              className="bg-gray-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
              onClick={() => {
                localStorage.removeItem('recipe');
                Navigate(-1);
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}


export default SingleRecipe;