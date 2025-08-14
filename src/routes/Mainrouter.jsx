import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import CreateRecipes from "../pages/CreateRecipes";
import About from "../pages/About";


function Mainrouter(){

    return(
            <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/recipes' element={<Recipes/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/create-recipes' element={<CreateRecipes/>}/>
            </Routes>
    )
}


export default Mainrouter;