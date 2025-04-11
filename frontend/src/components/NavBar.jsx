import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function NavBar(){
    const navigate = useNavigate();
    const [token, setToken] = useState(true);
    return(
        <div className='flex justify-between items-center text-sm py-4  border-b border-b-gray-400'>
            {/* <img src={assets.logo}
                    alt="LOGO"
                    className='w-44 cursor-pointer'/> */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-[#192a5e]">Campus Care</span>
            </h1>

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
        <div >
    
        {token ? 
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img src={assets.profile_pic} alt="" 
              className='w-8 h-8 rounded-full cursor-pointer' />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base text-gray-700 z-20 font-medium hidden group-hover:block'> 
              <div className='min-w-48 bg-white rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate("/my-profile")} className=" hover:text-black cursor-pointer">My Profile</p>
                <p onClick={ ()=>navigate("/my-appointment")} className=" hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={()=>setToken(false)} className=" hover:text-black cursor-pointer">Log out</p>
              </div>
            </div>
            
          </div> 
          : 
          <button 
            onClick={()=> navigate("/login")} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account
          </button> 
        }
       
      </div>
        </div>
    );
}
export default NavBar;