import { format } from 'date-fns';
import React, { use, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../AuthContext/AuthContext';

const AddRecipe = () => {
    const { user } = use(AuthContext)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState([])


    const handleCheckbox = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setCategory([...category, value])
        }
        else {
            setCategory(category.filter((c) => c !== value))
        }


    }

    const handleRecipe = (e) => {
        e.preventDefault()
        setLoading(true)
        const now = new Date()
        const creationTime = format(now, "p")
        const creationDate = format(now, "dd")
        const creationMonth = format(now, "MMM")

        const title = e.target.title.value
        const photoUrl = e.target.photoUrl.value
        const cuisineType = e.target.cuisineType.value
        const ingredients = e.target.ingredients.value
        const instructions = e.target.instructions.value
        const time = e.target.time.value
        const likes = 0
        const createdAt = `${creationMonth} ${creationDate} at ${creationTime}`
        const uid = user.uid

        const recipeData = { title, photoUrl, category, cuisineType, ingredients, instructions, time, likes, createdAt, uid }






        fetch("https://recipe-server-blush-six.vercel.app/recipes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipeData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                if (data.insertedId) {
                    toast.success("Recipe added successfully")

                }
            })















    }
    return (
        <div className='mb-20 mt-10'>
            <ToastContainer />
            <section>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center">Add Recipe</h1>
                        <form onSubmit={handleRecipe} className="fieldset">
                            <label className="label text-black font-semibold">Title</label>
                            <input type="text" className="input" placeholder="Title" name='title' />

                            <label className="label text-black font-semibold">Photo Url</label>
                            <input type="text" className="input" placeholder="Photo Url" name='photoUrl' />

                            <label className="label text-black font-semibold">Category</label>
                            <div className='grid grid-cols-3 gap-5 text-sm sm:*:text-base'>
                                <label>
                                    <input className='checkbox mr-2' type="checkbox" value={"Breakfast"} onChange={handleCheckbox} />Breakfast
                                </label>

                                <label>
                                    <input className='checkbox mr-2' type="checkbox" value={"Lunch"} onChange={handleCheckbox} />Lunch
                                </label>

                                <label>
                                    <input className='checkbox mr-2' type="checkbox" value={"Dinner"} onChange={handleCheckbox} />Dinner
                                </label>

                                <label>
                                    <input className='checkbox mr-2' type="checkbox" value={"Dessert"} onChange={handleCheckbox} />Dessert
                                </label>

                                <label>
                                    <input className='checkbox mr-2' type="checkbox" value={"Vegan "} onChange={handleCheckbox} />Vegan
                                </label>

                                <label>
                                    <input className='checkbox mr-2' type="checkbox" value={"Others"} onChange={handleCheckbox} />Others
                                </label>
                            </div>
                            <label className="label text-black font-semibold">Cuisine Type</label>

                            <select name="cuisineType" className="select " required>
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Indian">Indian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Others">Others</option>
                            </select>
                            <label className="label text-black font-semibold">Ingredients</label>
                            <input type="text" className="input" placeholder="Ingredients" name='ingredients' />

                            <label className="label text-black font-semibold">Instructions</label>
                            <input type="text" className="input" placeholder="Instructions" name='instructions' />


                            <label className="label text-black font-semibold">Preparation Time</label>
                            <input type="text" className="input" placeholder="Preparation Time" name='time' />

                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            {/* {error && <p className='text-red-500 '>{error}</p>} */}
                            {/* <h1 className='text-sm font-semibold text-black '>Already Have An Account? <Link to={"/signin"} className='text-pink-600 underline'>LogIn</Link></h1> */}
                            <button className="btn btn-neutral mt-4">{loading ? <span className="loading loading-spinner loading-md"></span> : "Add Recipe"}</button>

                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddRecipe;