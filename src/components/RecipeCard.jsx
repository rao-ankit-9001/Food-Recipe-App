import { useNavigate } from "react-router-dom";

function RecipeCard(props) {
  const { id, image, recipeName, chefName, description, category } = props.recipe;

  const Navigate = useNavigate();

  const SingleRecipe = (id) => {

    Navigate(`/recipes/${id}`);
  }

  return (
    <div
      className="flex gap-5 rounded-2xl w-[48%] shadow-sm shadow-white"
    >

      {image && (
        <img
          className="w-50 h-50 object-cover rounded-2xl"
          src={image}
          alt="img"
        />
      )}


      <div className="w-1/2 flex flex-col gap-2">
        <h1
          className="text-2xl font-bold text-red-600"
        >{recipeName}</h1>
        <p className="text-gray-300">Chef : {chefName}</p>
        <p className="text-gray-300">Category : {category}</p>
        <p className="text-gray-300 text-sm leading-3.5">
          {description.slice(0, 80)}...
        </p>

        <button
          className="bg-red-600 px-4 py-1 rounded-sm font-bold cusror-pointer hover:scale-105 active:scale-100 duration-300 mt-4"
          onClick={() => SingleRecipe(id)}
        >
          View Full Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
