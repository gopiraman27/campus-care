import React from 'react';
import Header from '../components/Header';
import Speciality from '../components/Speciality';
import TopDoctors from '../components/TopDoctors';
function Home(){
    return(
        <div>
            <Header/>
            <Speciality />
            <TopDoctors />
        </div>
    );
}
export default Home;