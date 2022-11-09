import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewUpdate = () => {
    const storUpdate = useLoaderData()
    console.log(storUpdate)
    return (
        <div>
            <h2>jhdsifjsdfj{storUpdate.customer}</h2>
        </div>
    );
};

export default ReviewUpdate;