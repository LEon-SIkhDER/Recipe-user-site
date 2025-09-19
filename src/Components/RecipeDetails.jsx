import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const RecipeDetails = () => {
    const data = useLoaderData()
    const {user} = use(AuthContext)
    console.log("this is user uid:",user.uid)
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(data.likes)

    if (like) {
        setTimeout(() => {
            setLike(false)
        }, 500);
    }
    console.log("this is data uid:",data.uid)
    if(!user){
        return (
            <div>loading</div>
        )
    }

    return (
        <div className=' bg-[#f6efea] py-20'>
            <section className='flex  gap-20 '>
                <img className='rounded-2xl' src={data.photoUrl} alt="" />
                <div className='flex justify-between flex-col py-8'>
                    <div className='space-y-1'>
                        <div className='flex gap-10'>
                            <h1 className='text-5xl font-bold font-[rancho] text-[#e90000]'>{data.title}</h1>
                            <div className='flex items-center gap-0.5'>
                                <button disabled={user.uid === data.uid}  onClick={() => {setLike(true), setLikeCount(likeCount + 1)}} className='cursor-pointer  active:scale-90 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill={like ? "blue" : "none"}
                                        stroke={like ? "blue" : "black"} stroke-width={like ? "0" : "2"} stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                </button>
                                <span className='text-2xl'> {likeCount} Likes</span></div>

                        </div>
                        <h1>{data.createdAt}</h1>
                        <div><span className='font-semibold text-lg'>Category:</span><span>{data.category}.</span></div>
                        <div><span className='font-semibold text-lg'>Cuisine type:</span><span>{data.cuisineType}.</span></div>
                        <div><span className='font-semibold text-lg'>Ingredients:</span><span>{data.ingredients}.</span></div>
                        <div className='flex '><span className='font-semibold text-lg '>Instructions:</span><span className='text-justify mt-1'>{data.instructions}</span></div>
                        <div><span className='font-semibold text-lg'>Cooking Time:</span><span>{data.time}Min.</span></div>
                    </div>

                    {/* <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg></button> */}
                </div>
            </section>
        </div>
    );
};

export default RecipeDetails;