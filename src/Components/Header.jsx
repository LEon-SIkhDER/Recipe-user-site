import React, {  useState } from 'react';

const Header = () => {
    const [visibility, setVisibility] = useState(false)



    return (
        <div className='h- bg-[position:70%_90%] sm:bg-left bg-no-repeat' style={{ backgroundImage: 'url("/hero.jpg")' }}>
            <section className='h-dvh'>
                <div className="navbar bg-transparent px-0 ">
                    <div className="navbar-start">
                        <div className="dropdown" onClick={()=>setVisibility(false)}>
                            <div tabIndex={0} role="button" className="btn px-2 btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                                <li className='text-black sm:text-white'><a className='text-lg'>Item 1</a></li>
                                <li className='text-black sm:text-white'><a className='text-lg'>Item 2</a></li>
                                <li className='text-black sm:text-white'>
                                    <a className='block text-lg' onClick={(e) =>{ e.stopPropagation(), setVisibility(!visibility)}}>Item 3</a>
                                    <ul className={`p-2   ${visibility ? "block" : 'hidden'}`} onClick={(e)=>e.stopPropagation()}>
                                        <li><a className='text-lg'>Submenu 1</a></li>
                                        <li><a className='text-lg'>Submenu 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='flex w-10 items-center gap-2.5'>
                            <img src="/logo.png" alt="" />
                            <a className="text-xl font-semibold text-white">RannaGhor</a>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className='text-black sm:text-white'><a className='text-lg'>Item 1</a></li>
                            <li className='text-black sm:text-white'><a className='text-lg'>Item 2</a></li>
                            <li className='text-black sm:text-white group relative'>
                                {/* <details> */}
                                <summary className='text-lg'>Parent</summary>
                                <ul className="p-2 hidden  group-hover:block bg-white rounded absolute top-[100%]">
                                    <li className='text-black'><a className='flex-nowrap text-lg' style={{ textWrap: 'inherit' }}>Light Mode</a></li>
                                    <li className='text-black'><a className='flex-nowrap text-lg ' style={{ textWrap: 'inherit' }}>Dark Mode</a></li>
                                </ul>
                                {/* </details> */}
                            </li>

                        </ul>
                    </div>
                    <div className="navbar-end gap-2.5">
                        <a className="btn btn-sm sm:btn myBtn">LogIn</a>
                        <a className="btn btn-sm sm:btn myBtn hover:ml-[2px]">Register</a>
                    </div>
                </div>
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