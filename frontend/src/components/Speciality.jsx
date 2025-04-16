import React from "react";
import { specialityData } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Speciality = () => {
  return (
    <div id ="speciality" className="flex flex-col items-center gap-4 py-16 text-[#262626]">
      <p className="text-3xl font-medium">Find by Speciality</p>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div className="flex sm:justify-center gap-4 pt-5 w-full  ">
        {specialityData.map((item, index) => (
            <NavLink key={index} to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
                <img src={item.image} alt={item.speciality} />
                <p>{item.speciality}</p>
            </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
