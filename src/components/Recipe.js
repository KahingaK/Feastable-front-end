import React from 'react'
import { useState, useEffect } from 'react'
import ReviewList from './ReviewList';
import { FaArrowLeft } from 'react-icons/fa';

function Recipe({recipe, toggleShowComponent, user}) {

  const [showReviews, setShowReviews] = useState(false);
  const [addingReview, setAddingReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [tags, setTags] = useState([]);
  const [tagID, setTagId] = useState(0);

  const [addingTag, setAddingTag] = useState(false);

  // Show / Hide Reviews
  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  // Show / Hide Add Review
  const handleAddReviewClick = () => {
    setAddingReview(!addingReview);
    setAddingTag(false);
    // console.log("Adding Review")
  }

  // Show / Hide Add Tag
  const handleAddTagClick = () => {
    setAddingTag(!addingTag);
    setAddingReview(false);
    // console.log("Add Tags")
  }

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Handle Review Form Submit
  const handleAddReviewSubmit = (event) => {
    event.preventDefault();

    // Collect the necessary data
    const data =  {
      rating: rating,
      comment: comment,
      user_id: user.id,
      recipe_id: recipe.id
    }

    // TODO: Send rating and comment to backend API to add new review
    fetch('https://feastable-world.onrender.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      // Handle the response from the server
      // console.log('Review submitted:', result);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });

    // Reset the form
    setRating(0);
    setComment('');
    setAddingReview(false);
  };

   // Get the tags
  useEffect(() => {
  // Fetch the Tags
  fetch("https://feastable-world.onrender.com/tags")
  .then((response) => response.json())
  .then((data) => {
    setTags(data);
  })
  .catch((error) => {
    console.log("Error fetching recipes: ", error);
  });
  }, []);

  const handleDropdownChange = event => {
    const selectedId = event.target.value;
    // console.log('Selected ID:', selectedId);
    setTagId(selectedId);
  };

  // Handle Tag Form Submit
  const handleAddTagSubmit = (event) => {
    event.preventDefault();

    // Collect the necessary data
    const data1 =  {
      recipe_id: recipe.id,
      tag_id: tagID
    }

    console.log(data1)

    // TODO: Send tag name to backend API to add new tag
    fetch('https://feastable-world.onrender.com/recipe-tag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data1)
    })
    .then(response => response.json())
    .then(result => {
      // Handle the response from the server
      // console.log('Tag submitted:', result);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });

    setAddingTag(false);
  };

  return (
    <div className="container mx-auto my-8 ">
      <div className="mx-auto md:max-w-4xl">
      <button className="bg-yellow-500 hover:text-white text-black font-bold py-2 px-4 rounded mt-4 rounded-full" onClick={() => toggleShowComponent()}>
        <FaArrowLeft className="inline-block mr-2 text-black hover:text-white" />
        Back
      </button>
      <div className="mt-6 md:col-span-2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-96 object-cover"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h2>
            <p className="text-gray-700 text-justify indent-8 text-lg mb-4">{recipe.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ingredients:
              </h3>
              <p>{recipe.ingredients}</p>
            </div>
            <div className='font-bold text-lg mb-2'>Tags:</div>
            {recipe.tags.length > 0 ? (<div className='text-gray-700 text-base'>{recipe.tags.map((tag) => tag.name).join(', ')}</div>) : ('No Assigned Tags')}
            {/* <div className='text-gray-700 text-base'>{recipe.tags.map((tag) => tag.name).join(', ')}</div> */}
            <div className="flex justify-between items-center">
              <p className='text-gray-700'>By: |  {recipe.user.username}</p>
              <button
                onClick={toggleReviews}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
              >
                {showReviews ? 'Hide Reviews' : 'Show Reviews'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showReviews && recipe.reviews.length > 0 ? (<ReviewList reviews={recipe.reviews} />) : (showReviews && <h2>No Reviews Yet</h2>)}
      </div>
      <button className='mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleAddReviewClick()}>{addingReview ? 'Cancel Review' : '+Add Reviews'}</button>
      <button className='mt-8 ml-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleAddTagClick()}>{addingTag ? 'Cancel Tag' : '+Add Tag'}</button>

      {/* Add Review */}
      {addingReview ?
        (<form onSubmit={handleAddReviewSubmit} className='mt-8 w-full max-w-sm mx-0'>
              <div className='mb-4'>
                <label htmlFor="rating" className="block font-bold mb-1">Rating:</label>
                <select id="rating" value={rating} onChange={handleRatingChange} className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500">
                  <option value={0}>Select a rating</option>
                  <option value={1}>1 star</option>
                  <option value={2}>2 stars</option>
                  <option value={3}>3 stars</option>
                  <option value={4}>4 stars</option>
                  <option value={5}>5 stars</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block font-bold mb-1">Comment:</label>
                <textarea id="comment" value={comment} onChange={handleCommentChange} className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500" />
              </div>

              <button type="submit" className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Submit</button>
        </form>)
        : null
      }

      {/* Add Tag */}
      {addingTag ? 
        (<form onSubmit={handleAddTagSubmit} className='mt-8 w-full max-w-sm mx-0'>
            {/* Tags */}
          <div className='mb-4'>
            {tags.length > 0 ? (
              <div>
                <label htmlFor="myDropdown" className='block font-bold mb-2'>Add a tag:</label>
                <select id="myDropdown" className="text-black 0 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500" onChange={handleDropdownChange}>
                  {tags.map(tag=> (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </div>
              ) : <h2>No Recipes Found</h2>}
          </div>
          <button type="submit" className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Submit</button>
        </form>)
        : null
      }

    </div>
  </div>
  )
}

export default Recipe