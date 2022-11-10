import React, { useEffect, useState } from 'react';
import Info from '../../Shared/Info/Info';
import ServiceHero from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MakeAppointment from '../MarkAppoment/MarkAppoment';
import ServiceCard from '../Services/ServiceCard';



const Home = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://modul-67-assignment-server-sit.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl py-5 font-semibold">My Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(0,3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
                
            </div>
            <div className="text-center py-10">
           <button className="btn btn-outline px-10">  <a href="/services">SEE ALL</a> </button>
           </div>
        </div>
           <Info />
           <ServiceHero />
           <MakeAppointment />
           <Contact />
           </div>
       
    );
};

export default Home;