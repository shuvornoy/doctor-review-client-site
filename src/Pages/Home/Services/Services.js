import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet';

const Services = () => {
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
                <title>services</title>
            </Helmet>
            <div className='text-center mb-4'>
                <h2 className="text-5xl py-5 font-semibold">My Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;