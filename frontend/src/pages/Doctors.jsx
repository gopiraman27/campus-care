import React from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const {doctors} = useContext(AppContext);
  const {speciality} = useParams();
  const [filterDoctors, setFilterDoctors] = useState([]);
  const navigate = useNavigate();
  const [filterButton, setFilterButton] = useState(false);
  console.log("Speciality from URL:", speciality);
  

  const filterButtonHandler = () => {
    setFilterButton(true);

  };

  const applyFilter = () => {
    if (speciality) {
      setFilterDoctors(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoctors(doctors);
    }
  };
  
  // // console.log("All Doctors from Context:", doctors);
  // // console.log("Speciality from URL:", speciality);

  useEffect(()=>{
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
      {/* ----------left side -------------*/}
      <div> 
      {filterButton ? ( 
          <button onClick={() => setFilterButton(false)} className="bg-primary text-white py-1 px-5 border rounded-md mb-5 sm:hidden">Filters</button>
        ) : (
          <button onClick={() => setFilterButton(true)} className="py-1 px-5 border rounded-md  mb-5 sm:hidden">Filters</button>
      )}

    <div className={`flex-col gap-4 text-sm text-gray-600 ${
        filterButton ? "flex" : "hidden"
      }`}>
  <p
    onClick={() =>
      speciality === "General physician"
        ? navigate("/doctors")
        : navigate("/doctors/General physician")
    }
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "General physician" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    General Physician
  </p>

  <p
    onClick={() =>
      speciality === "Gynecologist"
        ? navigate("/doctors")
        : navigate("/doctors/Gynecologist")
    }
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Gynecologist
  </p>

  <p
    onClick={() =>
      speciality === "Dermatologist"
        ? navigate("/doctors")
        : navigate("/doctors/Dermatologist")
    }
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Dermatologist
  </p>

  <p
    onClick={() =>
      speciality === "Pediatricians"
        ? navigate("/doctors")
        : navigate("/doctors/Pediatricians")
    }
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Pediatricians
  </p>

  <p
    onClick={() =>
      speciality === "Neurologist"
        ? navigate("/doctors")
        : navigate("/doctors/Neurologist")
    }
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Neurologist
  </p>

  <p
    onClick={() =>
      speciality === "Gastroenterologist"
        ? navigate("/doctors")
        : navigate("/doctors/Gastroenterologist")
    }
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Gastroenterologist
  </p>
</div>

      </div>

      {/* ------------------right side -------------*/}
      <div className="flex flex-col sm:grid grid-cols-2  gap-4 mt-5 md:grid-cols-3 lg:grid-cols-4">
        { (filterDoctors).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="w-full border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img className="bg-blue-50 w-full object-cover" src={item.image} alt={item.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium mt-1">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Doctors;