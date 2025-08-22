import RecipeCard from "../components/RecipeCard";


function Favroite() {

    const favRecipes = JSON.parse(localStorage.getItem('fav'));

    const renderRecipes = favRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));

    return (
        <div className="py-5 px-5 flex flex-wrap items-center mx-auto gap-5">
            {favRecipes.length > 0 ? renderRecipes : (<div className="flex items-center justify-center h-screen w-screen text-3xl text-red-600">"No Favroite Found!"</div>)}
        </div>
    );
}


export default Favroite;