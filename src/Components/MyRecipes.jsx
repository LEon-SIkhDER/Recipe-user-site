import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { IoMdTime } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router';

const MyRecipes = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='bg-[#f6efea] py-20'>
            <section >
                <h1 className='text-5xl font-semibold text-center mb-5'>My Recipes</h1>
                <p className='text-center  mb-14'>Cook, taste, and share the flavors you love — from everyday meals to special creations that bring joy to the table.</p>
                <div className='grid sm:grid-cols-4 grid-cols-2 gap-8 '>
                    {data.map((d,index) =>
                        <div className='flex flex-col'>
                            <Fade delay={index <= 6 ? 100 * index : 20 * index} triggerOnce>
                                <div>
                                    <Link to={`/recipe-details/${d._id}`}>
                                        <div style={{
                                            backgroundImage: `url(${d.photoUrl})`

                                        }}
                                            className='bg-no-repeat bg-[length:100%] hover:bg-[length:120%] transition-all duration-300 p-4 rounded-xl bg-center aspect-[1/1.25] cursor-pointer'

                                        >
                                            <div className='flex justify-between items-center'>
                                                <div className='bg-white text-[#e92d28] inline-flex px-2 rounded-full gap-1 py-[5px] items-center'>
                                                    <span className='inline-block'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                                    </span>
                                                    <h1 className='text-[#e92d28] font-semibold bg-white inline-block   rounded-full text-sm'>Top</h1>
                                                </div>

                                                <div className='bg-white p-2 rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    <span></span>
                                </div>
                            </Fade>

                            <div className=' flex-1' >
                                <h1 className='text-sm text-[#e90000] font-semibold mt-1 '>{d.title}</h1>
                                <h1 className='text-xl text-black font-semibold'>{d.ingredients}.</h1>
                            </div>
                            <div className='flex  justify-between  '>
                                <span className='flex items-center gap-1'><IoMdTime />{d.time}Min</span>
                                <h1>{d.cuisineType}</h1>
                            </div>
                            <div className='text-center '>
                                <Link to={`/recipe-details/${d._id}`}>
                                    <button className='btn bg-[#e92d28] mx-auto w-full text-white hover:bg-[#c92722]'>View Details</button>
                                </Link>

                            </div>
                        </div>
                    )}
                </div>

            </section>
        </div>
    );
};

export default MyRecipes;