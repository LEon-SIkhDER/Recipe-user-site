import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const { createUser } = use(AuthContext)
    const navigate = useNavigate()




    const handleRegister = (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, photoUrl, email, password)

        createUser(email, password)
        .then((result)=>{
            console.log(result)
            updateProfile(auth.currentUser,{
                displayName:name,
                photoURL:photoUrl
            }).then(result=>{
                console.log(result)
                setLoading(false)
                navigate('/')

            })
            .catch(error=>{
                console.log(error)
            })












        })
        .catch((error)=>{
            console.log("the error is:",error.code)
            if(error.code === "auth/email-already-in-use"){
                setError("This Email Is Already In Use")
            }






        })

        
        

   

    }

    return (
        <div className='mb-20 mt-10'>
            <section>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label text-black font-semibold">Name</label>
                            <input type="text" className="input" placeholder="Name" name='name' required/>
                            <label className="label text-black font-semibold">Photo Url</label>
                            <input type="text" className="input" placeholder="Photo Url" name='photoUrl' required/>
                            <label className="label text-black font-semibold">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required/>
                            <label className="label text-black font-semibold">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' required/>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {error&&<p className='text-red-500 '>{error}</p>}
                            <h1 className='text-sm font-semibold text-black '>Already Have An Account? <Link to={"/signin"} className='text-pink-600 underline'>LogIn</Link></h1>
                            <button className="btn btn-neutral mt-4">{loading?<span className="loading loading-spinner loading-md"></span>:"Register"}</button>
                            <div className='flex items-center gap-2'>
                                <div className='border-b border-gray-300 w-full'></div>
                                <h1>OR</h1>
                                <div className='border-b border-gray-300 w-full'></div>
                            </div>
                        </form>
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;