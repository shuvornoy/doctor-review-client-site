import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceHero from '../../Shared/About/About';
import Contact from '../../Shared/Contact/Contact';
import Info from '../../Shared/Info/Info';
import MakeAppointment from '../../Shared/MarkAppoment/MarkAppoment';
import Banner from '../Banner/Banner';
import ServiceCard from '../Services/ServiceCard';
import { Helmet } from 'react-helmet';

const Home = () => {

    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://modul-67-assignment-server-sit.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Doctor review</title>
            </Helmet>
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
        </div>
           <div className="text-center py-10">
            <Link to='services'>
           <button className="btn btn-outline px-10">SEE ALL</button>
           </Link>
        </div>
        <Info />
        <MakeAppointment />
        <ServiceHero />
        <Contact />
        </div>
    );
};

export default Home;