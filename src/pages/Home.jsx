
import axios from "../utils/axios";
import { Outlet, useNavigate } from "react-router-dom";

function Home(){
    const Navigate = useNavigate();

    const getproduct = async ()=>{
       try{
         const response = await axios.get("/products/");
        console.log(response.data);
       }
       catch(error){
        console.log(error);
        
       }

    }
    
    return(
        <div className="relative border">
        <h1>Home</h1>
        
        <h1>Home</h1>
        
        <h1>Home</h1>
        
        <h1>Home</h1>
        
     
        <h1>Home</h1>
        
        
        <button onClick={getproduct}>Get Data</button>
        <button 
        onClick={()=>Navigate('/create-recipes')}
        className=" fixed right-5 bottom-40 cursor-pointer flex  items-center justify-center">
            <span className={`bg-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-4xl p-3 `}>+</span>
            <span className="px-3 text-xl hidden">Create Recipe</span>
        </button>
        {/* <Outlet/> */}
        </div>
    )
}


export default Home;