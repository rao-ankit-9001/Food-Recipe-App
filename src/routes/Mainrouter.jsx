import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import CreateRecipes from "../pages/CreateRecipes";
import About from "../pages/About";
import SingleRecipe from "../pages/SingleRecipe";


function Mainrouter(){

    return(
            <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/create-recipes' element={<CreateRecipes/>}/>
                    <Route path='/recipes' element={<Recipes/>}/> 
                    <Route path='/recipes/:id' element={<SingleRecipe/>}/>
                    <Route path='/about' element={<About/>}/>
            </Routes>
    )
}


export default Mainrouter;