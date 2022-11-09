import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../Services/HomeService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices />
           <div className="text-center py-10">
           <button className="btn btn-outline px-10">  <a href="/services">SEE ALL</a> </button>
           </div>
        </div>
    );
};

export default Home;