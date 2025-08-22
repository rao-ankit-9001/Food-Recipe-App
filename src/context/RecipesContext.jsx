import { nanoid } from "nanoid";
import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

function RecipeContext(props){

    const localData = [{
    "recipeName": "Spicy Paneer Tikka",
    "image": "https://bing.com/th?id=OSK.604d9a439cb00d32875d08842ef36ebb",
    "description": "Fiery grilled paneer cubes marinated in yogurt and spices. A classic Indian starter.",
    "ingredients": [
      "250g paneer",
      "1/2 cup yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "Salt to taste",
      "1 tbsp lemon juice"
    ],
    "instructions": [
      "Mix yogurt, spices, and lemon juice.",
      "Marinate paneer for 1 hour.",
      "Grill until golden and serve hot."
    ],
    "chefName": "Chef Rao",
    "category": "Indian Starter",
    id : nanoid()
  },
  {
    "recipeName": "Creamy Alfredo Pasta",
    "image": "https://bing.com/th?id=OSK.e1cf80b5775c399bd35bad71b4c67080",
    "description": "Rich and creamy pasta tossed in a buttery garlic Alfredo sauce.",
    "ingredients": [
      "200g fettuccine",
      "2 tbsp butter",
      "3 cloves garlic",
      "1 cup heavy cream",
      "1/2 cup parmesan cheese",
      "Salt and pepper"
    ],
    "instructions": [
      "Boil pasta until al dente.",
      "Sauté garlic in butter, add cream and cheese.",
      "Mix pasta and serve warm."
    ],
    "chefName": "Chef Maria",
    "category": "Italian Main",
    id : nanoid()
  },
  {
    "recipeName": "Veggie Spring Rolls",
    "image": "https://bing.com/th?id=OSK.014401de0913f48ab2f0b0cd8caed442",
    "description": "Crispy rolls stuffed with stir-fried vegetables, perfect for dipping.",
    "ingredients": [
      "Spring roll wrappers",
      "1 cup shredded cabbage",
      "1/2 cup carrots",
      "1/2 cup bell peppers",
      "Soy sauce",
      "Oil for frying"
    ],
    "instructions": [
      "Stir-fry veggies with soy sauce.",
      "Fill wrappers and roll tightly.",
      "Deep fry until golden."
    ],
    "chefName": "Chef Lee",
    "category": "Chinese Side",
    id : nanoid()
  },
  {
    "recipeName": "Chocolate Lava Cake",
    "image": "https://bing.com/th?id=OSK.22e35e6896601da85dfe55568476266e",
    "description": "Decadent chocolate cake with a gooey molten center.",
    "ingredients": [
      "100g dark chocolate",
      "50g butter",
      "2 eggs",
      "1/4 cup sugar",
      "1/4 cup flour"
    ],
    "instructions": [
      "Melt chocolate and butter.",
      "Mix with eggs, sugar, and flour.",
      "Bake in ramekins for 10 mins."
    ],
    "chefName": "Chef Aryan",
    "category": "Dessert",
    id : nanoid()
  },
  {
    "recipeName": "Quinoa Buddha Bowl",
    "image": "https://bing.com/th?id=OSK.c0514807c0bb215c99ccb3b3bf353b95",
    "description": "A wholesome bowl packed with quinoa, veggies, and protein.",
    "ingredients": [
      "1 cup cooked quinoa",
      "1/2 cup chickpeas",
      "1/2 avocado",
      "Cherry tomatoes",
      "Spinach",
      "Tahini dressing"
    ],
    "instructions": [
      "Arrange quinoa and toppings in a bowl.",
      "Drizzle with tahini dressing.",
      "Serve chilled or at room temp."
    ],
    "chefName": "Chef Nia",
    "category": "Healthy Bowl",
    id : nanoid()
  }]

  const [Recipes, setRecipes] = useState(() => {
        const storedRecipesJson = localStorage.getItem("recipes");
        return storedRecipesJson ? JSON.parse(storedRecipesJson) : [];
    });

    useEffect(() => {
        localStorage.setItem("recipes", JSON.stringify(Recipes));
    }, [Recipes]);
    return(
        <recipecontext.Provider value={{Recipes, setRecipes}}>
            {props.children}
        </recipecontext.Provider>
    )
    
}

export default RecipeContext;