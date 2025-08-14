import { NavLink } from "react-router-dom";

function Nav(){

    return(
        <div className="flex items-center justify-center gap-20 pt-5 text-xl font-medium">
            <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to='/'>Home</NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to='/recipes'>Recipes</NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to='/about'>About</NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to='/create-recipes'>Create Recipes</NavLink>
        </div>
    )
}

export default Nav;