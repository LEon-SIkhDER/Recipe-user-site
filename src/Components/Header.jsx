import React, {  use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import SingleHeader from './SingleHeader';

const Header = () => {
    // const [visibility, setVisibility] = useState(false)
    const user = use(AuthContext)
    console.log(user)



    return (
        <div className='h- bg-[position:70%_90%] sm:bg-left bg-no-repeat' style={{ backgroundImage: 'url("/hero.jpg")' }}>
            <section className='h-dvh'>
                <SingleHeader></SingleHeader>



                <div className='h-full flex flex-col justify-center w-auto  sm:w-[70%] items-center'>
                    <div className='mb-28 text-center sm:text-left'>
                        <h1 className='sm:text-6xl text-3xl font-bold text-white sm:leading-18'>Find inspiration with delicious recipes for every taste, meal, and special occasion.</h1>
                        <p className='sm:my-12 my-6  sm:text-xl text-white'>Discover a wide variety of easy and flavorful recipes for every meal and occasion. From quick snacks to gourmet dishes, find inspiration to elevate your cooking and bring joy to your table.</p>
                        <button className='btn justify-self-start myBtn '>View All Recipes</button>
                    </div>

                </div>























            </section>
        </div>
    );
};

export default Header;