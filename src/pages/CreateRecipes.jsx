import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipesContext';
import{ nanoid }from 'nanoid';
import { toast } from 'react-toastify';
function CreateRecipes(){
    const {Recipes, setRecipes} = useContext(recipecontext);

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const submitHandler=(NewRecipe)=>{
            NewRecipe.id = nanoid();
            setRecipes([...Recipes, NewRecipe])
            toast.success('New Recipe add successfully');
            reset();
        
    } 
    return(
            <div className="flex flex-col items-center justify-center gap-10 pt-10 outline-1 my-5 mx-20 py-5">
                <h1 className='text-xl font-bold'>Create recipes</h1>


                <form className='flex flex-col gap-10' onSubmit={handleSubmit(submitHandler)}>
                    <input 
                    className="outline-0 border-b p-1"
                    {...register('title')}
                    type="text" 
                    placeholder='Recipe Name'
                    />

                    <input 
                    className="outline-0 border-b p-1"
                    {...register('image')}
                    type="file"
                    placeholder='Recipe image'
                     />

                     <input 
                     className="outline-0 border-b p-1"
                     {...register('chefname')}
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
                    {...register('category')}
                    >
                        <option value="cat1">category 1</option>
                        <option value="cat2">category 2</option>
                        <option value="cat3">category 3</option>
                    </select>

                    <button
                     className='bg-red-400 text-xl font-bold rounded-xl cursor-pointer'
                     >Save Recipe</button>
                </form>
            </div>
        
    )
}


export default CreateRecipes;