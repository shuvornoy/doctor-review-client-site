import React from 'react';
import Info from '../../Shared/Info/Info';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MakeAppointment from '../MarkAppoment/MarkAppoment';
import HomeServices from '../Services/HomeService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices />
           <div className="text-center py-10">
           <button className="btn btn-outline px-10">  <a href="/services">SEE ALL</a> </button>
           <Info />
           <MakeAppointment />
           <Contact />
           </div>
        </div>
    );
};

export default Home;