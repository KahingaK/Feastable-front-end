import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

function NewRecipe({ user }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();


    function handleTitleChange(event) {
      setTitle(event.target.value);
    }
  
    function handleDescriptionChange(event) {
      setDescription(event.target.value);
    }
  
    function handleIngredientsChange(event) {
      setIngredients(event.target.value);
    }
  
    function handleImageURLChange(event) {
      setImageURL(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      fetch("https://feastable-world.onrender.com/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          description: description,
          ingredients: ingredients,
          image_url: imageURL,
        }),
      }).then((r) => {
        if (r.ok) {
            navigate("/");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });

    }
  

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-center">
        <form className="mx-auto max-w-md mt-8" onSubmit={handleSubmit}>
        <button className="bg-yellow-500 hover:text-white text-black font-Delicious text-3xl py-2 px-4 rounded mt-4 rounded-full mt-8">
            <Link to="/">
                <FaArrowLeft className="inline-block mr-2 text-black hover:text-white" />
                Back
            </Link>
        </button>
        <h1 className="text-5xl text-center pt-8 mb-8 font-Delicious text-yellow-500">CREATE A NEW RECIPE</h1>
            <div className="mb-4">
                <label htmlFor="title" className="block font-bold mb-2">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    className="border border-gray-600 rounded w-full py-2 px-3 text-black bg-white"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block font-bold mb-2">
                    Description:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="border border-gray-600 rounded w-full py-2 px-3 text-black bg-white"
                />
            </div>
            <div className="mb-4">
                {errors.map((err) => (
                <p key={err} className='text-red-500'>{err}</p>
                ))}
            </div>
            <div className="mb-4">
                <label htmlFor="ingredients" className="block font-bold mb-2">
                    Ingredients:
                </label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={handleIngredientsChange}
                    className="border border-gray-600 rounded w-full py-2 px-3 text-black bg-white"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="imageURL" className="block font-bold mb-2">
                    Image URL:
                </label>
                <input
                    type="text"
                    id="imageURL"
                    value={imageURL}
                    onChange={handleImageURLChange}
                    className="border border-gray-600 rounded w-full py-2 px-3 text-black bg-white"
                />
            </div>
            <button
                type="submit"
                className="bg-yellow-500 hover:text-black text-white font-bold py-2 px-4 rounded"
            >
                Create Recipe
            </button>
        </form>
    </div>
  )
}

export default NewRecipe