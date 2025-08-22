import { useContext, useEffect, useState } from "react";
import { recipecontext } from "../context/RecipesContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

function SingleRecipe() {
  const { Recipes, setRecipes } = useContext(recipecontext);
  const { id } = useParams();
  const Navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [favroite, setFavroite] = useState(
    JSON.parse(localStorage.getItem('fav')) || []
  );
  const recipe = Recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-red-500 font-bold">
        Recipe not found
      </div>
    );
  }
  const { recipeName, image, description, chefName, ingredients, instructions, category } = recipe;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      recipeName,
      image,
      chefName,
      description,
      ingredients,
      instructions,
      category,
    },
  });




  const favroiteHandler = () => {
    // setFavroite([...favroite, recipe]);
    let copyData = [...favroite];
    copyData.push(recipe);
    setFavroite(copyData);
    localStorage.setItem('fav', JSON.stringify(copyData));
  }

  const unfavroiteHandler = () => {
    const filterfav = favroite.filter((f) => f.id !== recipe.id);
    setFavroite(filterfav);
    localStorage.setItem('fav', JSON.stringify(filterfav));
  }


  const deleteRecipe = (id) => {
    const updatedRecipe = Recipes.filter((recipe) => recipe.id !== id);
    const favFilter = favroite.filter(recipe => recipe.id !== id);
    setFavroite(favFilter);
    localStorage.setItem('fav', JSON.stringify(favFilter));
    setRecipes(updatedRecipe);
    toast.error("Recipe deleted successfully");
    Navigate("/recipes");
  };

  const updatedRecipe = (data) => {
    const index = Recipes.findIndex((r) => r.id === id);
    const favIndex = favroite.findIndex(recipe => recipe.id === id);
    const copyFav = [...favroite];
    copyFav[favIndex] = { ...copyFav[favIndex], ...data };
    setFavroite(copyFav);
    localStorage.setItem('fav', JSON.stringify(copyFav));
    const copyData = [...Recipes];
    copyData[index] = { ...copyData[index], ...data };

    setRecipes(copyData);
    setIsActive(false);
    toast.success("Recipe updated successfully");
    Navigate("/recipes");
  };



  // useEffect(()=>{
  //   console.log('page rerender');

  // },[favroite])
  return (
    <div className="flex items-center justify-center relative">
      <div
        className={`bg-white flex flex-col items-center justify-center gap-5 w-[50%] rounded-2xl shadow-xl shadow-white pt-10 my-5 mx-20 py-5 absolute ${isActive ? "block" : "hidden"
          } z-10`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="text-red-700 absolute top-2 right-4 font-bold text-2xl cursor-pointer hover:scale-105 active:scale-100 duration-200"
        >
          <IoMdClose />
        </button>

        <form
          className="flex flex-col gap-5 w-1/2 text-black"
          onSubmit={handleSubmit(updatedRecipe)}
        >
          <input
            className="outline-0 border-b p-1"
            {...register("recipeName")}
            type="text"
            placeholder="Recipe Name"
          />
          <input
            className="outline-0 border-b p-1"
            {...register("image")}
            type="url"
            placeholder="Recipe image(Url)"
          />
          <input
            className="outline-0 border-b p-1"
            {...register("chefName")}
            type="text"
            placeholder="Chef Name"
          />
          <textarea
            className="outline-0 border-b"
            {...register("description")}
            placeholder="Describe Recipe"
          />
          <textarea
            className="outline-0 border-b"
            {...register("ingredients")}
            placeholder="Ingredients (comma separated)"
          />
          <textarea
            className="outline-0 border-b"
            {...register("instructions")}
            placeholder="Write Instructions"
          />
          <select className="bg-white" {...register("category")}>
            <option value="cat1">category 1</option>
            <option value="cat2">category 2</option>
            <option value="cat3">category 3</option>
          </select>
          <button className="bg-red-400 text-white text-xl font-bold rounded-xl cursor-pointer">
            Update Recipe
          </button>
        </form>
      </div>

      <div className="flex gap-5 rounded-xl mt-5 mx-10 shadow-sm shadow-white relative">
        {favroite.find((f) => f.id === recipe.id) ? (
          <i
            onClick={unfavroiteHandler}
            className="text-2xl text-amber-300 absolute right-2 ri-star-fill cursor-pointer">
          </i>) :
          (<i
            onClick={favroiteHandler}
            className="text-2xl absolute right-2 ri-star-line cursor-pointer">
          </i>)

        }
        {image && <img
          className="w-100 h-100 object-cover rounded-2xl"
          src={image}
          alt="img"
        />}

        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-red-600">{recipeName}</h1>
          <p className="text-gray-300">Chef : {chefName}</p>
          <p className="text-gray-300">Category : {category}</p>
          <p className="text-gray-300 text-sm leading-3.5">
            Description : {description}
          </p>
          <p>Ingredients : {ingredients}</p>
          <p>Instructions : {instructions}</p>

          <div className="flex gap-10 items-center mt-10">
            <button
              onClick={() => setIsActive(true)}
              className="bg-green-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
            >
              Edit
            </button>
            <button
              onClick={() => deleteRecipe(id)}
              className="bg-red-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
            >
              Delete
            </button>
            <button
              onClick={() => Navigate(-1)}
              className="bg-gray-600 px-4 py-1 w-25 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipe;
