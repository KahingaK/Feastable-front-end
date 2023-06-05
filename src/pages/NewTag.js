import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

function NewTag() {

    const [tag, setTag] = useState('');
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    function handleTagChange(event) {
        setTag(event.target.value);
    }

    // POST New Tag
    function handleSubmit(event) {
        event.preventDefault();
        fetch("https://feastable-world.onrender.com/tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: tag
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
        <h1 className="text-5xl text-center pt-8 mb-8 font-Delicious text-yellow-500">CREATE A NEW TAG</h1>
            <div className="mb-4">
                <label htmlFor="tag" className="block font-bold mb-2">
                    Tag Name:
                </label>
                <input
                    type="text"
                    id="tag"
                    value={tag}
                    onChange={handleTagChange}
                    className="border border-gray-600 rounded w-full py-2 px-3 text-black bg-white"
                />
            </div>
            {/* <div className="mb-4">
                {errors.map((err) => (
                <p key={err} className='text-red-500'>{err}</p>
                ))}
            </div> */}
            <button
                type="submit"
                className="bg-yellow-500 hover:text-black text-white font-bold py-2 px-4 rounded"
            >
                Create Tag
            </button>
        </form>
    </div>
  )
}

export default NewTag