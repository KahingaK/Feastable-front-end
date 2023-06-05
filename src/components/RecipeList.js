import React from 'react'
import { Link } from 'react-router-dom'

function RecipeList({ recipes, showComponentHandler, showComponent, loggedIn, handleLogout }) {
    
    

    function handleLogoutClick() {
        fetch("https://feastable-world.onrender.com/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            handleLogout();
          }
        });
    }


  return (
    <div className='h-full flex flex-col items-center backdrop-blur-lg '>
        <h1 className='text-black text-6xl font-Delicious underline mt-9'>RECIPES</h1>
        <div className="flex justify-between p-2 gap-14">
            <button className="bg-yellow-500 hover:text-white text-black font-Delicious text-3xl py-2 px-4 rounded mt-4 rounded-full mt-8">
                {loggedIn ? (<Link to="/new-recipe">+Add Recipe</Link>) : (<Link to="/login">+Add Recipe</Link>)}
            </button>
            <button className="bg-yellow-500 hover:text-white text-black font-Delicious text-3xl py-2 px-4 rounded mt-4 rounded-full mt-8">
                {loggedIn ? (<Link to="/new-tag">Create Tag</Link>) : (<Link to="/login">Create Tag</Link>)}
            </button>
            {loggedIn && ( 
                <button className="bg-red-500 hover:text-white text-black font-Delicious text-3xl py-2 px-4 rounded mt-4 rounded-full mt-8" onClick={() => handleLogoutClick()}>
                    Log Out
                </button>
            )}
        </div>
        <div className='container mx-auto mt-6'>
            <div className='flex flex-wrap justify-center'>
                {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <div key={recipe.id} className='sm:w-1/2 md:w-1/2 lg:w-1/4 p-2'>
                        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                            <img className='w-full' src={recipe.image_url} alt='Recipe'/>
                            <div className='px-6 py-4'>
                                <div className='font-Delicious text-center text-3xl mb-2'>{recipe.title}</div>
                            </div>
                            <div className='px-6 py-4 text-center'>
                                <button className='bg-yellow-500 hover:text-white text-black align-middle font-Delicious text-3xl py-2 px-4 rounded mt-4 rounded-full' onClick={() => showComponentHandler(recipe)}>view</button>
                            </div>
                        </div>
                    </div>
                ))
                ) : <h2>No Recipes Found</h2>}
            </div>
        </div>
    </div>
  )
}

export default RecipeList