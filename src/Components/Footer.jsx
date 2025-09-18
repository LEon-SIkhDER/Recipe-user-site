import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <section className='space-y-10'>
            <div className='flex  gap-24 items-center'>
                <div className='flex gap-5   mx-auto sm:mx-0'>
                    <span className=' bg-[#dddddd] p-4 rounded-full hover:bg-[#e92d28] duration-200 hover:text-white cursor-pointer'><FaFacebook size={20} /></span>
                    <span className=' bg-[#dddddd] p-4 rounded-full hover:bg-[#e92d28] duration-200 hover:text-white cursor-pointer'><FaInstagram size={20} /></span>
                    <span className=' bg-[#dddddd] p-4 rounded-full hover:bg-[#e92d28] duration-200 hover:text-white cursor-pointer'><FaYoutube size={20} /></span>
                    <span className=' bg-[#dddddd] p-4 rounded-full hover:bg-[#e92d28] duration-200 hover:text-white cursor-pointer'><FaXTwitter size={20} /></span>
                </div>
                <div className='*:font-bold sm:flex justify-between w-full hidden  '>
                    <h2>All Recipe</h2>
                    <h2>Video Recipe</h2>
                    <h2>Top Category</h2>
                    <h2>Top Recipe</h2>
                    <h2>Refund Policy</h2>
                    <h2>Terms & Condition</h2>
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className='text-center space-y-4'>
                <div className='w-full border-b border-gray-200'></div>
                <p>RannaGhor offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.</p>
                <p>© 2025 RannaGhor. All rights reserved & Designed by <span className='font-[mr_dafoe] sm:inline-block block'>Leon Sikhder.</span></p>
                <div className='flex items-center gap-2.5 justify-center'  >
                    <img className=' w-10' src="/logo.png" alt="" />
                    <a className="text-4xl font-bold text-[#e92d28] ">RannaGhor</a>
                </div>

            </div>



        </section>

    );
};

export default Footer;