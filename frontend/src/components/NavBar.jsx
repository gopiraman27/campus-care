import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";
function NavBar(){
    const navigate = useNavigate();
    return(
        <div className='flex justify-between items-center text-sm py-4  border-b border-b-gray-400'>
            <img src={assets.logo}
                    alt="LOGO"
                    className='w-44 cursor-pointer'/>
            <ul className='hidden md:flex gap-5  font-semibold'>
                <li className='py-1'>
                <NavLink to="/" className="block">
                    Home
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                </li>

                <li className='py-1'>
                <NavLink to="/doctors" className="block">
                    All Doctors
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                </li>

                <li className='py-1'>
                <NavLink to="/about" className="block">
                    About
                    <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden' />
                </NavLink>
                </li>

                <li className='py-1'>
                <NavLink to="/contact" className="block">
                    Contact
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                </li>
            </ul>
            <div>
            <button onClick={() => navigate("/login")}
                     className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                Create Account
            </button>
            </div>
        </div>
    );
}
export default NavBar;