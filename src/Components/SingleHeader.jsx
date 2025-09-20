import React, { use, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { MdLogout } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';
import Swal from 'sweetalert2';

const SingleHeader = () => {
    const { user, setUser, setDarkMode, dark } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [visibility, setVisibility] = useState(false)
    const [dropdown, setDropDown] = useState(false)
    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to LogOut!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, LogOut!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth)
                    .then(result => {
                        console.log(result)
                        if (location.pathname === "/") {
                            setUser(null)
                        }
                        else {
                            navigate("/")
                            setUser(null)
                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    }
    return (
        <div>
            <section>
                <div className="navbar bg-transparent px-0 ">
                    <div className="navbar-start">
                        <div className="dropdown" onClick={() => setVisibility(false)}>
                            <div tabIndex={0} role="button" className="btn px-2 btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                                <li className='text-black sm:text-white'> <Link to={"/"} className='text-lg'>Home</Link> </li>
                                <li className='text-black sm:text-white'><Link to={"/all-recipes"} className='text-lg'>All Recipe</Link></li>
                                <li className='text-black sm:text-white'><Link to={"/add-recipe"} className='text-lg'>Add Recipe</Link></li>
                                <li className='text-black sm:text-white'><Link to={`/my-recipe/${user?.uid}`} className='text-lg'>My Recipe</Link></li>
                                <li className={`text-black sm:text-white ${location.pathname !== "/" && "hidden"}`}>
                                    <a className='block text-lg' onClick={(e) => { e.stopPropagation(), setVisibility(!visibility) }}>Themes</a>
                                    <ul className={`p-2   ${visibility ? "block" : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
                                        <li onClick={()=>setDarkMode(false)}><a className={`text-lg ${!dark&&"bg-black text-white"}`}>Light Mode</a></li>
                                        <li onClick={()=>setDarkMode(true)}><a className={`text-lg ${dark&&"bg-black text-white"}`}>Dark Mode</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='flex w-10 items-center gap-2.5'>
                            <img src="/logo.png" alt="" />
                            <a className={`sm:text-4xl text-2xl font-bold  ${location.pathname === "/" ? "text-white" : "text-[#e92d28]"}`}>RannaGhor</a>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className=' sm:text-white'><Link to={"/"} className={`text-lg ${location.pathname === "/" ? "text-white" : "text-black"}`}>Home</Link></li>
                            <li className=' sm:text-white'><NavLink to={"/all-recipes"} className={`text-lg ${location.pathname === "/" ? "text-white" : "text-black"}`}>All Recipe</NavLink></li>
                            <li className=' sm:text-white'><NavLink to={"/add-recipe"} className={`text-lg ${location.pathname === "/" ? "text-white" : "text-black"}`}>Add Recipe</NavLink></li>
                            <li className=' sm:text-white'><NavLink to={`/my-recipe/${user?.uid}`} className={`text-lg ${location.pathname === "/" ? "text-white" : "text-black"}`}>My Recipe</NavLink></li>
                            <li className={`sm:text-white group relative ${location.pathname !== "/" && "hidden"}`}>
                                {/* <details> */}
                                <summary className={`text-lg ${location.pathname === "/" ? "text-white" : "text-black"}`}>Themes</summary>
                                <ul className="p-2 hidden  group-hover:block bg-white rounded absolute top-[100%] z-10 shadow">
                                    <li onClick={()=>setDarkMode(false)} className='text-black '><a className={`text-lg ${!dark&&"bg-black text-white"}`} style={{ textWrap: 'inherit' }}>Light Mode</a></li>
                                    <li onClick={()=>setDarkMode(true)} className='text-black'><a className={`text-lg ${dark&&"bg-black text-white"}`} style={{ textWrap: 'inherit' }}>Dark Mode</a></li>
                                </ul>
                                {/* </details> */}
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2.5">
                        {user ? <div className='relative '>
                            <img className='w-10 h-10 cursor-pointer rounded-full hover:scale-105 ' src={user?.photoURL} alt="User Image" onClick={() => setDropDown(!dropdown)} />
                            <div className={`bg-white shadow text-center p-3.5 absolute right-0 whitespace-nowrap z-10 rounded ${dropdown ? "block" : "hidden"}`}>
                                <img className='w-20 h-20 mx-auto rounded-full' src={user?.photoURL} alt="" />
                                <h1 className='font-semibold text-xl mb-2'>{user?.displayName}</h1>
                                <h1>{user?.email}</h1>
                                <div className='border-b border-gray-300 w-full my-1'></div>
                                <button onClick={handleSignOut} className='text-left font-semibold flex items-center gap-1 hover:bg-gray-200 cursor-pointer btn rounded text-red-500 w-full text-base'>LogOut<span><MdLogout size={20} className='rotate-180 mt-[2px]' /></span></button>
                            </div>
                        </div> : <>
                            <Link to={"/signin"} className="btn btn-sm sm:btn myBtn">LogIn</Link>
                            <Link to={"/register"} className="btn btn-sm sm:btn myBtn hover:ml-[2px]">Register</Link>
                        </>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleHeader;