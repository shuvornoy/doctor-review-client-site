import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Details = () => {
    const { _id, title, price,description, img} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.Name.value}`;
        const images = `${form.images.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            images,
            message
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <h2 className="text-4xl">services : {title}</h2>
                <img src={img} alt="" />
                <p>{description}</p>
                <h4 className="text-3xl">Price: {price}</h4>
                <button className=' btn btn-outline'>Details</button>
            <form onSubmit={handlePlaceReview}>
                  <h2 className="text-4xl">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="Name" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="images" type="text" placeholder="img URL" className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Details;