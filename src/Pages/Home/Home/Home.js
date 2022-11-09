import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
           <div className="text-center py-10">
           <button className="btn btn-outline px-10">  <a href="/services">SEE ALL</a> </button>
           </div>
        </div>
    );
};

export default Home;