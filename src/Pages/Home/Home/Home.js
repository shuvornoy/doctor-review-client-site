import React from 'react';
import Info from '../../Shared/Info/Info';
import ServiceHero from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MakeAppointment from '../MarkAppoment/MarkAppoment';
import HomeServices from '../Services/HomeService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices />
           <Info />
           <ServiceHero />
           <MakeAppointment />
           <Contact />
           </div>
       
    );
};

export default Home;