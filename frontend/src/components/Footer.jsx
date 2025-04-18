import React from 'react';
const Footer = () =>{
    return (
        <div className="md:mx-10">
            <div className=" sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
                {/* ---------left section----------- */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                     <span className="text-[#192a5e]">Campus Care</span>
                     </h1>
                    <p className="w-full md:w-2/3 text-gray-600 leading-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* center section */}
                <div>
                    <p className="text-xl font-medium mb-5">NITJ</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* right section */}
                <div>
                    <p className="text-xl font-medium mb-5">Contacts</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+91 201010210</li>
                        <li>@nitj.ac.in</li>
                    </ul>
                </div>
            </div>
            {/* ---------Copyright section----------- */}
            <div>
                <hr className='bg-gray-800' />
                <p className="py-5 text-sm text-center">Copyright 2025 Campus Care -- All Rights Reserved</p>
            </div>
        
        </div>


    );
}

export default Footer;