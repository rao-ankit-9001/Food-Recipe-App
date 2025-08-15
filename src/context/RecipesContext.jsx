import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const recipecontext = createContext(null);

function RecipeContext(props){

    const [Recipes, setRecipes] = useState([
        {
  "recipeName": "Spicy Paneer Tikka",
  "image": "https://bing.com/th?id=OSK.604d9a439cb00d32875d08842ef36ebb",
  "description": "A fiery and flavorful Indian appetizer made with marinated paneer cubes grilled to perfection. Perfect for parties or evening snacks.",
  "category": "Indian Starter",
  "ingredients": [
    "250g paneer (cubed)",
    "1/2 cup thick yogurt",
    "1 tbsp ginger-garlic paste",
    "1 tsp red chili powder",
    "1/2 tsp turmeric powder",
    "1 tsp garam masala",
    "1 tbsp lemon juice",
    "Salt to taste",
    "1 tbsp oil",
    "Sliced onions and capsicum (optional)"
  ],
  "instructions": [
    "In a bowl, mix yogurt, ginger-garlic paste, spices, lemon juice, and salt.",
    "Add paneer cubes and coat them well. Marinate for at least 1 hour.",
    "Thread paneer and veggies onto skewers.",
    "Heat a grill pan or tandoor, brush with oil, and grill skewers until golden and slightly charred.",
    "Serve hot with mint chutney and lemon wedges."
  ],
  "chefName": "Rio",
  id:nanoid()
}

    ]);
    return(
        <recipecontext.Provider value={{Recipes, setRecipes}}>
            {props.children}
        </recipecontext.Provider>
    )
    
}

export default RecipeContext;